const axios = require('axios');

const getLugarLatLng = async( dir ) => {

    const encodedUlr = encodeURI( dir );

    const instance = axios.create({
        baseURL: `https://geocode.xyz/?locate=${ encodedUlr }&json=1`,
        //En caso de tener headers el request
        //headers: {´key´, 'valor'}
    });

    const resp = await instance.get();

    if( resp.data.matches === null ){
        throw new Error(`No hay resultados para: ${ dir }`);
    }

    const direccion = resp.data.standard.city;
    const lng = resp.data.longt;
    const lat = resp.data.latt;

    return{
        direccion,
        lat,
        lng
    }


}

module.exports = {
    getLugarLatLng
}
