
var http = require('http');
var url  = require('url');

function start(route,handler){
    function onRequest(req,res){
    //    var str = JSON.stringify(req);
    //    console.log('1'+str);
        var pathname = url.parse(req.url).pathname;
        console.log("Request for "  + pathname +  " received.");
        //console.log("Request received.");

        route(handler,pathname);

        res.writeHead(200,{"Content-Type":'text/plain'});
        res.write("Hello node");
        res.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log('Server has started.');
}

exports.start = start;
