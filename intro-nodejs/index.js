const http = require("http");
const host = "http://localhost";
const port = 3000;
const status = require("./PCRAMUsage.js");

http.createServer((req, res) => {
    let url = req.url;

    if (url === "/status") {
        res.write('<h3>Status:</h3>')
        res.end(JSON.stringify(status, null, 2));
    } else {
        res.write('<h1>Hello World</h1>')
        res.end('<h5>Rodrigo Ide</h5>')   
    }
}).listen(port, () => console.log(`Server running at ${host}:${port}`));