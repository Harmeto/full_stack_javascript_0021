const { getUsuarios } = require('./utils/ramdomUser.js');
const { insertUsuarios, getUsuariosFromDB } = require('./database/dbQueries.js');
const chalk = require('chalk');
const _ = require('lodash');

async function main() {
  try {
    // Obtener usuarios de la API Random User usando Axios
    const usuarios = await getUsuarios();

    // Insertar usuarios en la base de datos
    //await insertUsuarios(usuarios);

    // Obtener usuarios de la base de datos
    const usuariosFromDB = await getUsuariosFromDB();

    // Devolver la lista de usuarios al cliente
    //console.log('Lista de usuarios:');
    //console.log(usuariosFromDB);

    // Imprimir la lista de usuarios por la consola con fondo blanco y color de texto azul usando Chalk
    console.log(chalk.blue.bgBlack('Lista de usuarios:'));
    usuariosFromDB.forEach((user) => {
      console.log(chalk.blue.bgBlack(JSON.stringify(user)));
    });
  } catch (error) {
    console.error(error.message);
  }
}

main();