const axios = require('axios');

const MAX_RECORDS = 100;

async function getUsuarios() {
  try {
    const response = await axios.get('https://randomuser.me/api/', {
      params: { results: MAX_RECORDS },
    });

    return response.data.results.map((user) => ({
      id: user.login.uuid,
      nombre: user.name.first,
      apellido: user.name.last,
      timestamp: user.registered.date,
    }));
  } catch (error) {
    throw new Error('Error al obtener usuarios de la API Random User');
  }
}

module.exports = { getUsuarios };