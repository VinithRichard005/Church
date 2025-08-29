// var http= require("http")
// var a = require ("Index.html")

// http.createServer(function (req, res) {
//     res.writeHead(200, {Create ()});
//     res.end();
// }). listen(3000);

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    // Serve index.html
    if (req.url === "/" || req.url === "/index.html") {
        fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Server Error");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("🚀 Server running at http://localhost:3000");
});