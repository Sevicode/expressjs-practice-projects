const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer")

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('contact', {
        title: 'Contact'
    });
});

//Send email
router.post('/send', (req, res, next) => {
    var transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "text@gmail.com",
            pass: "123456"
        }
    });

    var mailOptions = {
        from: '"Sevda" <test@gmail.com>',
        to: 'support@pcrepair.com',
        subject: 'Hello from PC Repair',
        text: 'You have a submission from... Name: '+req.body.name+' Email:  '+req.body.email+'  Message:  '+req.body.message,
        html: '<p>You have a submission from...</p> <ul><li>Name: '+ req.body.name +'</li><li> Email: '+req.body.email+'</li><li> Message: '+req.body.message+'</li></ul>'

    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message Sent: '+ info.response);
        res.redirect('/');
    });
});
module.exports = router;