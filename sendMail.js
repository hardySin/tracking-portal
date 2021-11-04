require('dotenv').config();
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
module.exports.sendMail=async(sendTo)=> {
 
    let transport = nodemailer.createTransport({
        service: 'gmail',

        auth: {
            user: 'hardeep.singh@teamcomputers.com', // generated ethereal user
            pass: 'uppertab@#123', // generated ethereal password
          },
    });

    console.log("a transport ",transport)
    const message = {
        from: 'hardeep.singh@teamcomputers.com', // Sender address
        to: 'deep16hardy@gmail.com',         // List of recipients
        subject: 'Design Your Model S | Tesla', // Subject line
        text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
    };                      
    transport.sendMail(message, function(err, info) {
        if (err) {
          console.log(err)
        } else {
          console.log(info);
        }
    });


      
}

 