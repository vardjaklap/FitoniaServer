import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import RegistrationPage from './components/registrationpage'
import Login from './components/login'
import FrontPage from './components/frontpage'
import Snack from './components/snack'
import io from 'socket.io-client';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            socket: io(),
            mess: {
                open: true,
                message: ''
            }
        }
    }
    myCallback = (command, data) => {
        this.state.socket.emit(command, data);
    }
    componentDidMount() {
        this.state.socket.on('alert', (type, message)=>{
            this.refs.snack.handleOpen(type, message);
        })
    }

    render() {
        return (
            <Router>
                <Snack ref="snack" message={this.state.mess}/>
                <Route path="/login" component={()=>{ return <Login  callBackFromParent={this.myCallback}></Login>}} />
                <Route path="/" exact component={()=>{ return <FrontPage></FrontPage>}} />
                <Route path="/register"  component={()=>{ return <RegistrationPage callBackFromParent={this.myCallback}></RegistrationPage>}} />
            </Router>
        )};
}

export default App;
