const axios = require('axios');

const getClima = async(lat, lng) => {
  const appId = 'cdac2de5ab8d30da6d9ad95e212f8d2e';
  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${appId}&units=metric`);
  
  // const data = resp.data.Results[0];
  // if (data.length === 0) {
  //   throw new Error(`No Hat resultados para ${ubicacion}`);
  // }
    

  return resp.data.main.temp;
};

module.exports = {
  getClima
};