require('./components/db/mongoose');

const {auth, verifyAuth} = require('./components/authorize');
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
            const user = await User.findByCredentials(loginfo.email, loginfo.pass);
            const token = await user.generateAuthToken();
            socket.emit('newToken', token);
            const userInfo = await auth(token);
            socket.emit('authorize', userInfo);
            socket.emit('alert', 'success', 'User logged in successfully!');
            console.log('User ' + loginfo.email + ' logged in successfully!')
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
    });
    socket.on('isAuth', async function(token){
        try{
            const user = await auth(token);
            socket.emit('authorize', user);
            socket.emit('alert', 'warning', 'You are authorized!');
            socket.on('updateValue', async function(keyValue){
                try{
                    const user = await verifyAuth(token);
                    await user.updateInfo(keyValue);
                    socket.emit('alert', 'success', 'Updated!')
                }catch(e){
                    socket.emit('alert','error', 'Error while updating! Please reload!');
                    socket.emit('reload');
                }
            })
        }catch (e) {
            socket.emit('alert','error', e.message)
        }
    });
});
server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
});

