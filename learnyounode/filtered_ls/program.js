var fs = require('fs');

/*
var dir = process.argv[2];
var extension = process.argv[3];
fs.readdir(dir, function(err, data){
  if(err) throw err;

  for(var i=0; i<data.length; i++){
    if(data[i].search(extension) > 0){
      console.log(data[i]);
    }
  }
})
*/

//official solution
var path = require('path')

fs.readdir(process.argv[2], function(err, data){
  data.forEach(function(file){
    if(path.extname(file) === '.' + process.argv[3]){
      console.log(file);
    }
  })
})
