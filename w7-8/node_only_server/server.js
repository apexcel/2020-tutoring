const http = require('http');
const fs = require('fs');

const sendStatics = (resp, respCode, path, contentType) => {
    if (!respCode) respCode = 200;
    if (!contentType) contentType = 'text/plain';

    fs.readFile(__dirname + path, (err, data) => {
        if (err) {
            resp.writeHead(500, { 'Content-Type': 'text/plain' });
            resp.end('500 - Internal Error');
        }
        else {
            resp.writeHead(respCode, { 'Content-Type': contentType });
            resp.end(data);
        }
    });
}

http.createServer((req, resp) => {
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    
    console.log(req.headers)
    console.log(req.url)

    switch (path) {
        case '':
            sendStatics(resp, 200, '/public/index.html', 'text/html');
            // resp.writeHead(200);
            // resp.end('default path');
            break;
        case '/profile':
            sendStatics(resp, 200, '/public/profile.html', 'text/html');
            // resp.writeHead(200);
            // resp.end('profile path');
            break;
        default:
            resp.writeHead(404, {'Content-type': 'text/plain'});
            resp.end('Not Found');
            break;
    }
}).listen(9000);