const express = require('express');
const path = require('path');
const app = express();

// const PORT = process.env.PORT || 9000;
// const STATIC = path.join(__dirname, 'static/');
// const router = require('./router/route');
// app.use('/static', express.static(STATIC))

// app.use('/', router);

// app.get('/', (req, resp) => {
//     resp.send('Hello');
//     return;
// });

// app.get('/profile', (req, resp) => {
//     resp.send('Profile');
// });

// app.get('/static', (req, resp) => {
//     resp.sendFile(STATIC);
// });

app.listen(PORT, () => {
    console.log(`Express server running on ${PORT} port`);
    console.log('Ctrl + C to terminate');
});

module.exports = app;