import  nodemailer from 'nodemailer';


let testAccount =  nodemailer.createTestAccount();

let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, 
    auth: {
        user: testAccount.user, // generated ethereal user
        pass:testAccount.pass // generated ethereal password
    }
});


const sendMail = (email, subject, text, emailInfo,cb) => {
    const mailOptions = {
        from: 'smtp.ethereal.email', 
        to: email, 
        subject,
        text,
        html: emailInfo
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return cb(err, null);
        }
        return cb(null, data);
    });
}

exports.sendMail = sendMail;