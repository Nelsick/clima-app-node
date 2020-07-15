'use strict'

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('./config/yargs');


// argv.direccion

// lugar.getLugarLatLng( argv.argv.direccion )
//                     .then( console.log );


// clima.getClima( -33.46238, -70.64911 )
//                 .then( console.log )
//                 .catch(console.log);


const getInfo = async( direccion ) => {

    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const tiempo = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return `El clima de ${ coordenadas.direccion } es de ${ tiempo }°C`;
        
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }

}

getInfo( argv.argv.direccion)
        .then( console.log )
        .catch( console.log);
