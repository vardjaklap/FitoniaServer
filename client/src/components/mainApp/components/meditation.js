import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SpaIcon from '@material-ui/icons/Spa';
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Grow from "@material-ui/core/Grow";
import LinearProgress from "@material-ui/core/LinearProgress";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineItem from "@material-ui/lab/TimelineItem";
import Timeline from "@material-ui/lab/Timeline";
import indigo from "@material-ui/core/colors/indigo";
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import anim from './styles/animations.module.css'


const styles = {
    activeTimelineName: {
        transition: "all 0.3s",
        color: "#673ab7",
        fontSize: "20px"
    },
    inactiveTimelineName: {
        transition: "all 0.3s",
        color: "grey",
        fontSize: "15px"
    },
    completeTimelineName: {
        transition: "all 0.3s",
        color: "grey",
        fontSize: "15px"
    },
    activeTimeline: {
        transition: "all 0.3s",
        backgroundColor: "#673ab7"
    },
    inactiveTimeline: {
        transition: "all 0.3s",
        backgroundColor: "grey"
    },
    completeTimeline: {
        transition: "all 0.3s",
        backgroundColor: "#4caf50"
    },



}

class Meditation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            meditationActive: false,
            meditationCounter: 0,
            meditationStep: 0,
            meditationDuration: 180,
            interval: null,
            currentMedDesc: ""
        };
        clearInterval(this.state.interval);
        this.handleClickStartMeditation = this.handleClickStartMeditation.bind(this);
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
    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    sendTheme(){
        this.props.callBackFromParent("deepPurple");
    }
    handleClickStartMeditation(){
        let interv = setInterval(() => {
            this.setState({ meditationCounter: this.state.meditationCounter + 1 })
            if(this.state.meditationCounter === 5){
                this.setState({ meditationStep: this.state.meditationStep + 1,
                    currentMedDesc: "What are you feeling?"})
            }else if(this.state.meditationCounter === 90){
                this.setState({ meditationStep: this.state.meditationStep + 1,
                    currentMedDesc: "Think about the reason why you experience these emotions."})
            }else if(this.state.meditationCounter === 180){
                this.setState({ meditationStep: this.state.meditationStep + 1,
                    currentMedDesc: "Let them flow like a river."})
            }else if(this.state.meditationCounter === 360){
                this.setState({ meditationStep: this.state.meditationStep + 1,
                    currentMedDesc: "Great job!"})
            }
            if(this.state.meditationCounter >= this.state.meditationDuration){
                clearInterval(this.state.interval);
            }
        }, 1000);
        this.setState({
            meditationActive: true,
            meditationStep: 1,
            interval: interv,
            currentMedDesc: "In and out. Everything is okay."
        })
    }
    handleChange(event){


    }
    selectDotStyle(step){
        if(this.state.meditationStep < step){
            return styles.inactiveTimeline;
        }else if(this.state.meditationStep === step){
            return styles.activeTimeline;
        }else if(this.state.meditationStep > step){
            return styles.completeTimeline;
        }
    }
    selectNameStyle(step){
        if(this.state.meditationStep < step){
            return styles.inactiveTimelineName;
        }else if(this.state.meditationStep === step){
            return styles.activeTimelineName;
        }else if(this.state.meditationStep > step){
            return styles.completeTimelineName;
        }
    }
    render() {
        return (
            <Fade in={this.state.checked}>
                <section id="Meditation" >
                            {/*<Grid container  direction="column"*/}
                            {/*      justify="center"*/}
                            {/*      alignItems="center" style={{height: "80vh"}}>*/}
                            {/*    <Grid item>*/}
                            {/*        <SpaIcon style={{fontSize: "300px"}} color="disabled" />*/}
                            {/*    </Grid>*/}
                            {/*    <Grid item>*/}
                            {/*        <Typography variant="h2" style={{color: "grey"}}>*/}
                            {/*            I am not finished yet.*/}
                            {/*        </Typography>*/}
                            {/*        <Typography variant="h2" style={{color: "grey"}}>*/}
                            {/*            Come check next time ;)*/}
                            {/*        </Typography>*/}
                            {/*    </Grid>*/}

                            {/*</Grid>*/}

                            { this.state.meditationActive === true ?
                                <Container style={{marginTop: "100px"}}>
                                    <Grid container spacing={3} alignItems="stretch">
                                        <Grid item xs={4}>
                                            <Timeline>
                                                <TimelineItem>
                                                    <TimelineSeparator>
                                                        <TimelineDot style={this.selectDotStyle(1)}/>
                                                        <TimelineConnector style={this.selectDotStyle(1)}/>
                                                    </TimelineSeparator>
                                                    <TimelineContent style={this.selectNameStyle(1)}>
                                                        Breathe
                                                    </TimelineContent>
                                                </TimelineItem>
                                                <TimelineItem>
                                                    <TimelineSeparator>
                                                        <TimelineDot style={this.selectDotStyle(2)}/>
                                                        <TimelineConnector style={this.selectDotStyle(2)}/>
                                                    </TimelineSeparator>
                                                    <TimelineContent style={this.selectNameStyle(2)}>Listen</TimelineContent>
                                                </TimelineItem>
                                                <TimelineItem>
                                                    <TimelineSeparator>
                                                        <TimelineDot style={this.selectDotStyle(3)}/>
                                                        <TimelineConnector style={this.selectDotStyle(3)}/>
                                                    </TimelineSeparator>
                                                    <TimelineContent style={this.selectNameStyle(3)}>Reflect</TimelineContent>
                                                </TimelineItem>
                                                <TimelineItem>
                                                    <TimelineSeparator>
                                                        <TimelineDot style={this.selectDotStyle(4)}/>
                                                    </TimelineSeparator>
                                                    <TimelineContent style={this.selectNameStyle(4)}>Release</TimelineContent>
                                                </TimelineItem>
                                            </Timeline>
                                        </Grid>
                                        <Grid item xs={6}
                                              container
                                              direction="column"
                                              justify="space-evenly"
                                              alignItems="stretch">
                                            <Grid item>
                                                <Typography variant="h5" style={{color: "grey"}}>
                                                    {this.state.currentMedDesc}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <HourglassEmptyIcon style={{fontSize: "100px"}} color="primary" className={anim.clock}/>
                                                <br/>
                                                {this.state.meditationCounter}s
                                                <LinearProgress variant="determinate" value={(this.state.meditationCounter / this.state.meditationDuration) * 100} />
                                            </Grid>
                                        </Grid>
                                    </Grid>


                                </Container> : <div>
                                    <Grow in={this.state.meditationActive === false}>
                                        <Grid container  direction="column"
                                              justify="center"
                                              alignItems="center" style={{height: "80vh"}}
                                        >
                                            <Grid item>
                                                <IconButton color="primary" aria-label="add sleep entry" component="span"  onClick={this.handleClickStartMeditation}>
                                                    <SpaIcon style={{fontSize: "300px"}} color="disabled" />
                                                </IconButton>

                                            </Grid>
                                            <Grid item>
                                                <Typography variant="h3" style={{color: "grey"}}>
                                                    You haven't found peace today.
                                                </Typography>
                                                <Typography variant="h3" style={{color: "grey"}}>
                                                    Click to start 4 minute session
                                                </Typography>
                                            </Grid>

                                        </Grid>
                                    </Grow>
                                </div> }
                </section>
            </Fade>
        );
    }
}



export default Meditation;