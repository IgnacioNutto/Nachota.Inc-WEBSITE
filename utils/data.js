const request = require('postman-request');

const getAllDestacados = (callback) => {
    request('https://nachota-inc-api.herokuapp.com/destacados', (error, res, body) => {
        if(error){
          console.log('Error', error)  
          return callback(error, undefined);
        }
        if (res){
            if(body){
               return callback(undefined, body);
            }
            callback("No se encontraron destacados.", undefined);
        }
    });
}

const getAllOfertas = (callback) => {
    request('https://nachota-inc-api.herokuapp.com/ofertas', (error, res, body) => {
        if(error){
          console.log('Error', error)  
          return callback(error, undefined);
        }
        if (res){
            if(body){
               return callback(undefined, body);
            }
            callback("No se encontraron ofertas.", undefined);
        }
    });
}

const getAllProductos = (callback) => {
    request('https://nachota-inc-api.herokuapp.com/productos', (error, res, body) => {
        if(error){
          console.log('Error', error)  
          return callback(error, undefined);
        }
        if (res){
            if(body){
               return callback(undefined, body);
            }
            callback("No se encontraron productos.", undefined);
        }
    });
}

module.exports= {
    getAllDestacados,
    getAllOfertas,
    getAllProductos
};