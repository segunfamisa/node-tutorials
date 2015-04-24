var http = require('http');
var url = require('url');

var PORT = process.argv[2];

var ENDPOINT_PARSE_TIME = '/api/parsetime';
var ENDPOINT_UNIX_TIME = '/api/unixtime';

var PARAM_ISO = 'iso';

var server = http.createServer(function(request, response){

  //write response header
  response.writeHead(200, { 'Content-Type': 'application/json' })

  //check the request method
  if(request.method == 'GET'){
    //do the rest of the operation
    var req = url.parse(request.url, true);

    //extract parameters from the request
    var pathname = req['pathname'];
    var params = req['query'];

    //build date
    var date = new Date(params[PARAM_ISO]);

    //if the pathname is the same as ENDPOINT_PARSE_TIME
    //perform parse time requests
    if(pathname == ENDPOINT_PARSE_TIME){

      //build the response
      var res = {
        hour : date.getHours(),
        minute : date.getMinutes(),
        second : date.getSeconds()
      }

      response.end(JSON.stringify(res));
    }

    //if pathname is ENDPOINT_UNIX_TIME,
    //perform unix time request
    else if(pathname == ENDPOINT_UNIX_TIME){

      var res = {
        unixtime : date.getTime()
      }

      response.end(JSON.stringify(res));
    }




  }
  else{
    //return an error message
    response.end('A get request is required');
  }

})

server.listen(PORT);

/*
  official solution

  var http = require('http')
    var url = require('url')

    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }

    function unixtime (time) {
      return { unixtime : time.getTime() }
    }

    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result

      if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
      else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)

      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))

*/
