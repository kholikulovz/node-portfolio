const { v4: uuidv4 } = require('uuid');
const path = require('path')
const IO = require('../../IO/IO')
const messages = new IO(path.resolve('public', 'message.json'))
// const nodeMailer = require('./nodemailer')
const newMessage = {};

module.exports = {
    GET: (req, res) =>{
        // nodeMailer(email)
        res.render('index')
    },
    POST: (req, res)=>{
        const {name, email, message} = req.body

        const allMessages = JSON.parse(messages.read())
        console.log(req.body);
        newMessage.id = uuidv4();
        newMessage.name = name;
        newMessage.email = email;
        newMessage.message = message;
    
        allMessages.push(newMessage)
    
        messages.write(allMessages)
        res.render('index')
    }
}