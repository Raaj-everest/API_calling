const axios = require('axios');

async function getFirstAlbumTitle() {
  const response = await axios.get('https://dog.ceo/api/breeds/image/random');
  return response.data.status;
}

module.exports = getFirstAlbumTitle;