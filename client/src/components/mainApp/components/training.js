import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import AddBox from '@material-ui/icons/AddBox';
import Fade from '@material-ui/core/Fade';
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Backdrop from "@material-ui/core/Backdrop";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import exerciseData from "./trainingData/exercises.json";
import Dialog from "@material-ui/core/Dialog";


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
    },
    backdrop: {
        zIndex: 100
    },
    root: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },

}

class Training extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            backdropOpened: false,
            exercises: null,
            isHovered: "",
            selectedMain: "What would you like to train today?",
            selectedSubMain: "Please make a selection",

        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.sendTheme = this.sendTheme.bind(this);
        this.openBackdrop = this.openBackdrop.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleMouseEnterSvg = this.handleMouseEnterSvg.bind(this);

    }

    componentDidMount() {
        this.setState({
            dataToDisplay: [
            ],
            checked: true
        });
        this.sendTheme()

    }
    sendTheme(){
        this.props.callBackFromParent("orange");
    }
    handleClick(){

    }
    handleClose(){
        this.setState({
            backdropOpened: false
        });
    }
    handleMouseEnterSvg(text) {
        this.setState({ isHovered: text })
        let selMain = "";
        let selSubMain = "";
        switch(text) {
            case "chest":
                selMain = "Chest";
                selSubMain = "Pectorals";
                break;
            case "biceps":
                selMain = "Upper Arm";
                selSubMain = "Biceps";
                break;
            case "core":
                selMain = "Core";
                selSubMain = "Abdominals";
                break;
            case "quads":
                selMain = "Thigh";
                selSubMain = "Quadriceps";
                break;
            case "shoulders":
                selMain = "Shoulders";
                selSubMain = "Deltoids";
                break;
            case "triceps":
                selMain = "Back of Arm";
                selSubMain = "Triceps";
                break;
            case "back":
                selMain = "Upper Back";
                selSubMain = "Trapezius";
                break;
            case "glutes":
                selMain = "Buttocks";
                selSubMain = "Gluteals";
                break;
            case "calves":
                selMain = "Calves";
                selSubMain = "Gastocnemius";
                break;
            default:
                selMain = "What would you like to train today?";
                selSubMain = "Please make a selection";
        }
        this.setState({
            selectedMain: selMain,
            selectedSubMain: selSubMain
        })
    }
    openBackdrop(e){
        let chosenExercises;
        switch(e) {
            case "chest":
                chosenExercises = exerciseData.chest;
                break;
            case "biceps":
                chosenExercises = exerciseData.biceps;
                break;
            case "core":
                chosenExercises = exerciseData.core;
                break;
            case "quads":
                chosenExercises = exerciseData.quads;
                break;
            case "shoulders":
                chosenExercises = exerciseData.shoulders;
                break;
            case "triceps":
                chosenExercises = exerciseData.triceps;
                break;
            case "back":
                chosenExercises = exerciseData.back;
                break;
            case "glutes":
                chosenExercises = exerciseData.glutes;
                break;
            case "calves":
                chosenExercises = exerciseData.calves;
                break;
            default:
                chosenExercises = exerciseData.chest;
        }
        this.setState({
            isHovered: e,
            backdropOpened: true,
            exercises: chosenExercises.map((exercise) =>
                <Grid item key={exercise.id}>
                    <Card style={styles.root}>
                        <CardMedia
                            style={styles.media}
                            image={exercise.image}
                            title={exercise.name}
                        />
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {exercise.name}
                            </Typography>
                            <Typography gutterBottom color="textSecondary">
                                Difficulty: {exercise.difficulty}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {exercise.desc}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            )
        })
    }
    handleChange(event){


    }
    render() {
        return (
            <Fade in={this.state.checked}>
                <section id="Training" >
                    <Container>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center">
                            <Grid item>
                                <Typography variant="h4">
                                    {this.state.selectedMain}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {this.state.selectedSubMain}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center">
                            <Grid item lg={6} md={7} sm={9} xs={11}>
                                <svg
                                    fill="#e0e0e0"
                                    id="Layer_1" data-name="Layer 1"
                                    viewBox="0 0 493.11 472.09">
                                    <path style={{transition: "all 0.1s"}}
                                          d="M532,204.29c-9.57-12.54-9-26.07-3.6-39.9,1.65-4.24,14.86-8.71,20.9-7.56,11.31,2.15,16.37,7.74,16.75,21.1.27,9.19-.66,18.6-6.86,26.36C543.43,214,547.61,214.44,532,204.29Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path fill={this.state.isHovered === "core" ? '#ff9800' : '#9e9e9e'}
                                          onMouseEnter={() => this.handleMouseEnterSvg("core")}
                                          onMouseLeave={() => this.handleMouseEnterSvg("")}
                                          onClick={() => this.openBackdrop("core")}
                                          style={{transition: "all 0.1s"}}
                                          d="M525.09,358.94,525,334.3c.5-10.32.76-20.65,1.6-30.93.51-6.11,1-12.51,6.87-16.54l3-1.57c4.69-2.86,7.65-2.55,7.24,3.95q-.06,30.44-.13,60.86l-.66,35.5-2.55,5.95c-1.85-1.5-4.14-2.7-5.45-4.58-1.42-2.05-2-4.71-2.84-7.15C529.69,372.85,527.4,365.89,525.09,358.94Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path fill={this.state.isHovered === "glutes" ? '#ff9800' : '#9e9e9e'}
                                          onMouseEnter={() => this.handleMouseEnterSvg("glutes")}
                                          onMouseLeave={() => this.handleMouseEnterSvg("")}
                                          onClick={() => this.openBackdrop("glutes")}
                                          style={{transition: "all 0.1s"}}
                                          d="M781.8,406c.2-8.57-2-18.32,1.36-25.37,2.92-6.09,12.17-9.22,18.75-13.45,11.46-7.35,11.51-7.28,15.2,5.58,1.14,4,1.85,8.09,3.43,11.85a20.89,20.89,0,0,1-1,19.37l-1.81,2.5.17-.16-2.52,1.71-4,.57-2.64,1.14-24.59,6.9Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path fill={this.state.isHovered === "glutes" ? '#ff9800' : '#9e9e9e'}
                                          onMouseEnter={() => this.handleMouseEnterSvg("glutes")}
                                          onMouseLeave={() => this.handleMouseEnterSvg("")}
                                          onClick={() => this.openBackdrop("glutes")}
                                          style={{transition: "all 0.1s"}}
                                          d="M829,406c-5.93-15,2.15-28.22,5.32-42,.83-3.6,3.34-3.1,6-1.35,7.09,4.76,14.46,9.12,21.26,14.24a13.31,13.31,0,0,1,4.56,8.06c.88,6.21.69,12.58.94,18.88a39.76,39.76,0,0,0-2.16,6.27c-1,6-4,6.68-9.31,4.68C846.81,411.5,837.83,408.92,829,406Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path fill={this.state.isHovered === "back" ? '#ff9800' : '#9e9e9e'}
                                          onMouseEnter={() => this.handleMouseEnterSvg("back")}
                                          onMouseLeave={() => this.handleMouseEnterSvg("")}
                                          onClick={() => this.openBackdrop("back")}
                                          style={{transition: "all 0.1s"}}
                                          d="M784.18,226.43c7.65-3.66,16.72-5.31,21.47-13.3,2.78-4.67,4.3-10.08,6.86-14.91.78-1.49,3.13-2.16,4.76-3.21.79,1.42,2.26,2.83,2.27,4.25q.27,41.48.13,82.95c0,1.51-1.52,3-2.33,4.51l.38.45c-.45-1.36-.5-3.11-1.41-4a77.29,77.29,0,0,1-22.88-46c-.1-.74-.32-1.46-.49-2.18l-7-6.4C785.36,227.9,784.77,227.16,784.18,226.43Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path
                                        fill={this.state.isHovered === "back" ? '#ff9800' : '#9e9e9e'}
                                        onMouseEnter={() => this.handleMouseEnterSvg("back")}
                                        onMouseLeave={() => this.handleMouseEnterSvg("")}
                                        onClick={() => this.openBackdrop("back")}
                                        style={{transition: "all 0.1s"}}
                                          d="M829.32,286.32c.37-11.56,1-23.12,1-34.67,0-15.66-.53-31.32-.84-47,0-1.87-.54-3.8-.19-5.57.3-1.47,1.72-4,2.31-3.91,1.89.31,5.1,1.47,5.2,2.53,1.51,17.13,14.6,22.92,27.65,28.8,0,.54,0,1.08-.08,1.62l-3.14,2.5c-5.23,2.1-7,6.72-7.52,11.62a56.67,56.67,0,0,1-17.33,35.41C833.75,280.25,831.67,283.42,829.32,286.32Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path
                                        fill={this.state.isHovered === "core" ? '#ff9800' : '#9e9e9e'}
                                        onMouseEnter={() => this.handleMouseEnterSvg("core")}
                                        onMouseLeave={() => this.handleMouseEnterSvg("")}
                                        onClick={() => this.openBackdrop("core")}
                                        style={{transition: "all 0.1s"}}
                                          d="M554.62,390.61c-1.73.05-4.93.34-5,.14a88,88,0,0,1-1-11c-.48-16.59-.87-33.18-1.3-49.77q0-19.32,0-38.64l2.45-8.65c7.3,2.86,13.08,7.09,14.11,15.62,0,17.9-.3,35.81.05,53.7C564.2,365.79,559.51,378.18,554.62,390.61Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M817.34,286.72l.3,13.88-24.81,8.49c-1.58-2.22-3.82-4.23-4.61-6.7-3.29-10.23-6.15-20.6-9.16-30.92q-1-9.08-1.93-18.17,1.25-3.36,2.5-6.74.89-2.49,1.78-5l.66-4,1.95-4.22.09-.09q3,3.28,6,6.55c.91,3.63,2.16,7.2,2.67,10.88,2.23,16.39,13.13,26.75,25,36.5Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M869.45,273.58c-3,9.61-5.75,19.28-9,28.8-.84,2.47-3.05,4.48-4.63,6.71l-24.76-8.54h0c-2.11-8.34,1.83-14.59,7.58-19.67,11.09-9.8,17.27-21.91,19.19-36.5.42-3.16,2-6.28,3.68-9.06.35-.58,3.38.45,5.17.73C870.08,248.38,872.13,260.81,869.45,273.58Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M824.82,191.86c-10.69,0-18-5.63-20.61-15.81-2.46-9.58,2.79-21.26,11.4-25.39,7.71-3.7,21.83-1.26,26.65,5.84s3.27,15.73.4,23.35C838.08,192,837.74,191.88,824.82,191.86Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M498.14,388.25q3.62-10.72,7.24-21.46c2.73,4.66,6.71,9,8,14,6.2,24.58,7,49.36.37,74.09-1.56,2.1-2.66,5.9-5.85,1.39-1.44-2-3.11-3.88-4.68-5.81-.29-2.71-.59-5.42-.88-8.14l.13-8.13L501,428.77Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M585.86,368.28a62.66,62.66,0,0,1,7,28.85l-2.1,22.79q-1.15,10.08-2.33,20.15l-.54,6.1-2,5.05L584,454.47a1.28,1.28,0,0,1-.68,1.31l-1.74,2.6a2,2,0,0,1-.75,1.76l-1-.14-.67.25a121.74,121.74,0,0,1-6.09-47.32,48.39,48.39,0,0,0-.5-6.66q2.32-13.25,4.66-26.49C580.58,376.3,578.62,368.84,585.86,368.28Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M594.59,507.35c.62-1.76,1.17-3.55,1.87-5.29a25.78,25.78,0,0,1,1.56-2.87,28.16,28.16,0,0,1,2.53,2.95c11.59,17.6,11.81,37.15,10.09,57.17a158.39,158.39,0,0,0,.12,22.32c.58,10.29-.28,10.92-11.31,6.77q-1.32-20.16-2.63-40.32L595.23,534l-.69-12.93Q594.57,514.21,594.59,507.35Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M855.91,311.64c2.8,6.33,1.41,12.54-2.18,17.71-7.45,10.76-15.59,21-23.52,31.46a10.32,10.32,0,0,1-2.56,1.81c-.38-1.24-1.2-2.52-1.07-3.71A167.5,167.5,0,0,1,829,341.14c2.61-11.93,2-23.79.15-35.69Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M817.64,303.44c.57,1.62,1.83,3.35,1.59,4.83-2.47,15.07.21,29.81,2.45,44.59a57.71,57.71,0,0,1,.61,6.7,11.65,11.65,0,0,1-.69,3,9.47,9.47,0,0,1-2.65-1.63c-2.14-2.59-4.11-5.32-6.13-8-5.16-6.88-10.13-13.92-15.53-20.61-5-6.22-6.59-12.93-4.45-20.57Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M801.51,507.5c-.12,8.11-.42,16.22-.33,24.33.16,14.14-1,27.94-8.63,40.38-8.13-3.84-9.71-11.45-9.85-19.08-.13-7,1.3-14.08,2-21.12l1.33-2.29c-.07-1.45-.13-2.9-.2-4.35.7-3,1.41-6,2.12-9,1.66-3.33,3.1-6.78,5-9.95C796.32,501,797,501.12,801.51,507.5Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M484.54,590.39c-3.14.29-3.89-1.37-3.25-4.06,3.6-15.18,1.47-30.49-.17-45.52-1.57-14.43,3.8-26.08,10.06-38,1.35-2.56,2.45-2.32,3.58-.1s2.11,4.73,3.16,7.1l.08,3.94q-3.31,32.69-6.62,65.35l-2.29,9.22.07-.1Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M848.74,550.24c.06-11.9-.14-23.8.3-35.69.16-4.25,1.87-8.44,2.86-12.66,2.69,3.32,5.4,6.63,8,10a7,7,0,0,1,.72,2.1q3.47,22.53,6.94,45.06l-7,13.76C855,568.39,850.86,560.54,848.74,550.24Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M779.61,484.4c-1-12.52-2.41-25-2.8-37.57-.34-11,.48-22.12.78-33.18,5.55-.87,3.16,5.19,5.91,6.77,1.79,4.66,4.12,1.08,6.1.3,6-2.35,6-2.4,5.38,4-1.29,13-2.81,26-4,39A28.36,28.36,0,0,1,779.61,484.4Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M871.14,461.81c-.61,5.86-1.2,11.72-1.83,17.58-.12,1.1-.34,2.19-.52,3.28-1-.83-2.37-1.46-3.09-2.51a40.4,40.4,0,0,1-7.5-21.75c-.5-12.24-2.56-24.41-3.77-36.63-.08-.87,1.6-2.81,2.16-2.7,9.8,1.95,9.79,2,12.47-8.42,3.18,4.58,5.5,12.78,5,21.46C873.48,442,872.15,451.91,871.14,461.81Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path fill={this.state.isHovered === "calves" ? '#ff9800' : '#9e9e9e'}
                                          onMouseEnter={() => this.handleMouseEnterSvg("calves")}
                                          onMouseLeave={() => this.handleMouseEnterSvg("")}
                                          onClick={() => this.openBackdrop("calves")}
                                          style={{transition: "all 0.1s"}}
                                          d="M500.76,509.74c1.27-.65,2.49-1.75,3.81-1.89,9.19-1,9-.86,9.95,8.26,2.09,20.84-4.54,39.69-12.73,58.24-1.35,3.06-2.48,6.22-3.71,9.33a6.69,6.69,0,0,1-2.13.25q2.06-29.35,4.1-58.71Q500.41,517.48,500.76,509.74Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M558.78,208.84q6.13,24.61,31.12,29.08.44,4.28.85,8.57l1.56,7.52a2.17,2.17,0,0,0-.26,1.39,1.74,1.74,0,0,0-1.6-.13c-3.83-2.25-7.5-4.9-11.56-6.62-4.26-1.8-8.89-2.7-13.36-4l-17-.79-.84-15.31Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M811.17,467q-2.55,15.48-5.09,31c-1.48.19-2.34,5.76-4.43.5q-1-3.45-1.94-6.9a4.45,4.45,0,0,0-.52-1.89q-1.91-5.87-3.82-11.73c.7-15.27,1.21-30.57,2.22-45.82.31-4.72,2-9.35,3-14l4,12.68Q807.87,448.91,811.17,467Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M500.34,244.2c0-4.92,2.94-6.79,7.31-8.1,13.57-4.06,21.45-13.53,24.58-27.17l11.07,19.62q-.46,7.63-.92,15.27l-12.61.56c-8.85-2.07-15.62,2.43-22.34,7.07-6.83,2.61-6.82,2.61-6.86-4C500.56,246.34,500.42,245.27,500.34,244.2Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M838,455.73c2.93-10.3,5.82-20.61,8.85-30.88.32-1.1,1.42-2,2.16-3,.57.9,1.52,1.74,1.64,2.69,3,24,7.77,48.05-2.51,71.56-.71,1.63-1.66,3.16-2.49,4.73-.56-1.72-1.1-3.46-1.7-5.17-.48-1.39-1-2.75-1.57-4.12q-2.46-14.54-4.93-29.08l0-2.36Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M520.76,341c-8.25-6.4-12.42-14.61-13.07-25.24-.4-6.49-2.95-12.83-4.54-19.24l1.33-5.16c1-3.14.13-7.4,4.95-8.24l13.66,3.66c.64.82,2,1.85,1.81,2.42-4.56,14.89-1.7,30.06-1.76,45.1l-.29,6.35A21.19,21.19,0,0,1,520.76,341Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M586.14,302.8c-1.18,4.63-3.44,9.3-3.32,13.89.3,10.71-4.43,18.16-12.74,24a44.44,44.44,0,0,1-1.28-6.25c-.87-14-1.48-28.1-2.5-42.12-.25-3.42,1.05-4.33,3.93-5.35,13.38-4.73,16.18-3.07,16.25,10.27C586.49,299.1,586.26,301,586.14,302.8Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path fill={this.state.isHovered === "calves" ? '#ff9800' : '#9e9e9e'}
                                          onMouseEnter={() => this.handleMouseEnterSvg("calves")}
                                          onMouseLeave={() => this.handleMouseEnterSvg("")}
                                          onClick={() => this.openBackdrop("calves")}
                                          style={{transition: "all 0.1s"}}
                                          d="M592.9,581.5c-6.48-16.91-14.54-33.37-15.4-51.91a150.35,150.35,0,0,1,.28-16.58c.3-4.8,3.71-5.79,7.84-5.38,3.64,1.15,4.92,3.65,5.09,7.44.2,4.33,1.19,8.64,1.83,12.95q.23,5.38.46,10.75l1.7,20.82.57,15Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M538.62,397.39c.63,2.77,2.06,5.64,1.72,8.28-.9,7-2.57,13.85-3.94,20.77l-4-.16-9.24-24.88c-.74-3.95-1.13-8-2.32-11.81-2.7-8.7-5.81-17.29-8.75-25.92l8.55-2.93c3,7.36,6.15,14.66,8.9,22.11C531.59,388.37,532.79,394.28,538.62,397.39Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M534,442.61c-2.8,10.41-6,20.73-8.21,31.27-1.11,5.4-3.73,7.74-8.71,8.39-2.28-7.3-4.48-14.6-1.36-22.23,5.44-12.22,5.2-25.17,5.19-38.17,0-5,1.22-9.91,1.89-14.87Q528.36,424.81,534,442.61Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M556.37,433c-1.57-10.17-3.65-20.3-4.42-30.53-.23-3,3.22-6.32,5-9.5,1.9-3.46,4.32-6.74,5.57-10.42,2.13-6.26,3.53-12.77,5.23-19.18l11.37,2.45-4.12,9q-3.65,14.42-7.3,28.82l-1.92,4.87Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M622,311.83c6.47,4.6,11.89,10,13.83,18.08,3.71,15.32,8.62,30.13,17.89,43.14,2.36,3.31,1.74,4.69-2.43,3.82l-2.64-1.44a5.71,5.71,0,0,0-2-.64l-6.81-9.17.17.23q-5.67-10.19-11.35-20.35-5.3-9-10.59-17.91c-3.24-5.46-3.15-5.35,2-10.72C621.24,315.67,621.41,313.53,622,311.83Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path fill={this.state.isHovered === "triceps" ? '#ff9800' : '#9e9e9e'}
                                          onMouseEnter={() => this.handleMouseEnterSvg("triceps")}
                                          onMouseLeave={() => this.handleMouseEnterSvg("")}
                                          onClick={() => this.openBackdrop("triceps")}
                                          style={{transition: "all 0.1s"}}
                                          d="M892,266.51q4.34,20.31,8.66,40.63c-.25.28-.6.51-.74.83-1.58,3.67-3.12,7.36-4.68,11-1.26-3.74-2.59-7.47-3.79-11.23-1.34-4.24-2.73-8.47-3.82-12.77-2-8-4.5-15.68-10.64-21.61-1-2.38-2.54-4.7-2.84-7.16-.36-2.87.38-5.87.65-8.81a74.36,74.36,0,0,1,7.77,3.17C885.82,262.36,888.86,264.52,892,266.51Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M568,480.51c-2.86-10.41-6-20.75-8.41-31.27-1-4.24-.19-8.86-.2-13.3l9-24.47c.63,6.95,1.86,13.9,1.76,20.83-.16,10.72,2.41,20.62,6.78,30.22-.5,4.71-.95,9.43-1.52,14.13S571.29,480.87,568,480.51Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path  fill={this.state.isHovered === "triceps" ? '#ff9800' : '#9e9e9e'}
                                           onMouseEnter={() => this.handleMouseEnterSvg("triceps")}
                                           onMouseLeave={() => this.handleMouseEnterSvg("")}
                                           onClick={() => this.openBackdrop("triceps")}
                                           style={{transition: "all 0.1s"}}
                                          d="M749.66,298.06l6.93-31.62,18.12-10.59c-.85,5.37-.07,11.85-2.85,15.91-10.2,14.93-13.35,32-17.36,49Q752.09,309.39,749.66,298.06Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M442.08,374.81l-5.14,1.9c.29-1.59.1-3.51.93-4.74,8.67-12.86,13-27.42,17.4-42.07,1.42-4.76,4.5-9.27,7.68-13.2,4.15-5.12,4.51-4.83,8.25,1.9,2.51,2.52,4.33,5,1.4,8.61-1,1.21-1,3.24-1.41,4.9l.16-.21-6.91,11.48.17-.23-4.68,7,.17-.22-6.91,11.48.14-.2Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M863,509.22q3-9.54,6-19.08c2,9,3.21,18.28,6.28,26.9,4.46,12.49,5.53,25.24,5.42,38.21,0,3.56-1.51,7.11-2.32,10.67-6.85-.77-5.91-6.68-7.29-11.06C870.26,539.31,868,524,863,509.22Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M770.54,565.66c-3.45-13.27-1.6-26.41,1.33-39.42,2.27-10.07,5.18-20,7.8-30l2.32-.33-.14,0c.55.86,1.09,1.72,1.63,2.58a2.71,2.71,0,0,1,.58,1.9l1.67,7.1.15,8.95-2.31,9c-.79,2.44-2,4.83-2.29,7.32-.9,7.42-1.34,14.89-2.16,22.32C778.54,560.27,777.86,565.7,770.54,565.66Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path
                                        fill={this.state.isHovered === "biceps" ? '#ff9800' : '#9e9e9e'}
                                        onMouseEnter={() => this.handleMouseEnterSvg("biceps")}
                                        onMouseLeave={() => this.handleMouseEnterSvg("")}
                                        onClick={() => this.openBackdrop("biceps")}
                                        style={{transition: "all 0.1s"}}
                                          d="M608.63,277.84l10.79,31.26c-1.75,4.4-3.62,7.59-8,2-1.95-2.48-4.61-4.41-6.94-6.59L590.8,276.38l1.41-5.16.66-4Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path
                                        fill={this.state.isHovered === "biceps" ? '#ff9800' : '#9e9e9e'}
                                        onMouseEnter={() => this.handleMouseEnterSvg("biceps")}
                                        onMouseLeave={() => this.handleMouseEnterSvg("")}
                                        onClick={() => this.openBackdrop("biceps")}
                                        style={{transition: "all 0.1s"}}
                                          d="M487,302.86c-2.3,2.42-4.45,5-6.93,7.2a45.33,45.33,0,0,1-5.95,3.87c-.75-2.41-2.67-5.18-2.06-7.17,3-9.81,6.66-19.42,10.1-29.1l13.88-12.18c3.85,5.83,3.1,11.51,0,17.5C492.81,289.46,490,296.22,487,302.86Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M514.38,482.76c0,5,.06,10.06-.14,15.08-.14,3.68-1.62,6.38-5.92,6.54s-8.87.39-9.92-4.69c-1.32-6.33-1.53-12.89-2.22-19.35l-.28.27c1-.38,2.23-.5,2.94-1.18,3.46-3.31,6.77-6.77,10.14-10.17Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M594.88,480.41c.44,7,1.72,14.2-2.75,20.33a11.69,11.69,0,0,1-6.74,3.9c-3.33.67-6.88-.14-7.9-4.21-1.06-4.22-1.69-8.54-2.51-12.82a18.29,18.29,0,0,0,1.6-2.85c1.76-5,3.43-10,5.13-15L592.87,480l2.2.65Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path fill={this.state.isHovered === "shoulders" ? '#ff9800' : '#9e9e9e'}
                                          onMouseEnter={() => this.handleMouseEnterSvg("shoulders")}
                                          onMouseLeave={() => this.handleMouseEnterSvg("")}
                                          onClick={() => this.openBackdrop("shoulders")}
                                          style={{transition: "all 0.1s"}}
                                          d="M873.85,228.2a72.54,72.54,0,0,1,7.12,2.88c8.74,4.62,14.37,11.17,12.85,21.86a44.35,44.35,0,0,1-2,6.33c-.41.85-2.07,1.89-2.82,1.67-11-3.18-21.38-20.25-18.85-31.06C870.36,229.08,872.58,228.75,873.85,228.2Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M597,417.67c.71,14.9,1.9,29.79,1.89,44.69,0,6-2.61,12-4,18.05l.19.22-.6-2.24c-.58-.92-1.07-1.91-1.73-2.76-9.48-12.13-9.48-12.13-2.49-24.48l.44-6.34q1.18-11.26,2.36-22.53Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M763.9,323.09c-3.49,6.93-6.74,14-10.51,20.76-6.13,11-12.4,21.95-19,32.68-2.63,4.28-3.71.39-4.84-1.66,1.28-3.72,2.16-7.65,3.93-11.13,4.64-9.12,9.68-18,14.57-27l8.54-16.06,6.06-3.72Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M496.18,480.34c-1.42-5.16-3.95-10.3-4-15.48-.19-13.36.69-26.74,1.18-40.11.16-4.45.45-8.91.68-13.36.88,3.52,2,7,2.58,10.57,1.38,8.35,2.51,16.73,3.74,25.09l2.19,7.34c5.08,9.08,5,9-1.76,17.82-1.95,2.55-3.26,5.58-4.87,8.4Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M480.19,318.46c3,3.86,3.76,5.31,2.47,9.36-1.68,5.28-3.29,10.82-6.24,15.42-7.39,11.54-15.6,22.55-23.28,33.9-2.57,3.78-4.48,2.91-6.63-.12q3.4-7.93,6.82-15.85l-.14.2,6.91-11.48-.17.22,4.68-7-.17.23,6.91-11.48-.16.21Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M919,374.83c-1.19,2-2.06,5.93-4.8,1.35q-12.63-21.12-24.92-42.42c-3.36-5.81-6.68-11.75-4.16-18.9,8,3,8.22,12.1,13.61,17.13l11.5,22.33Q914.62,364.58,919,374.83Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path fill={this.state.isHovered === "shoulders" ? '#ff9800' : '#9e9e9e'}
                                          onMouseEnter={() => this.handleMouseEnterSvg("shoulders")}
                                          onMouseLeave={() => this.handleMouseEnterSvg("")}
                                          onClick={() => this.openBackdrop("shoulders")}
                                          style={{transition: "all 0.1s"}}
                                          d="M755,248.58c-1.68-6.81,3.53-10,7.53-13.54,3-2.61,6.73-4.31,10.13-6.42,4.15-.38,8.87-1.08,6.76,5.62-1.83,5.8-4.31,11.4-6.5,17.08l-16.07,11h0Q755.91,255.46,755,248.58Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M903.14,311.65a75.25,75.25,0,0,1,12.19,29.63c1.26,7.11,5.48,13.7,8.47,20.48,1.94,4.37,4.05,8.66,6.09,13l.17-.16-6.43-2.45-11.48-20-11.73-20C897,324.75,899.33,318.1,903.14,311.65Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M644.5,377c-2.12.5-5.71,2-6.16,1.36-9.41-13.69-19.09-27.26-27.28-41.67-3.26-5.75-3.08-13.46-4.47-20.28q10.15,15.54,20.32,31.08l13.14,18.33-.17-.23Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M810.76,410.76c10.11-2.13,10.29.69,11.29,9.8,1.36,12.39-2.58,23.55-6.91,34.72-1.27-3.72-2.75-7.39-3.75-11.19-1.76-6.7-3.24-13.48-4.83-20.22C804.75,418.47,807.77,414.62,810.76,410.76Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M826.81,417.81c1.72-3.26,1.31-8.66,7.69-7,5.62,1.45,9.15,5.53,8.1,11-2.17,11.29-4.77,22.5-7.19,33.74l.06-.07c-.63-.06-1.24-.15-1.86-.27C829.5,443.06,825.5,430.92,826.81,417.81Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M725.11,372.23c-.58.17-1.16.35-1.74.56L720.64,370c7-12.79,13.26-25.74,16-40.39,1.18-6.29,5.9-11.92,9-17.85,5.62,7.48,4.89,15.06.4,22.71Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path  fill={this.state.isHovered === "shoulders" ? '#ff9800' : '#9e9e9e'}
                                           onMouseEnter={() => this.handleMouseEnterSvg("shoulders")}
                                           onMouseLeave={() => this.handleMouseEnterSvg("")}
                                           onClick={() => this.openBackdrop("shoulders")}
                                           style={{transition: "all 0.1s"}}
                                          d="M480.52,271c-.17-6.21-.71-12.44-.43-18.63a15.41,15.41,0,0,1,14.81-14.6c3.32-.15,3.41,1.84,3.28,4.19-4.71,6.42-2,13.53-1.88,20.4l-.16.15a125.71,125.71,0,0,1-10,7.91C484.71,271.33,482.41,270.86,480.52,271Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path fill={this.state.isHovered === "shoulders" ? '#ff9800' : '#9e9e9e'}
                                          onMouseEnter={() => this.handleMouseEnterSvg("shoulders")}
                                          onMouseLeave={() => this.handleMouseEnterSvg("")}
                                          onClick={() => this.openBackdrop("shoulders")}
                                          style={{transition: "all 0.1s"}}
                                          d="M592.87,237.65c14.61,2.23,17.88,5.71,18.21,20,.11,4.45-.42,8.92-.66,13.38-2-.32-4.34-.07-5.89-1.07-3.43-2.19-6.45-5-9.64-7.57-.11-2.3-.21-4.6-.32-6.9,0-2.19.1-4.39.14-6.58l-1.83-7.23Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M775.15,579.35q-.14-4.47-.26-8.94c3.62-4.62,7-6.11,10.19.48.72,1.51,2.11,2.69,3.2,4q-2.19,19.23-4.41,38.45a10.23,10.23,0,0,1-.7,2.06c-.61-.71-1.58-1.33-1.79-2.14-.9-3.55-1.58-7.15-2.34-10.74-.47-2.46-.95-4.93-1.42-7.39Q776.39,587.25,775.15,579.35Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M869.5,611l-2.66,1.41c-2.45-13.13-7.76-26-4-39.73,2.71-3.54,4.51-9.29,10.72-4.48a17.26,17.26,0,0,0,.76,2.08c0,2.35,0,4.71-.05,7.06a4.74,4.74,0,0,0-.08,1.91L872,593Q870.73,602,869.5,611Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M873.52,296.22c.09-4.09.06-8.19.32-12.27a39.14,39.14,0,0,1,1.22-5.88c1.21,1.31,3,2.43,3.54,4,3,9.08,5.75,18.25,8.39,27.45.16.56-1.28,1.58-2,2.4Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M603.36,305.34c1.19,3.59,4.81,7.05.53,10.9L589.76,294c-.38-2.57-.91-5.14-1.07-7.72-.08-1.18.58-2.4.91-3.6a14.8,14.8,0,0,1,2.25,2.45C595.73,291.81,599.53,298.59,603.36,305.34Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M777.17,601.92c-.23,5.46-.31,10.94-.81,16.38-.09,1-1.86,1.83-2.86,2.74-.65-.87-1.71-1.67-1.89-2.63a72.13,72.13,0,0,1-1.47-10.72c-.14-4,.31-8.07.5-12.11.42-1,.8-2.05,1.26-3.05.58-1.24,1.24-2.46,1.86-3.68.42,1.25.93,2.48,1.25,3.75C775.78,595.7,776.46,598.82,777.17,601.92Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M878,588.77q.94,9.35,1.91,18.67c.11,1.1.64,2.39.25,3.26-1.61,3.49-3.5,6.85-5.28,10.25l-3.18-10.07,2.16-15.62Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M489.19,302.57l4.93-8.82,1.73-2.62a4.16,4.16,0,0,1,.6-1.88l1.66-2.58a4.47,4.47,0,0,1,.51-1.82c.63,0,1.27,0,1.9-.06,0,3,0,6,0,9-3.82,6.34-7.55,12.73-11.55,19-.7,1.08-2.56,1.4-3.88,2.07l0-5.3,1.7-2.73a2,2,0,0,1,.53-1.77Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}} d="M595.27,574.63q1.14,6.92,2.27,13.83c-5,0-3.15-4.6-4.64-7Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M534.5,434.23q-1.05-4-2.09-8l4,.16C535.77,429,535.13,431.64,534.5,434.23Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M859.16,502c-2.66.1-6.86-6-6-9.15a79.78,79.78,0,0,1,3.11-8.34c.81-2,1.71-4.05,2.57-6.07,1.51,1.9,3.33,3.64,4.48,5.74,2,3.64.32,13.66-2.51,16.64A10.55,10.55,0,0,1,859.16,502Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path
                                        fill={this.state.isHovered === "chest" ? '#ff9800' : '#9e9e9e'}
                                        onMouseEnter={() => this.handleMouseEnterSvg("chest")}
                                        onMouseLeave={() => this.handleMouseEnterSvg("")}
                                        onClick={() => this.openBackdrop("chest")}
                                        style={{transition: "all 0.1s"}}
                                        d="M589,269l-.54,2.34c-1.26,6-4.89,8.7-11,10.21-8.73,2.15-17,3.43-25.31-.91-4-1.5-4-4.64-3.69-8.23.71-7.76,1.14-15.55,1.69-23.33a36.38,36.38,0,0,0,4.44-.19c13.83-2.27,25.34,2.84,35.83,11.21l.42,2.28c-.16,1.37-.33,2.75-.49,4.12C589.89,267.3,589.44,268.13,589,269Z"
                                        transform="translate(-436.94 -148.95)"/>
                                    <path style={{transition: "all 0.1s"}}
                                          d="M793.38,480.21l4,11.47c-1.38,2.75-2.4,5.79-4.25,8.17-2.37,3-4.64,2.84-5.83-1.36-1.08-3.82-2.46-7.55-3.71-11.32,1.93-3,3.51-6.33,5.87-9C792.1,475.27,792.71,478.23,793.38,480.21Z"
                                          transform="translate(-436.94 -148.95)"/>
                                    <path
                                        fill={this.state.isHovered === "chest" ? '#ff9800' : '#9e9e9e'}
                                        onMouseEnter={() => this.handleMouseEnterSvg("chest")}
                                        onMouseLeave={() => this.handleMouseEnterSvg("")}
                                        onClick={() => this.openBackdrop("chest")}
                                        style={{transition: "all 0.1s"}}
                                        d="M509.34,280.79l-4-.72-.72-3.63-1.55-7.5-.58.21c-1.52-7,.7-12.36,7.2-15.72,9.64-6.73,20.62-4.14,31.18-4.45.33,6.34-.11,12.84,1.17,19,1.57,7.6-.65,12.15-7.84,14.52l-11.21,2Z"
                                        transform="translate(-436.94 -148.95)"/>
                                </svg>
                            </Grid>
                        </Grid>



                    </Container>

                        {/*<Paper style={styles.footer}>*/}
                        {/*    <BottomNavigation>*/}
                        {/*        <BottomNavigationAction label="Recent" icon={<RestoreIcon />} />*/}
                        {/*        <BottomNavigationAction label="Favorites" icon={<AddBox />} />*/}
                        {/*    </BottomNavigation>*/}
                        {/*</Paper>*/}
                    <Dialog maxWidth="lg" scroll='body' PaperProps={{
                        style: {
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                            overflow: "hidden"
                        },
                    }}  open={this.state.backdropOpened} onClick={this.handleClose}>
                        <Container>
                            <Grid container justifyContent={"center"} spacing={4}>
                                {this.state.exercises}
                            </Grid>
                        </Container>
                    </Dialog>
                </section>
            </Fade>
        );
    }
}



export default Training;