require('./components/db/mongoose');

const User = require('./components/models/user')

const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
// Create the Express application
const app = express();
// Create the HTTP server using the Express app
const server = http.createServer(app);
// Connect socket.io to the HTTP server
const io = socketio(server);
const port = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, 'client/build')));
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

// Listen for new connections to Socket.io
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on('login',async function(loginfo){
        try {
            await User.findByCredentials(loginfo.email, loginfo.pass);
            socket.emit('alert', 'success', 'User logged in successfully!')
        } catch (e) {
            socket.emit('alert', 'error', 'Wrong password or username!')
        }

    });
    socket.on('register', async function (info) {
        try {
            await User.createUser(info);
            socket.emit('alert','success', 'User registered successfully!')
        } catch (e) {
            socket.emit('alert','error', e.message)
        }




    })
});
server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
});

