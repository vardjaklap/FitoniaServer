import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import StarIcon from '@material-ui/icons/StarBorderOutlined';
import AddBox from '@material-ui/icons/AddBox';
import Fade from '@material-ui/core/Fade';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import indigo from "@material-ui/core/colors/indigo"
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Grow from "@material-ui/core/Grow";
import SleepHistory from "./sleepComponents/sleepHistory";


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
    },
    cont: {
        marginTop: 50
    },
    card: {
        margin: "50px 0 0",
        maxWidth: 375,
    },
    picstyle:{
        height: "180px",
        width: "300px",
        backgroundColor: indigo[500]
    },
    starIcon: {
        fontSize: 35
    },
    sleepNote: {
        margin: 0
    }

}

class Sleep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            enterSleepTurn: 0
        };
        this.handleChangeNav = this.handleChangeNav.bind(this);
        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.sendTheme = this.sendTheme.bind(this);
    }

    componentDidMount() {
        this.setState({
            dataToDisplay: [

                ],
            checked: true,
            enterSleepTurn: 1,
            page: 0
        })
        this.sendTheme()
    }
    sendTheme(){
        this.props.callBackFromParent("indigo");
    }
    handleClickNext(){
        let oldValue = this.state.enterSleepTurn + 1;
        this.setState({
            enterSleepTurn: 100
        });
        setTimeout(
            function() {
                this.setState({enterSleepTurn: oldValue});
            }
                .bind(this),
            500
        );
    }
    handleChangeNav(event, value){
        this.setState({ page: value });
    }
    handleBack(){
        let oldValue = this.state.enterSleepTurn - 1;
        this.setState({
            enterSleepTurn: 100
        });
        setTimeout(
            function() {
                this.setState({enterSleepTurn: oldValue});
            }
                .bind(this),
            600
        );
    }
    handleChange(event){


    }
    render() {
        return (
            <Fade in={this.state.checked}>
                <section id="Sleep" >
                    { this.state.page === 0 ?
                        <Fade in={this.state.page === 0} >
                            <Grid container justify="center">
                                <Grow in={this.state.enterSleepTurn === 1} unmountOnExit mountOnEnter>
                                    <Card style={styles.card}>
                                        <div style={styles.picstyle}>

                                        </div>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" style={{marginBottom: "20px"}}>
                                                Sleep duration
                                            </Typography>
                                            <Grid container justify="space-between">
                                                <TextField
                                                    id="time"
                                                    label="Start"
                                                    type="time"
                                                    defaultValue="21:00"
                                                    style={styles.textField}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                />
                                                <TextField
                                                    id="time"
                                                    label="End"
                                                    type="time"
                                                    defaultValue="07:00"
                                                    style={styles.textField}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    inputProps={{
                                                        step: 300, // 5 min
                                                    }}
                                                />
                                            </Grid>
                                        </CardContent>
                                        <CardActions>
                                            <Grid container justify="flex-end">
                                                <Button size="small" color="primary" onClick={this.handleClickNext}>
                                                    Next
                                                </Button>
                                            </Grid>
                                        </CardActions>
                                    </Card>
                                </Grow>
                                <Grow in={this.state.enterSleepTurn === 2} mountOnEnter unmountOnExit >
                                    <Card style={styles.card}>
                                        <div style={styles.picstyle}>
                                        </div>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" style={{marginBottom: "20px"}}>
                                                Rate your sleep
                                            </Typography>
                                            <Grid container justify="center">
                                                <StarIcon color="primary" style={styles.starIcon}></StarIcon>
                                                <StarIcon color="primary" style={styles.starIcon}></StarIcon>
                                                <StarIcon color="primary" style={styles.starIcon}></StarIcon>
                                                <StarIcon color="primary" style={styles.starIcon}></StarIcon>
                                                <StarIcon color="primary" style={styles.starIcon}></StarIcon>
                                            </Grid>
                                        </CardContent>
                                        <CardActions>
                                            <Grid container justify="space-between">
                                                <Button size="small" color="primary" onClick={this.handleBack}>
                                                    Back
                                                </Button>
                                                <Button size="small" color="primary" onClick={this.handleClickNext}>
                                                    Next
                                                </Button>
                                            </Grid>
                                        </CardActions>
                                    </Card>
                                </Grow>
                                <Grow in={this.state.enterSleepTurn === 3} mountOnEnter unmountOnExit >
                                    <Card style={styles.card}>
                                        <div style={styles.picstyle}>
                                        </div>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" style={{marginBottom: "20px"}}>
                                                Add your notes
                                            </Typography>
                                            <Grid container justify="center">
                                                <TextField
                                                    id="outlined-multiline-static"
                                                    label="Describe your sleep"
                                                    multiline
                                                    rows="4"
                                                    defaultValue=""
                                                    variant="outlined"
                                                    margin="dense"
                                                />
                                            </Grid>
                                        </CardContent>
                                        <CardActions>
                                            <Grid container justify="space-between">
                                                <Button size="small" color="primary" onClick={this.handleBack}>
                                                    Back
                                                </Button>
                                                <Button size="small" color="primary" onClick={this.handleClickNext}>
                                                    Complete
                                                </Button>
                                            </Grid>
                                        </CardActions>
                                    </Card>
                                </Grow>
                            </Grid>
                        </Fade>
                        : null }
                    { this.state.page === 1 ?
                        <Fade in={this.state.page === 1}>
                            <Grid container justify="center">
                                <Grid item xs={12} sm={10} md={8}>
                                    <Paper style={{marginTop: 30}}  elevation={1}>
                                        <SleepHistory></SleepHistory>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Fade>
                        : null }

                        <Paper style={styles.footer}>
                            <BottomNavigation
                                value={this.state.page}
                                onChange={this.handleChangeNav}
                                showLabels>
                                <BottomNavigationAction label="Add" icon={<AddBox />} />
                                <BottomNavigationAction label="Recent" icon={<RestoreIcon />} />
                            </BottomNavigation>
                        </Paper>
                </section>
            </Fade>
        );
    }
}



export default Sleep;