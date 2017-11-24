var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/complete', function(req, res, next) {
    res.render('complete', { title: 'complete', titleSite: "delivery mails.com", error: req.flash("error"), success: req.flash("success")});
});

module.exports = router;
