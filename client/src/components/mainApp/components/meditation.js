import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import AddBox from '@material-ui/icons/AddBox';
import Fade from '@material-ui/core/Fade';



const styles = {
    Paper: {
        padding: "20px",
        marginTop: "20px",
        marginBottom: "10px"
    },
    footer: {
        position: "fixed",
        bottom: 0,
        width: "100%"
    },
    textField: {
        width: "40%",
        margin: "5%",

    },
    button: {
        width: "50%",
        height: "10vh"
    },
    cont: {
        marginTop: 50
    }

}

class Meditation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.sendTheme = this.sendTheme.bind(this);
    }

    componentDidMount() {
        this.setState({
            dataToDisplay: [
            ],
            checked: true
        })
        this.sendTheme()
    }
    sendTheme(){
        this.props.callBackFromParent("deepPurple");
    }
    handleClick(){

    }
    handleChange(event){


    }
    render() {
        return (
            <Fade in={this.state.checked}>
                <section id="Nutrition" >
                        <Grid container justify="center">
                            <Grid item xs={10}>
                                <Paper style={styles.Paper}>

                                </Paper>
                            </Grid>
                        </Grid>
                        <Paper style={styles.footer}>
                            <BottomNavigation>
                                <BottomNavigationAction label="Recent" icon={<RestoreIcon />} />
                                <BottomNavigationAction label="Favorites" icon={<AddBox />} />
                            </BottomNavigation>
                        </Paper>
                </section>
            </Fade>
        );
    }
}



export default Meditation;