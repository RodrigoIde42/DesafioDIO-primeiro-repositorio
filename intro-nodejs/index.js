const http = require('http');
const host = "http://localhost";
const port = 3000;

http.createServer((req, res) => {
    res.write('<h1>Hello World</h1>')
    res.end('<h3>Rodrigo Ide</h3>')
}).listen(port, () => console.log(`Server running at ${host}:${port}`));