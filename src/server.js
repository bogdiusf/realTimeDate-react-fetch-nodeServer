var http = require('http');

// Create a server object
http.createServer(function (req, res) {

    // http header
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let today = new Date();
    let months = today.getMonth() + 1
    let minutes = today.getMinutes()
    let seconds = today.getSeconds()

    // creating date with the format dd-MM-yyyy and time with 
    let date = today.getDate() + '-' + (months < 10 ? '0' + months : months) + '-' + today.getFullYear();
    let time = today.getHours() + ":" + (minutes < 10 ? '0' + minutes : minutes) + ":" + (seconds < 10 ? '0' + seconds : seconds);
    let dateTime = date + ' | ' + time;
    let url = req.url;

    if (url === '/gettime') {  // if request is made on /gettime -> get current time (time that was built above)

        res.write(`Bucharest GMT+2: ${dateTime}`);
        res.end();
    }
    if (url === '/home')  // if request is made on /home -> displays welcome home
    {
        res.write('Welcome home');
        res.end();
    }

}).listen(4400, function () {

    // The server object listens on port 4400
    console.log("server start at port 4400");
});