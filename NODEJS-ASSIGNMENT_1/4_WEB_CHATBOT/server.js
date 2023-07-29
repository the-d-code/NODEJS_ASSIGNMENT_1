const WebSocket = require('ws') // npm i ws --save
var http = require('http');
var fs = require('fs');
const bot = require('bank-chatbot')
const PORT = 8000;

var httpserver = http.createServer(function (request, response) {
    if (request.url == "/") {
        fs.readFile("./public/index.html", (err, data) => {
            response.write(data)
            response.end();
        })
    }
}).listen(PORT, function () {
    console.log(`server listening on port ${PORT} http://localhost:8000`)
});
const wss = new WebSocket.Server({ server: httpserver })
wss.on("connection", (clientws) => {
    var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;
    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';
    clientws.send(`${greet}, How May I Help You?`)
    clientws.on("message", (msg) => {
        const query = msg.toString().toLowerCase()
        clientws.send(bot.reply(query))
    })
})