var express = require('express')
var router = express.Router();
var userService = require('../services/userService')
router.post("/save-user", function (req, res, next) {
    userService.saveUserService();
    res.send("sss")
})

module.exports = router;