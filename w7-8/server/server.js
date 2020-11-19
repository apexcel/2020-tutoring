const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 9000;
const STATIC = path.join(__dirname, 'static/');

const router = require('./router/route');
const users = require('./router/users.router');
//app.use('/static', express.static(STATIC));

app.use(cors());
app.use('/static', router);
app.use('/users', users);

app.listen(PORT, () => {
    console.log(`Express server running on ${PORT} port`);
    console.log('Ctrl + C to terminate');
});

module.exports = app;