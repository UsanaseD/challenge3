const apiCallFromRequest = require( './Request.js');
const http = require('http')

http.createServer((req, res) => {
    if (req.url === "/request/photos") {
        apiCallFromRequest.callApi( function(response) {
            res.write(JSON.stringify(response));
            res.end();
        })  
    }
}).listen(3000)
console.log("service running on port 3000...")