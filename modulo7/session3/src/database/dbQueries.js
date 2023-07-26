const pool = require('./database.js');
const pgp = require('pg-promise')();

async function insertUsuarios(usuarios) {
  const values = usuarios.map((user) => ({
    id: user.id,
    nombre: user.nombre,
    apellido: user.apellido,
    timestamp: new Date(),
  }));

  const cs = new pgp.helpers.ColumnSet(['id', 'nombre', 'apellido', 'timestamp'], { table: 'usuarios' });

  try {
    await pool.none(pgp.helpers.insert(values, cs));
    console.log('Usuarios insertados correctamente.');
  } catch (error) {
    console.error('Error al insertar usuarios en la base de datos:', error);
    throw new Error('Error al insertar usuarios en la base de datos');
  }
}

async function getUsuariosFromDB() {
  const queryText = 'SELECT * FROM usuarios LIMIT 100';

  try {
    const result = await pool.manyOrNone(queryText);
    return result;
  } catch (error) {
    throw new Error('Error al obtener usuarios de la base de datos');
  }
}

module.exports = { insertUsuarios, getUsuariosFromDB };