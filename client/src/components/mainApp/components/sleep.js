import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
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
import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton";
import Rating from '@material-ui/lab/Rating';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {KeyboardTimePicker} from "@material-ui/pickers";
import moment from 'moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import {Socket} from "../../../socket";

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
        maxWidth: 430,
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
            enterSleepTurn: -1,
            startSleep: "2020-06-05T21:00:00-04:00",
            endSleep: "2020-06-06T08:00:00-04:00",
            rating: 3,
            note: ""
        };
        this.handleChangeNav = this.handleChangeNav.bind(this);
        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.sendTheme = this.sendTheme.bind(this);
        this.handleNoteInput = this.handleNoteInput.bind(this);
        Socket.on('getSleepData', (data) => {
            //console.log(data);
            this.setData(data);
        })
    }

    componentDidMount() {
        Socket.emit("getTodaySleepEntry");
        this.setState({
            checked: true,
            enterSleepTurn: -1,
            page: 0,
            startSleep: "2020-06-05T21:00:00-04:00",
            endSleep: "2020-06-06T08:00:00-04:00",
            rating: 3,
            note: "",
            hoursSlept: 0,
            minutesSlept: 0
        });
        this.sendTheme()
    }
    sendTheme(){
        this.props.callBackFromParent("indigo");
    }
    setData(data){
        if(data.dur === 0){
            this.setState({
                enterSleepTurn: 0,
            })
        }else{
            let difH = Math.floor(data.dur / 60);
            let difM = data.dur % 60;
            this.setState({
                enterSleepTurn: 4,
                hoursSlept: difH,
                minutesSlept: difM,
                rating: data.quality,
                note: data.note
            })
        }
    }
    handleClickNext(){
        let oldValue = this.state.enterSleepTurn + 1;
        this.setState({
            enterSleepTurn: 100
        });
        if(oldValue === 4){
            let a = moment(this.state.startSleep);
            let b = moment(this.state.endSleep);
            if(a.hour() < 12){
                a.add(1, "days")

            }
            let diff = b.diff(a, "minutes");
            let difH = b.diff(a, "hours");
            let difM = b.diff(a, "minutes") - (difH * 60);
            this.setState({
                diff: diff,
                hoursSlept: difH,
                minutesSlept: difM
            })
            let sleepObj = {
                dur: diff,
                quality: this.state.rating,
                note: this.state.note
            }
            Socket.emit("addSleepEntry", sleepObj);
        }
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
    handleStartPicker(date){
        this.setState({
            startSleep: date
        })
        //console.log(date);
    }
    handleEndPicker(date){
        this.setState({
            endSleep: date
        });
    }
    changeRating(newValue){
        this.setState({
            rating: newValue
        });
        //console.log(newValue);
    }
    handleNoteInput(event){
        this.setState({
            note: event.target.value
        })
        //console.log(event.target.value);
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
                                <Grow in={this.state.enterSleepTurn === 0} unmountOnExit mountOnEnter>
                                    <Grid container  direction="column"
                                          justify="center"
                                          alignItems="center" style={{height: "80vh"}}
                                    >
                                        <Grid item>
                                            <IconButton color="primary" aria-label="add sleep entry" component="span"  onClick={this.handleClickNext}>
                                                <AddIcon style={{fontSize: "300px"}} color="disabled" />
                                            </IconButton>

                                        </Grid>
                                        <Grid item>
                                            <Typography variant="h3" style={{color: "grey"}}>
                                                You haven't logged your sleep yet.
                                            </Typography>
                                            <Typography variant="h3" style={{color: "grey"}}>
                                                Click here to add
                                            </Typography>
                                        </Grid>

                                    </Grid>
                                </Grow>
                                <Grow in={this.state.enterSleepTurn === 1} unmountOnExit mountOnEnter>
                                    <Card style={styles.card}>
                                        <div style={styles.picstyle}>

                                        </div>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" style={{marginBottom: "20px"}}>
                                                Sleep duration
                                            </Typography>
                                            <Grid container justify="space-between"  direction="column">
                                                <MuiPickersUtilsProvider utils={MomentUtils}>
                                                    <KeyboardTimePicker
                                                        label="Start"
                                                        placeholder="21:00 PM"
                                                        mask="__:__ _M"
                                                        value={this.state.startSleep}
                                                        onChange={date => this.handleStartPicker(date)}
                                                    />
                                                    <KeyboardTimePicker
                                                        label="End"
                                                        placeholder="07:00 AM"
                                                        mask="__:__ _M"
                                                        value={this.state.endSleep}
                                                        onChange={date => this.handleEndPicker(date)}
                                                    />
                                                </MuiPickersUtilsProvider>
                                            </Grid>
                                        </CardContent>
                                        <CardActions>
                                            <Grid container justify="space-between">
                                                <Button size="small" color="primary" onClick={this.handleBack}>
                                                    Cancel
                                                </Button>
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
                                                <Rating name="size-large" defaultValue={3} size="large" value={this.state.rating} onChange={(event, newValue) => {
                                                    this.changeRating(newValue);
                                                }}/>
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
                                                    onChange={this.handleNoteInput}
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
                                <Grow in={this.state.enterSleepTurn === 4} unmountOnExit mountOnEnter>
                                    <Grid container  direction="column"
                                          justify="center"
                                          alignItems="center" style={{height: "80vh"}}
                                    >
                                        <Grid item>
                                                <CheckCircleOutlineIcon style={{fontSize: "300px"}} color="disabled" />
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="h3" style={{color: "grey"}}>
                                                You have already submitted your entry.
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Card style={{padding: 20, margin: "20px 0 0 "}}>
                                                <Grid container justify="space-evenly" spacing={3}>
                                                    <Grid item>
                                                        <Typography variant="h5">
                                                            {this.state.hoursSlept} hours {this.state.minutesSlept} minutes
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Rating name="read-only" value={this.state.rating} readOnly />
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography variant="h5">
                                                            {this.state.note}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Card>
                                        </Grid>
                                    </Grid>
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