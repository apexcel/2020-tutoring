const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();

const STATIC = path.join(__dirname, '../static/');
router.use('/static', express.static(STATIC));
router.use(bodyParser.urlencoded());

router.get('/', (req, resp) => {
    resp.send('HI');
});

// GET으로 요청하면 URL과 함께 쿼리 스트링으로 

router.get('/static/login', (req, resp) => {
    console.log(req.query)
    resp.json({
        ID: req.query.id,
        PW: req.query.pwd,
        HIDDEN: req.query.hidden
    });
});

//POST로 요청하면 Content-Type이 application/x-www-form-urlencode 이다.

router.post('/static/login', (req, resp) => {
    console.log(req.body)
    resp.json({
        ID: req.body.id,
        PW: req.body.pwd,
        HIDDEN: req.body.hidden
    })
});

router.get('/ajax', (req, resp) => {
    resp.sendFile(STATIC + '/ajax.html');
});

router.get('/ajax/test', (req, resp) => {
    resp.sendFile(STATIC + '/test.html')
})

module.exports = router;