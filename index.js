var http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) { 
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<!DOCTYPE html><html><body><h1>Hello World! <h1>Want to check changes on Server side</h1></h1><p>This is a paragraph. and changes on server</p></body></html>");

    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
}); 
