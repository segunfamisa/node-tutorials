var path = require('path')
var fs = require('fs')

module.exports = function(dirName, fileExt, callback){
  fs.readdir(dirName, function(err, data){
    if(err) {
      return callback(err)
    }

    data = data.filter(function(file){
      return path.extname(file) === '.' + fileExt
    })

    callback(null, data)
  })
}
