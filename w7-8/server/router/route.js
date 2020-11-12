const express = require('express');
const router = express.Router();

router.get('/', (req, resp) => {
    resp.send('HI');
    console.log('Root route')
});

router.get('/static/login', (req, resp) => {
    console.log(req.query)
    resp.json({
        ID: req.query.id,
        PW: req.query.pwd
    })
})

module.exports = router;