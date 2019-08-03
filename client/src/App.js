import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Unauth from './components/unAuth/unauth'
import MainApp from './components/mainApp/mainApp'
import Snack from './components/snack'
import { Socket, socketMethods } from './socket'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            socket: Socket,
            mess: {
                open: true,
                message: ''
            },
            authorized: false
        };
        this.logout = this.logout.bind(this);
    }
    myCallback = (command, data) => {
        this.state.socket.emit(command, data);
    }
    componentDidMount() {
        socketMethods.checkLog();
        this.state.socket.on('authorize', (user) => {
            this.setState({
                authorized: true,
                user
            });
            console.log(user);

        });
        this.state.socket.on('alert', (type, message)=>{
            this.refs.snack.handleOpen(type, message);
        });
        this.state.socket.on('reload', ()=>{
            setTimeout(()=>{
                window.location.reload();
            }, 1000);
        });

        console.log(this.state.authorized)
    }
    logout(){
        socketMethods.logout();
        this.setState({
            authorized: false
        })
    }

    render() {
        return (
            <Router>
                <Snack ref="snack" message={this.state.mess}/>
                {this.state.authorized ? (
                    <Redirect to="/app"/>
                ) :(
                    <div></div>
                )}

                <Unauth callBackFromParent={this.myCallback} />
                <MainApp callBackFromParent={this.myCallback} userData={this.state.user} test={this.logout}>

                </MainApp>
            </Router>
        )};
}

export default App;
