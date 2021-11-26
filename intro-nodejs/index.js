const http = require("http");
const host = "http://localhost";
const port = 3000;
const status = require("./PCRAMUsage.js");

http.createServer((req, res) => {
    res.write('<h1>Hello World</h1>')
    res.write('<h3>Status:</h3>')
    res.write(
        `<ul>
            <li>OS: ${status.OS}</li>
            <li>Architecture: ${status.ARCH}</li>
            <li>Total RAM: ${status.TOTAL_RAM}MB</li>
            <li>Free RAM: ${status.FREE_RAM}MB</li>
            <li>Used RAM: ${status.USAGE}%</li>
        </ul>
        `
    )
    res.end('<h5>Rodrigo Ide</h5>')
}).listen(port, () => console.log(`Server running at ${host}:${port}`));