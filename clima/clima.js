const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }8&lon=${ lng }&appid=2e7e318bd6629a03efa3c6e20634e7a2&units=metric`)

    temperatura = resp.data.main.temp;

    return temperatura;
}

module.exports = {
    getClima
}