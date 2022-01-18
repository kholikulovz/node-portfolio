const nodeMailer = require('./nodemailer')


module.exports ={
    POST:  (req, res ) =>{
        const {email} = req.body

        nodeMailer(email)

        res.render('index')
    }
}