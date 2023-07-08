import pkg from 'pg';
const { Pool } = pkg;

const client = new Pool({
    user: 'postgres',
    password: 'folk78',
    host: 'localhost',
    database: 'jeans',
    port: '5432',
    maxUses: 10,
    idleTimeoutMillis: 1000,
})


async function createStudentsTable() {
    try {
      await client.connect();
      await client.query(`
        CREATE TABLE students (
          id SERIAL PRIMARY KEY,
          name VARCHAR(100),
          rut VARCHAR(12),
          course VARCHAR(50),
          level INTEGER
        );
      `);
      console.log('Tabla de estudiantes creada exitosamente');
    } catch (err) {
      console.error('Error creando la tabla de estudiantes', err);
    }
  }
  
  async function addStudent(name, rut, course, level) {
    try {
      await client.connect();
      const result = await client.query(`
        INSERT INTO students (name, rut, course, level)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
      `, [name, rut, course, level]);
      const insertedStudent = result.rows[0];
      console.log('Estudiante agregado:', insertedStudent);
    } catch (err) {
      console.error('Error agregando estudiante', err);
    } 
  }

  async function getAllStudents() {
    try {
      await client.connect();
      const result = await client.query('SELECT * FROM students');
      const students = result.rows;
      console.log('Todos los estudiantes:', students);
    } catch (err) {
      console.error('Error consultando estudiantes', err);
    } 
  }

  async function getStudentByRut(rut) {
    try {
      await client.connect();
      const result = await client.query('SELECT * FROM students WHERE rut = $1', [rut]);
      const student = result.rows[0];
      console.log('Estudiante por rut:', student);
    } catch (err) {
      console.error('Error consultando estudiante por rut', err);
    }
  }

//   async function updateStudent(studentId, field, value) {
//     try {
//       await client.connect();
//       const result = await client.query(/* `
//         UPDATE students
//         SET name = $1, rut = $2, course = $3, level = $4
//         WHERE id = $5
//         RETURNING *;
//       ` */
      
//       `UPDATE students SET $1 = $2 WHERE id = $3 RETURNING *;`
//       , [field, value, studentId]);

      
//       const updatedStudent = result.rows[0];
//       console.log('Estudiante actualizado:', updatedStudent);
//     } catch (err) {
//       console.error('Error actualizando estudiante', err);
//     } 
//   }

async function updateStudent(studentId, field, value) {
    try {
      await client.connect();
  
      let updateQuery;
  
      // Construir dinámicamente la consulta de actualización según el campo
      if (field === 'name') {
        updateQuery = `UPDATE students SET name = $1 WHERE id = $2 RETURNING *;`;
      } else if (field === 'rut') {
        updateQuery = `UPDATE students SET rut = $1 WHERE id = $2 RETURNING *;`;
      } else if (field === 'course') {
        updateQuery = `UPDATE students SET course = $1 WHERE id = $2 RETURNING *;`;
      } else if (field === 'level') {
        updateQuery = `UPDATE students SET level = $1 WHERE id = $2 RETURNING *;`;
      } else {
        throw new Error('Campo inválido');
      }
  
      // Ejecutar la consulta de actualización
      const result = await client.query(updateQuery, [value, studentId]);
      const updatedStudent = result.rows[0];
      console.log('Estudiante actualizado:', updatedStudent);
    } catch (err) {
      console.error('Error actualizando estudiante', err);
    }
  }
  

  async function deleteStudent(studentId) {
    try {
      await client.connect();
      await client.query('DELETE FROM students WHERE id = $1', [studentId]);
      console.log('Estudiante eliminado exitosamente');
    } catch (err) {
      console.error('Error eliminando estudiante', err);
    } 
  }

    export  {deleteStudent, updateStudent, getStudentByRut, getAllStudents, addStudent, createStudentsTable}

  //createStudentsTable();
  //addStudent('carlos', '18193085-3', 'programacion', 1);
  //getAllStudents();
  //getStudentByRut('18193085-3');
  //updateStudent(2, 'name','carlitos')
 


  ((args) => {
    const funcion = args[2];
    const parametros = args.slice(3);
  
    switch (funcion) {
      case 'getAllStudents':
        getAllStudents(...parametros);
        break;
      case 'getStudentByRut':
        getStudentByRut(...parametros);
        break;
      default:
        console.log('Función no válida');
    }
  })(process.argv);