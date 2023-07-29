const http = require("http");
const fs = require("fs");
const url = require('url');
const PORT = 8000;

const server = http.createServer((req, res) => {
    let purl = url.parse(req.url, true);
    if (req.url === '/') {
        fs.readFile('./resources/index.html', (err, data) => {
            if (err) {
                console.log(err);
                return res.end("something went wrong");
            }
            else {
                res.write(data);
                return res.end();
            }
        })
    }
    //handling get request
    if (purl.pathname === '/submit' && req.method === 'GET') {
        res.write("GET Data");
        res.write(`name: ${purl.query.txtname}`);
        res.write(` age: ${purl.query.txtage}`);
        res.end();
    }
    //handling post request
    if (req.url === '/submit' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
        });
        req.on('end', () => {
            res.write(`POST Data: ${body}`);
            res.end();
        });
    }
})

server.listen(PORT, () => {
    console.log("server listening on port 8000");
})