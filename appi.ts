const Axios = require('axios');

async function API_call() {
  const response = await Axios.get('https://dog.ceo/api/breeds/image/random');

  return response.data.status;
  
}

module.exports = API_call;