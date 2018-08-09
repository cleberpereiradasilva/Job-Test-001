const express = require('express')
var request = require("request")
var path = require('path');


const app = express()
app.use(express.static('build'));


const port = 8080



function getUrl(url,callback){
  request({
      url: url,
      json: true
    }, function (error, response, body) {     
        callback(body)
    }    
  );
}



app.get('/api/items', function(req, res){          
    const url = 'https://api.mercadolibre.com/sites/MLA/search?q='+req.query.q+'&offset=0&limit=4'
    getUrl(url,(body) =>{
      res.json(body)
    });
});


app.get('/api/items/:id', function(req, res){    
  let product = {}
  let url = 'https://api.mercadolibre.com/items/'+req.params.id   
  getUrl(url,(prod) =>{
      product = prod
      let url = 'https://api.mercadolibre.com/items/'+req.params.id+'/description'                      
      getUrl(url,(desc) =>{          
          product.description = desc
          res.json(product)
      });
  });
});


app.get('/', function(req, res) {
    res.sendFile('./build/index.html');
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
  console.log('To shutdown the server: ctrl + c ...')
})