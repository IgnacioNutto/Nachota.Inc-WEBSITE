const request = require('postman-request');

const getAllProducts = (callback) => {
    request('https://nachota-inc-api.herokuapp.com/products', (error, res, body) => {
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
 
  getAllProducts

}