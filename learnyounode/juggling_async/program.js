//import http and bl
var http = require('http');
var bl = require('bl');

//get the urls from the command input
var urls = [process.argv[2], process.argv[3], process.argv[4]];

//set up count and responses
var count = 0;
var responses = [];

for(var i=0; i<urls.length; i++){
  httpGet(i);
}


function httpGet(index){
  var url = urls[index];
  http.get(url, function(response){
    response.pipe(bl(function(err, data){
      if(err)
        console.err(err);

      data = data.toString();

      responses[index] = data;
      count++;

      //if all the responses have come in, then print.
      if(count == urls.length){
        //print the array
        for(var i=0; i<urls.length; i++){
          console.log(responses[i]);
        }
      }

    }))
  })
}
