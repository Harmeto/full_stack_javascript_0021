"use strict";
const { v4: uuidv4 } = require('uuid');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
      {
        id: uuidv4(),
        first_name: "Mateo",
        last_name: "Díaz",
        email: "mateo.diaz@correo.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        first_name: "Santiago",
        last_name: "Mejiás",
        email: "santiago.mejias@correo.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        first_name: "Lucas",
        last_name: "Rojas",
        email: "lucas.rojas@correo.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        first_name: "Facundo",
        last_name: "Fernandez",
        email: "facundo.fernandez@correo.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const bootcamps =  [
      {
        id: uuidv4(),
        title: "Introduciendo El Bootcamp De React",
        cue: 10,
        description:
          "React es la librería más usada en JavaScript para el desarrollo de interfaces",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        title: "Bootcamp Desarrollo Web Full Stack",
        cue: 12,
        description:
          "Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares, como: JavaScript, nodeJS, Angular, MongoDB, ExpressJS",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        title: "Bootcamp Big Data, Inteligencia Artificial & Machine Learning",
        cue: 18,
        description:
          "Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados de Artificial Intelligence y Machine Learning",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]


    await queryInterface.bulkInsert("Users", users)
    await queryInterface.bulkInsert("Bootcamps", bootcamps)
    await queryInterface.bulkInsert("UserBootcamps",  [
      //MATEO DIAS
      {
        id: uuidv4(),
        UserId: users[0].id,
        BootcampId: bootcamps[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        UserId: users[0].id,
        BootcampId: bootcamps[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        UserId: users[0].id,
        BootcampId: bootcamps[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      //SANTIAGO MEJIAS 
      {
        id: uuidv4(),
        UserId: users[1].id,
        BootcampId: bootcamps[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        UserId: users[1].id,
        BootcampId: bootcamps[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      //LUCAS ROJAS
      {
        id: uuidv4(),
        UserId: users[2].id,
        BootcampId: bootcamps[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]
    )

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Bootcamps", null, {});
    await queryInterface.bulkDelete("UserBootcamps", null, {});
  },
};
