import React, { Component } from 'react';
import { Route } from "react-router-dom";
import RegistrationPage from './registrationpage'
import Login from './login'
import FrontPage from './frontpage'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import red from "@material-ui/core/colors/red";
import CssBaseline from "@material-ui/core/CssBaseline";

class Unauth extends Component {
    constructor(props) {
        super(props);
        this.state = {
                theme: createTheme({
                    palette: {
                        primary: {main: red[400]}
                    },
                    typography: {
                        useNextVariants: true,
                    },
                })
        }
    }
    myCallback = (command, data) => {
        this.props.callBackFromParent(command, data);
    };
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <ThemeProvider theme={this.state.theme}>
                    <CssBaseline />
                    <Route path="/" exact render={() => <FrontPage></FrontPage>}/>
                    <Route path="/login" exact component={()=>{ return <Login callBackFromParent={this.myCallback}></Login>}} />
                    <Route path="/register" exact component={()=>{ return <RegistrationPage callBackFromParent={this.myCallback}></RegistrationPage>}} />
                </ThemeProvider>
            </div>
        )};
}

export default Unauth;
