const path = require('path')
const IO = require('../../IO/IO')
const messages = new IO(path.resolve('public', 'message.json'))

module.exports ={
    GET:  (req, res ) =>{
        const allMessages = JSON.parse(messages.read())
        
        res.render('message', {message: allMessages})
    }
}