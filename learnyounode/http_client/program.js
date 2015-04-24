var http = require('http');
var url = process.argv[2];

/*
http.get(url, function(res){
  res.on('data', function(data){
    console.log(data.toString());
  })
  res.on("error", function(error){
    console.log(error.toString());
  })
})
*/

//official result
http.get(url, function(res){
  res.setEncoding('utf8')
  res.on('data', function(data){
    console.log(data);
  })
  res.on("error", function(error){
    console.log(error);
  })
})
