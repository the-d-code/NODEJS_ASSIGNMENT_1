const { json } = require('body-parser');
const express = require('express')
const app = express();
const PORT = 8000;
app.use(express.static('public'))

let scores = [
    { score: "124/1", overs: "19.4" },
    { score: "138/2", overs: "21.3" },
    { score: "169/2", overs: "25.1" },
    { score: "178/3", overs: "28.0" },
    { score: "190/5", overs: "32.1" },
    { score: "280/6", overs: "42.5" },
    { score: "299/8", overs: "46.3" },
    { score: "311/9", overs: "48.4" },
    { score: "328/10", overs: "50.0" }
]

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT} http://localhost:${PORT}`)
})
app.get("/getscore", (req, res) => {
    let resScore =
        JSON.stringify(scores[randomIntFromInterval(1, scores.length - 1)])
    res.setHeader('content-type', 'application/json');
    res.send(resScore)
})