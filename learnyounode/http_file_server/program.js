var http = require('http');
var fs = require('fs');
var bl = require('bl');

var port = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function(request, response){
  //use fs to stream the file to the response.
  var readStream = fs.createReadStream(filePath);

  //on open, pipe the readstream contents
  readStream.on('open', function(){
    readStream.pipe(response);
  })


  //on error, send an error response
  readStream.on('error', function(err){
    response.end(err);
  })

})

server.listen(port);
