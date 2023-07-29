const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') {
            res.end("Default Page");
        }
        if (req.url === '/gethello') {
            fs.readFile('./resources/hello.html', (err, data) => {
                if (err) {
                    return res.send("Something went wrong!!");
                }
                else {
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    res.write(data);
                    return res.end();
                }
            })
        }
        if (req.url === '/ajaxcall') {
            fs.readFile('./resources/ajaxcall.html', (err, data) => {
                if (err) {
                    return res.send("Something went wrong!!");
                }
                else {
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    res.write(data);
                    return res.end();
                }
            })
        }
    }

}).listen(8000, () => {
    console.log("server listening on port 8000");
})
