const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    demand: true,
    desc: 'Direccion de una ciudad a obtener informacion'
  }
}).argv;

const getInfo = async (direccion) => {
  const lugarData = await lugar.getLugarLatLng(direccion);
  const temp = await clima.getClima(lugarData.lat, lugarData.lng);
  return { ...lugarData, temp };

};
// el clima de XXXX es de XXXX
// No de puede determinar el clima de xxxxx

getInfo(argv.direccion).then(resp => {
  console.log(`El clima de ${resp.direccion} es de ${resp.temp}ºC`);
}).catch(err => {
  console.log(`No de pudo determinar el clima de ${argv.direccion}`);
});

// lugar.getLugarLatLng(argv.direccion)
//   .then(console.log);

// clima.getClima(40.7500,-74.000)
//   .then(console.log)
  // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=cdac2de5ab8d30da6d9ad95e212f8d2e&units=metric

