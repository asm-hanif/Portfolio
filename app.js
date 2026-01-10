const express = require('express');
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/home.html");
    console.log(__dirname);
});

app.post("/", function (req, res) {
    const comm = req.body.message;
    const na = req.body.nameofperson;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'abusayed1952hanif@gmail.com',
            pass: 'qaixhaessezoruie', //demo password
        }
    })
    var mailOptions = {
        from: 'abusayed1952hanif@gmail.com',
        to: req.body.username,
        cc: 'abusayed1952hanif@gmail.com',
        subject: 'Thanks for your feedback ' + na,
        text: ' -->' + comm
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/');
            console.log("email sent " + info.response);
        }
    });
});

app.listen(3000, function () {
    console.log("server started at 3000");
});
