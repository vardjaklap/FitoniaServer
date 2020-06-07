import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import orange from "@material-ui/core/colors/orange";
import Gavel from "@material-ui/icons/Gavel";
import {Fastfood, Opacity, Snooze} from "@material-ui/icons";
import teal from "@material-ui/core/colors/teal";
import blue from "@material-ui/core/colors/blue";
import indigo from "@material-ui/core/colors/indigo";
import {Link} from "react-router-dom";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            user: {
                name: "undefined",
                lname: "undefined",
                email: "undefined",
                dateData: {
                    date: null,
                    tr: {
                        completed: false
                    },
                    nt: {
                        message: ''
                    },
                    nutr: {
                        cal: 0,
                        prot: 0,
                        fat: 0,
                        carb: 0
                    },
                    sl: {
                        dur: 0,
                        quality: 0,
                        note: ''
                    }
                }
            }
        };
        this.sendTheme = this.sendTheme.bind(this);
    }

    componentDidMount() {
        this.setState({
            dataToDisplay: [],
            checked: true,
            user: this.props.userData
        })
        this.sendTheme()

    }
    sendTheme(){
        this.props.callBackFromParent("red");
    }
    render() {
        return (
            <Fade in={this.state.checked}>
                <div>
                    <Container>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography gutterBottom variant="h2" style={{margin: "50px 0 40px"}}>Get started here!</Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container justify="space-evenly"
                                      alignItems="stretch"
                                      spacing={4}>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <Card style={{height: "100%"}}>
                                            <CardActionArea component={Link} to="/app/training" style={{height: "100%"}}>
                                                <div style={{height: "150px", width: "100%", backgroundColor: orange[500]}}>
                                                    <Grid container justify="center"
                                                          alignItems="center"
                                                          style={{height: "100%"}}>
                                                        <Gavel style={{fontSize: 65, color: "white"}}/>
                                                    </Grid>
                                                </div>
                                                <CardContent  style={{textAlign: "left"}}>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        Training
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Get your blood pumping! Find the exercise for the appropriate body part and discover something new!
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={6}  md={3}>
                                        <Card style={{height: "100%"}}>
                                            <CardActionArea component={Link} to="/app/nutrition" style={{height: "100%"}}>
                                                <div style={{height: "150px", width: "100%", backgroundColor: teal[500]}}>
                                                    <Grid container justify="center"
                                                          alignItems="center"
                                                          style={{height: "100%"}}
                                                          >
                                                        <Fastfood style={{fontSize: 65, color: "white"}}/>
                                                    </Grid>
                                                </div>
                                                <CardContent  style={{textAlign: "left"}}>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        Nutrition
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Light snack or a full meal - count your calories to your goal!
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={6}  md={3}>
                                        <Card style={{height: "100%"}}>
                                            <CardActionArea component={Link} to="/app/hydration" style={{height: "100%"}}>
                                                <div style={{height: "150px", width: "100%", backgroundColor: blue[500]}}>
                                                    <Grid container justify="center"
                                                          alignItems="center"
                                                          style={{height: "100%"}}>
                                                        <Opacity style={{fontSize: 65, color: "white"}}/>
                                                    </Grid>
                                                </div>
                                                <CardContent  style={{textAlign: "left"}}>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        Hydration
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Humans consist mostly out of water - don't forget to maintain your hydration!
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={6}  md={3}>
                                        <Card style={{height: "100%"}}>
                                            <CardActionArea component={Link} to="/app/sleep" style={{height: "100%"}}>
                                                <div style={{height: "150px", width: "100%", backgroundColor: indigo[500]}}>
                                                    <Grid container justify="center"
                                                          alignItems="center"
                                                          style={{height: "100%"}}>
                                                        <Snooze style={{fontSize: 65, color: "white"}}/>
                                                    </Grid>
                                                </div>
                                                <CardContent  style={{textAlign: "left"}}>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        Sleep
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        With a good nights sleep any goals for the day are reachable!
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>


                                </Grid>
                            </Grid>

                        </Grid>
                    </Container>
                </div>
            </Fade>
        );
    }
}



export default Dashboard;