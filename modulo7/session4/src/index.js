const { Pool, Client } = require('pg')
const Cursor = require('pg-cursor')
const connectionString = 'postgres://postgres:folk78@localhost:5432/jeans'
const pool = new Pool({connectionString})


async function registrarTransaccion(descripcion, cuentaOrigen, cuentaDestino, monto) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Restar el monto de la cuenta origen
    await client.query('UPDATE cuentas SET saldo = saldo - $1 WHERE id = $2', [monto, cuentaOrigen]);

    // Sumar el monto a la cuenta destino
    await client.query('UPDATE cuentas SET saldo = saldo + $1 WHERE id = $2', [monto, cuentaDestino]);

    // Registrar la transacción con la descripción
    const result = await client.query(
      'INSERT INTO transacciones (cuenta_origen, cuenta_destino, monto, descripcion) VALUES ($1, $2, $3, $4) RETURNING *',
      [cuentaOrigen, cuentaDestino, monto, descripcion]
    );

    await client.query('COMMIT');
    console.log('Última transacción realizada:');
    console.log(result.rows[0]);
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error en la transacción:', error);
  } finally {
    client.release();
  }
}

async function consultarTransaccionesDeCuenta(cuentaId) {
  const client = await pool.connect();
  try {
    const cursor = client.query(new Cursor('SELECT * FROM transacciones WHERE cuenta_origen = $1 LIMIT 10', [cuentaId]));

    cursor.read(10, (err, rows) => {
      if (err) {
        console.error('Error al leer las transacciones:', err);
      } else {
        console.log(rows);
        cursor.close(() => client.release());
      }
    });
  } catch (error) {
    console.error('Error al consultar las transacciones:', error);
  }
}

async function consultarSaldoDeCuenta(cuentaId) {
  const client = await pool.connect();
  try {
    const cursor = client.query(new Cursor('SELECT saldo FROM cuentas WHERE id = $1', [cuentaId]));

    cursor.read(1, (err, rows) => {
      if (err) {
        console.error('Error al leer el saldo de la cuenta:', err);
      } else {
        if (rows.length === 0) {
          console.log('Cuenta no encontrada.');
        } else {
          console.log('Saldo de la cuenta:', rows[0].saldo);
        }
        cursor.close(() => client.release());
      }
    });
  } catch (error) {
    console.error('Error al consultar el saldo de la cuenta:', error);
  }
}

async function crearCuenta(saldoInicial) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'INSERT INTO cuentas (saldo) VALUES ($1) RETURNING *',
      [saldoInicial]
    );

    console.log('Cuenta creada:');
    console.log(result.rows[0]);
  } catch (error) {
    console.error('Error al crear la cuenta:', error);
  } finally {
    client.release();
  }
}

// Leer los argumentos de la línea de comando
const args = process.argv.slice(2);
if (args[0] === 'transfer' && args.length === 5) {
  const descripcion = args[1];
  const cuentaOrigen = parseInt(args[2]);
  const cuentaDestino = parseInt(args[3]);
  const monto = parseFloat(args[4]);
  registrarTransaccion(descripcion, cuentaOrigen, cuentaDestino, monto);
}

if (args[0] === 'transac' && args.length === 2) {
  const cuentaId = parseInt(args[1]);
  consultarTransaccionesDeCuenta(cuentaId);
}

if (args[0] === 'cuenta' && args.length === 2) {
  const cuentaId = parseInt(args[1]);
  consultarSaldoDeCuenta(cuentaId);
}

if (args[0] === 'crearCuenta' && args.length === 2) {
  const saldoInicial = parseFloat(args[1]);
  crearCuenta(saldoInicial);
}