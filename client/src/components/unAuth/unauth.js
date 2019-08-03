import React, { Component } from 'react';
import { Route } from "react-router-dom";
import RegistrationPage from './registrationpage'
import Login from './login'
import FrontPage from './frontpage'

class Unauth extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    myCallback = (command, data) => {
        this.props.callBackFromParent(command, data);
    }
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Route path="/" exact render={() => <FrontPage></FrontPage>}/>
                <Route path="/login" exact component={()=>{ return <Login callBackFromParent={this.myCallback}></Login>}} />
                <Route path="/register" exact component={()=>{ return <RegistrationPage callBackFromParent={this.myCallback}></RegistrationPage>}} />

            </div>
        )};
}

export default Unauth;
