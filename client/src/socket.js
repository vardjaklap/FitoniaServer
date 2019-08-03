import io from 'socket.io-client';
import AuthHelperMethods from './authHelperMethods';

export const Socket = io();
const auth = new AuthHelperMethods();

export const socketMethods = {
  checkLog: () => {
      const token = auth.loggedIn();
      if (token){
          Socket.emit('isAuth', token)
      }else{
          console.log('No user found!')
      }
  },
    logout: () => {
      auth.logout()
    }
};
Socket.on('newToken', (token) => {
    auth.setToken(token);

});
