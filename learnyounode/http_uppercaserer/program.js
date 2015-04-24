var http = require('http');
var map = require('through2-map');

var port = process.argv[2];

var server = http.createServer(function(request, response){

  //if the request is not post notify the user
  if(request.method != 'POST'){
    response.end('A post request is required');
  }


  request.pipe(map(function(chunk){
    return chunk.toString().toUpperCase();
  })).pipe(response);



  request.on('error', function(err){
    response.end(err);
  })

})

server.listen(port);
