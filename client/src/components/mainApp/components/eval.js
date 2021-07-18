import React, { Component } from 'react';
import Fade from '@material-ui/core/Fade';
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import {HelpOutline} from "@material-ui/icons";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Grow from "@material-ui/core/Grow";
import {Socket} from "../../../socket";
import { useHistory } from "react-router-dom";


class Evaluation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderValue: 0,
            goalValue: 0,
            dialogOpen: false,
            evalTurn: 0,
            frequency: 0,
            freqTitle: "Not at all",
            height: 175,
            weight: 75,
            age: 25
        };
        this.sendTheme = this.sendTheme.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleGoalChange = this.handleGoalChange.bind(this);
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.handleNextCard = this.handleNextCard.bind(this);
        this.handleFreqSlider = this.handleFreqSlider.bind(this);
        this.handleWeightSlider = this.handleWeightSlider.bind(this);
        this.handleHeightSlider = this.handleHeightSlider.bind(this);
        this.handleAgeSlider = this.handleAgeSlider.bind(this);
        this.finish = this.finish.bind(this);
    }

    componentDidMount() {
        this.setState({

        })
        this.sendTheme()
    }
    sendTheme(){
        this.props.callBackFromParent("evaluation");
    }
    handleGenderChange(event){
        this.setState({
            genderValue: event.target.value
        })
    }
    handleGoalChange(event){
        this.setState({
            goalValue: event.target.value
        })
    }
    openDialog(){
        this.setState({
            dialogOpen: true
        })
    }
    closeDialog(){
        this.setState({
            dialogOpen: false
        })
    }
    handleNextCard(){
        let oldValue = this.state.evalTurn + 1;
        this.setState({
            evalTurn: 100
        });
        setTimeout(
            function() {
                this.setState({evalTurn: oldValue});
            }
                .bind(this),
            500
        );
    }
    handleFreqSlider(event, newValue){
        let newTitle = "";
        if(newValue === 0){
            newTitle = "Not at all";
        }else if(newValue === 1){
            newTitle = "Around 1-2 times per week";
        }else if(newValue === 2){
            newTitle = "Stable 3-4 times per week";
        }else if(newValue === 3){
            newTitle = "More than 4 times per week";
        }
        this.setState({
            frequency: newValue,
            freqTitle: newTitle
        })
    }
    handleWeightSlider(event, newValue){
        this.setState({
            weight: newValue,
        })
    }
    handleHeightSlider(event, newValue){
        this.setState({
            height: newValue
        })
    }
    handleAgeSlider(event, newValue){
        this.setState({
            age: newValue
        })
    }
    finish(){
        let evalObj = {
            gender: this.state.genderValue,
            age: this.state.age,
            weight: this.state.weight,
            height: this.state.height,
            frequency: this.state.frequency,
            goal: this.state.goalValue
        };
        Socket.emit("updateEvaluation", evalObj);

        }
    render() {
        return (
            <div>
                <Fade in={true}>
                    <section id="Evaluation" style={{textAlign: "left"}}>
                        <Container>
                            <Grid container justifyContent="center" alignItems="center" style={{minHeight: "70vh"}}>
                                <Grid item>
                                    <Grow in={this.state.evalTurn === 0} mountOnEnter unmountOnExit>
                                        <Card style={{maxWidth: "450px", minWidth: "300px"}}>
                                            <CardHeader
                                                action={
                                                    <IconButton aria-label="settings" onClick={this.openDialog}>
                                                        <HelpOutline />
                                                    </IconButton>
                                                }
                                                title="Setting up information"
                                                subheader="Step 1/3"
                                            />
                                            <CardContent style={{paddingTop: 0, paddingBottom: 0}}>
                                                <Grid container direction="column" justifyContent="flex-start" alignItems="stretch" spacing={3}>
                                                    <Grid item >
                                                        <FormControl component="fieldset">
                                                            <FormLabel component="legend">Please select your gender</FormLabel>
                                                            <RadioGroup aria-label="gender" name="gender1" value={this.state.genderValue} onChange={this.handleGenderChange}>
                                                                <FormControlLabel value="2" control={<Radio />} label="Female" />
                                                                <FormControlLabel value="1" control={<Radio />} label="Male" />
                                                                <FormControlLabel value="0" control={<Radio />} label="Other" />
                                                            </RadioGroup>
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item>
                                                        <FormLabel  component="legend">Please select your age</FormLabel>
                                                    </Grid>
                                                    <Grid item>
                                                        <Slider
                                                            defaultValue={25}
                                                            aria-labelledby="discrete-slider-always"
                                                            min={18}
                                                            max={80}
                                                            valueLabelDisplay="on"
                                                            style={{marginTop: "15px"}}
                                                            onChange={this.handleAgeSlider}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                            <CardActions disableSpacing>
                                                <Grid container justifyContent="flex-end">
                                                    <Button size="small" color="primary" onClick={this.handleNextCard}>
                                                        Next
                                                    </Button>
                                                </Grid>
                                            </CardActions>
                                        </Card>
                                    </Grow>
                                    <Grow in={this.state.evalTurn === 1} mountOnEnter unmountOnExit>
                                        <Card style={{maxWidth: "450px", minWidth: "300px"}}>
                                            <CardHeader
                                                action={
                                                    <IconButton aria-label="settings" onClick={this.openDialog}>
                                                        <HelpOutline />
                                                    </IconButton>
                                                }
                                                title="Measuring values"
                                                subheader="Step 2/3"
                                            />
                                            <CardContent style={{paddingTop: 0, paddingBottom: 0}}>
                                                <Grid container direction="column" justifyContent="flex-start" alignItems="stretch" spacing={3}>
                                                    <Grid item>
                                                        <FormLabel  component="legend">Please select your height (in centimeters):</FormLabel>
                                                    </Grid>
                                                    <Grid item >
                                                        <Slider
                                                            defaultValue={175}
                                                            aria-labelledby="discrete-slider-always"
                                                            valueLabelDisplay="on"
                                                            min={130}
                                                            max={215}
                                                            style={{marginTop: "15px"}}
                                                            onChange={this.handleHeightSlider}
                                                        />
                                                    </Grid>
                                                    <Grid item>
                                                        <FormLabel  component="legend">Please select your weight (in kilograms):</FormLabel>
                                                    </Grid>
                                                    <Grid item>
                                                        <Slider
                                                            defaultValue={75}
                                                            aria-labelledby="discrete-slider-always"
                                                            min={30}
                                                            max={120}
                                                            valueLabelDisplay="on"
                                                            style={{marginTop: "15px"}}
                                                            onChange={this.handleWeightSlider}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                            <CardActions disableSpacing>
                                                <Grid container justifyContent="flex-end">
                                                    <Button size="small" color="primary" onClick={this.handleNextCard}>
                                                        Next
                                                    </Button>
                                                </Grid>
                                            </CardActions>
                                        </Card>
                                    </Grow>
                                    <Grow in={this.state.evalTurn === 2} mountOnEnter unmountOnExit>
                                        <Card style={{maxWidth: "450px", minWidth: "300px"}}>
                                            <CardHeader
                                                action={
                                                    <IconButton aria-label="settings" onClick={this.openDialog}>
                                                        <HelpOutline />
                                                    </IconButton>
                                                }
                                                title="Forging a path"
                                                subheader="Step 3/3"
                                            />
                                            <CardContent style={{paddingTop: 0, paddingBottom: 0}}>
                                                <Grid container direction="column" justifyContent="flex-start" alignItems="stretch" spacing={3}>
                                                    <Grid item>
                                                        <FormLabel  component="legend">How many times per week do you work out?</FormLabel>
                                                    </Grid>
                                                    <Grid item >
                                                        <Typography variant="subtitle1" gutterBottom>
                                                            {this.state.freqTitle}
                                                        </Typography>
                                                        <Slider
                                                            defaultValue={0}
                                                            aria-labelledby="discrete-slider-always"
                                                            min={0}
                                                            max={3}
                                                            style={{marginTop: "15px"}}
                                                            onChange={this.handleFreqSlider}
                                                        />
                                                    </Grid>
                                                    <Grid item>
                                                        <FormControl component="fieldset">
                                                            <FormLabel component="legend">Please select your goal:</FormLabel>
                                                            <RadioGroup aria-label="goal" name="goal" value={this.state.goalValue} onChange={this.handleGoalChange}>
                                                                <FormControlLabel value="2" control={<Radio />} label="Lose weight" />
                                                                <FormControlLabel value="1" control={<Radio />} label="Gain muscle" />
                                                                <FormControlLabel value="0" control={<Radio />} label="Stay fit" />
                                                            </RadioGroup>
                                                        </FormControl>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                            <CardActions disableSpacing>
                                                <Grid container justifyContent="flex-end">
                                                    <Button size="small" color="primary" onClick={this.finish}>
                                                        Done
                                                    </Button>
                                                </Grid>
                                            </CardActions>
                                        </Card>
                                    </Grow>
                                </Grid>
                            </Grid>
                        </Container>
                    </section>
                </Fade>
                <Dialog
                    open={this.state.dialogOpen}
                    onClose={this.closeDialog}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Why do we need this information?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Having a good experience with our application requires a good input of information.
                            That is to say, you can't reach the destination unless you know where you are coming from :)
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}



export default Evaluation;