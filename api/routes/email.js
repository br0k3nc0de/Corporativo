var express = require("express");
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var router = express.Router();

const From = 'contact@notreply.com'
const To = 'pepepe977@gmial.com'
const Pass = 'chimitusin19977'

router.get("/", function(req, res, next) {
     res.send("API is working properly: email");
});

router.post("/send", function(req, res, next) {
     let contact = req.body

     var transporter = nodemailer.createTransport(smtpTransport({
          service: 'Gmail',
          auth: {
            user: To,
            pass: Pass
          }
     }));
        
        var mailOptions = {
          from: From,
          to: To,
          subject: contact.subject,
          html: `
               <html>
                    <p align="justify">
                    El usuario: ${contact.fullname} quiere contactarte para ${contact.subject} <br></br>

                    Mensaje: <br>
                    <hr>
                    <p align="center">${contact.message}</p>

                    email: ${contact.email}
                    </p>
               </html>
          `
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            res.send(error)
          } else {
            res.send("Se ha enviado el email.")
          }
        });

});

module.exports = router;
