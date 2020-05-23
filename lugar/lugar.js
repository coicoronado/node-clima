const axios = require('axios');

const getLugarLatLng = async(ubicacion) => {
  const encodedUrl = encodeURI(ubicacion);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    headers: {
      'x-rapidapi-key': 'f09f494c85msh641c81a38e24890p174df0jsnc90bab7a2dfa',
      'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
      'useQueryString': true
    }
  });

  const resp = await instance.get();
  const data = resp.data.Results[0];
  const direccion = data.name;
  const lat = data.lat;
  const lng = data.lon;

  if (data.length === 0) {
    throw new Error(`No Hat resultados para ${ubicacion}`);
  }
    

  return {
    direccion,
    lat,
    lng
  }
};

module.exports = {
  getLugarLatLng
};