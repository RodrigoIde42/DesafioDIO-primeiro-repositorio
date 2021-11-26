const http = require('http');

http.createServer((req, res) => {
    res.write('<h1>Hello World</h1>')
    res.end('<h3>Rodrigo Ide</h3>')
}).listen(3000, () => console.log('Server started on port 3000'));