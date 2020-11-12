const http = require('http');

http.createServer((req, resp) => {
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

    switch (path) {
        case '':
            resp.writeHead(200);
            resp.end('default path');
            break;
        case '/profile':
            resp.writeHead(200);
            resp.end('profile path');
            break;
    }
}).listen(9000);