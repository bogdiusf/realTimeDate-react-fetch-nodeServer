var http = require('http');

// Create a server object
http.createServer(function (req, res) {

    // http header
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let today = new Date();
    let months = today.getMonth() + 1
    let minutes = today.getMinutes()

    let date = today.getDate() + '-' + (months < 10 ? '0' + months : months) + '-' + today.getFullYear();
    let time = today.getHours() + ":" + (today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()) + ":" + today.getSeconds();
    let dateTime = date + ' | ' + time;
    let url = req.url;

    if (url === '/gettime') {

        res.write(`Bucharest GMT+2: ${dateTime}`);
        res.end();
    }

}).listen(4400, function () {

    // The server object listens on port 4400
    console.log("server start at port 4400");
});