var net = require('net')


//get the port from the argument
var port = process.argv[2]

var server = net.createServer(function(socket){
  socket.on('end', function(){

  })

  //write the time;
  socket.write(getDate())

  socket.end()

})

server.listen(port, function(){
  //log that it has been bound
})



function getDate(){
  var date = new Date()
  var year, month, day, hour, minute


  year = date.getFullYear()

  //get the month
  month = fillValue(date.getMonth() + 1)

  day = fillValue(date.getDate())

  hour = fillValue(date.getHours())

  minute = fillValue(date.getMinutes())

  return year + "-" +
    month + "-" + day + " " + hour + ":" + minute + "\n"
}

function fillValue(value){
  value = value.toString()
  return value.length < 2 ? '0' + value : value
}
