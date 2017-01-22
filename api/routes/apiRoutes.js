const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.json({
        message: "API call received"
    });
});

module.exports = router;
