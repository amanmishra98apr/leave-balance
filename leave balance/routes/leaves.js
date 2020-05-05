var express = require('express');
var router = express.Router();
var profile = require("../controller/profile")

/* post api for findind leave using id  */
router.post('/', profile.userLeaves);



module.exports = router;
