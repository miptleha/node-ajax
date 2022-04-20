let fs = require('fs');
let http = require('http');

const port = 8080;
let server = http.createServer(function (req, res) {
    console.log(`${req.method}: ${req.url}`);
    let file = null;
    if (req.url == "/") {
        file = "index.html";
    }
    else if (req.url == "/hello") {
        file = "hello.html";
    }
    else if (req.url == "/cat") {
        file = "cat.jpg";
    }
    else {
        res.writeHead(404, `Invalid url: ${req.url}`)
        res.end();
        return;
    }
    //stream = 
    fs.readFile(file, (err, data) => {
        if (err) {
            console.log(`error read file: ${file}: ${err}`);
            res.writeHead(500, `Internal error: ${err.message}`);
            res.end();
        }
        res.writeHead(200, "Ok");
        res.end(data);
    });
    /*stream.on("error", e => {
        console.log(`error read file: ${file}: ${e}`);
        res.writeHead(300, `Internal error: ${e.message}`);
        res.end();
        return;
    });
    res.writeHead(200, "Ok");
    stream.pipe(res.stream);*/
});
server.listen(port, _ => console.log(`Server started on ${port} port`));