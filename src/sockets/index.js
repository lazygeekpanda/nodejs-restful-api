const io = require('socket.io')()

io.on('connection', socket => {
  // Socket Events
  console.log('Connected to sockets')
})

module.exports = io
