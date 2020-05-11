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
import CardActions from "@material-ui/core/CardActions";

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
            exercises: null
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.sendTheme = this.sendTheme.bind(this);
        this.openBackdrop = this.openBackdrop.bind(this);
        this.handleClose = this.handleClose.bind(this);
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
    openBackdrop(e){
        let chosenExercises;
        switch(e.currentTarget.value) {
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
                        <Grid container justify="space-evenly">
                            <Grid item xs={4}>
                                <Paper style={styles.Paper}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Typography variant="h3" gutterBottom>
                                                Front
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Grid container direction="column"
                                                  justify="center"
                                                  alignItems="center"
                                            spacing={3}>
                                                <Grid item>
                                                    <Button variant="contained" color="primary" size="large" onClick={this.openBackdrop} value="chest">
                                                        Chest
                                                    </Button>
                                                </Grid>
                                                <Grid item>
                                                    <Button variant="contained" color="primary" size="large" onClick={this.openBackdrop} value="biceps">
                                                        Biceps
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Grid container direction="column"
                                                  justify="center"
                                                  alignItems="center"
                                                  spacing={3}>
                                                <Grid item>
                                                    <Button variant="contained" color="primary" size="large" onClick={this.openBackdrop} value="core">
                                                        Core
                                                    </Button>
                                                </Grid>
                                                <Grid item>
                                                    <Button variant="contained" color="primary" size="large" onClick={this.openBackdrop} value="quads">
                                                        Quads
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper style={styles.Paper}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Typography variant="h3" gutterBottom>
                                                Back
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Grid container direction="column"
                                                  justify="center"
                                                  alignItems="center"
                                                  spacing={3}>
                                                <Grid item>
                                                    <Button variant="contained" color="primary" size="large" onClick={this.openBackdrop} value="shoulders">
                                                        Shoulders
                                                    </Button>
                                                </Grid>
                                                <Grid item>
                                                    <Button variant="contained" color="primary" size="large" onClick={this.openBackdrop} value="triceps">
                                                        Triceps
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Grid container direction="column"
                                                  justify="center"
                                                  alignItems="center"
                                                  spacing={3}>
                                                <Grid item>
                                                    <Button variant="contained" color="primary" size="large" onClick={this.openBackdrop} value="back">
                                                        Back
                                                    </Button>
                                                </Grid>
                                                <Grid item>
                                                    <Button variant="contained" color="primary" size="large" onClick={this.openBackdrop} value="glutes">
                                                        Glutes
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
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
                            <Grid container justify={"center"} spacing={4}>
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