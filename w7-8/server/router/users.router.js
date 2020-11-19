const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const controller = require('./user.controller');

router.use(bodyParser.urlencoded());
router.use(bodyParser.json());

router.post('/post-user-info', (req, resp, next) => {
    controller.postUserInfo(req, resp, next);
})

router.get('/get-user-info', (req, resp, next) => {
    controller.getUserInfo(req, resp, next);
})

router.get('/list', (req, resp, next) => {
    controller.getList(req, resp, next);
})

module.exports = router;