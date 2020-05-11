import React, { Component } from 'react';
import Nav from "./components/menu";
import Nutrition from "./components/nutrition";
import Hydration from "./components/water";
import Dashboard from "./components/dashboard";
import Training from "./components/training";
import Notepad from "./components/notepad";
import Sleep from "./components/sleep";
import Meditation from "./components/meditation";
import Profile from './components/profile'
import {  Route } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import {createMuiTheme} from "@material-ui/core";

import red from '@material-ui/core/colors/red';
import orange from "@material-ui/core/colors/orange";
import yellow from "@material-ui/core/colors/yellow"
import blue from '@material-ui/core/colors/blue';
import indigo from "@material-ui/core/colors/indigo";
import deepPurple from "@material-ui/core/colors/deepPurple";

import teal from "@material-ui/core/es/colors/teal";
import CssBaseline from '@material-ui/core/CssBaseline';


export class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: createMuiTheme({
                palette: {
                    primary: red
                },
                typography: {
                    useNextVariants: true,
                },
            }),
            title: "default",
            user: this.props.userData
        };
        this.logout = this.logout.bind(this);
    }

    myCallback = (dataFromChild) => {
        let newColor;
        let newTitle;
        if(dataFromChild === "green"){
            newColor = teal[500];
            newTitle = "Nutrition";
        }else if(dataFromChild === "blue"){
            newColor = blue[500];
            newTitle = "Hydration";
        }else if(dataFromChild === "red"){
            newColor = red[400];
            newTitle = "Dashboard";
        }else if(dataFromChild === "orange"){
            newColor = orange[500];
            newTitle = "Training";
        }else if(dataFromChild === "yellow"){
            newColor = yellow[500];
            newTitle = "Notepad";
        }else if(dataFromChild === "indigo"){
            newColor = indigo[500];
            newTitle = "Sleep";
        }else if(dataFromChild === "deepPurple"){
            newColor = deepPurple[500];
            newTitle = "Meditation";
        }else if(dataFromChild === "profile"){
            newColor = deepPurple[500];
            newTitle = "Profile";
        }
        let newTheme = createMuiTheme({
            palette: {
                primary: {main: newColor}
                // type: "dark"
            },
            typography: {
                useNextVariants: true,
            },
        });
        this.setState({
            theme: newTheme,
            title: newTitle
        })
    };
    logout() {
        this.props.test();
    }
    componentDidMount() {
        console.log(this.props)
    }

    render() {
    return (
        <div>
            <Route path="/app" render={()=>
                <MuiThemeProvider theme={this.state.theme}>
                    <CssBaseline>
                        <div className="App">
                            <Nav title={this.state.title} userData={this.props.userData} logout={this.logout}></Nav>
                            <Route key="/app" exact={true} path="/app" render={() => <Dashboard callBackFromParent={this.myCallback} userData={this.props.userData}/>} />
                            <Route key="/app/training" exact={true} path="/app/training" render={() => <Training callBackFromParent={this.myCallback} userData={this.props.userData}/>} />
                            <Route key="/app/notepad" exact={true} path="/app/notepad" render={() => <Notepad callBackFromParent={this.myCallback} userData={this.props.userData}/>} />
                            <Route key="/app/nutrition" exact={true} path="/app/nutrition" render={() => <Nutrition callBackFromParent={this.myCallback} userData={this.props.userData}/>} />
                            <Route key="/app/hydration" exact={true} path="/app/hydration" render={() => <Hydration command={this.props.callBackFromParent} callBackFromParent={this.myCallback} userData={this.props.userData}/>} />
                            <Route key="/app/sleep" exact={true} path="/app/sleep" render={() => <Sleep callBackFromParent={this.myCallback} userData={this.props.userData}/>} />
                            <Route key="/app/meditation" exact={true} path="/app/meditation" render={() => <Meditation callBackFromParent={this.myCallback} userData={this.props.userData}/>}/>
                            <Route key="/app/profile" exact={true} path="/app/profile" render={() => <Profile command={this.props.callBackFromParent} callBackFromParent={this.myCallback} userData={this.props.userData}/>}/>
                        </div>
                    </CssBaseline>
                </MuiThemeProvider>
            }/>
        </div>

    );
  }
}

export default MainApp;
