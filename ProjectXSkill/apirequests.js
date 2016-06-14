var http = require('http');
var url = "http://projectx-env.9ejcy7gdfj.us-west-2.elasticbeanstalk.com";


function lookup(device_id , callback){
var options = {
    host: url,
    path: "/api/lookup"
}

return callback();
}

function request(options, callback){
  http.request(options, function(response){
    var str = '';
    response.on('data', function (chunk){
      str += chunk;
    });

    response.on('end', function (){
      callback(JSON.parse(str));
    });

  }).end;
}
