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

const getAllFiguras = (callback) => {
    request('https://nachota-inc-api.herokuapp.com/figuras', (error, res, body) => {
        if(error){
          console.log('Error', error)  
          return callback(error, undefined);
        }
        if (res){
            if(body){
               return callback(undefined, body);
            }
            callback("No se encontraron figuras.", undefined);
        }
    });
}

const getAllMangas = (callback) => {
    request('https://nachota-inc-api.herokuapp.com/mangas', (error, res, body) => {
        if(error){
          console.log('Error', error)  
          return callback(error, undefined);
        }
        if (res){
            if(body){
               return callback(undefined, body);
            }
            callback("No se encontraron mangas.", undefined);
        }
    });
}

module.exports= {
    getAllDestacados,
    getAllOfertas,
    getAllProductos,
    getAllFiguras,
    getAllMangas
};