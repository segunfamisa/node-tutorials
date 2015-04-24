var myfilter = require('./mymodule.js')

var filename = process.argv[2]
var fileExt = process.argv[3]

myfilter(filename, fileExt, function(err, data){
  if(err)
    return console.error("An error occured", err)
  data.forEach(function(name){
    console.log(name);
  })
})
