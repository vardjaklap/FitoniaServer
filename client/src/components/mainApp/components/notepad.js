import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import AddBox from '@material-ui/icons/AddBox';
import Fade from '@material-ui/core/Fade';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

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

class Notepad extends Component {
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
        this.props.callBackFromParent("yellow");
    }
    handleClick(){

    }
    handleChange(event){


    }
    render() {
        return (
            <Fade in={this.state.checked}>
                <section id="Nutrition" >
                    <Container>
                        <Grid container  direction="column"
                              justify="center"
                              alignItems="center" style={{height: "80vh"}}>
                            <Grid item>
                                <DateRangeIcon style={{fontSize: "300px"}} color="disabled" />
                            </Grid>
                            <Grid item>
                                <Typography variant="h2" style={{color: "grey"}}>
                                    I am not finished yet.
                                </Typography>
                                <Typography variant="h2" style={{color: "grey"}}>
                                    Come check next time ;)
                                </Typography>
                            </Grid>

                        </Grid>
                    </Container>
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



export default Notepad;