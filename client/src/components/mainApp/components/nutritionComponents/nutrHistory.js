import Grid from '@material-ui/core/Grid';
import {Component} from "react";
import React from "react";
import teal from "@material-ui/core/es/colors/teal";
import red from "@material-ui/core/colors/red";
import orange from "@material-ui/core/colors/orange";
import yellow from "@material-ui/core/colors/yellow";
import blue from "@material-ui/core/colors/blue";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import green from "@material-ui/core/colors/green";
import Divider from "@material-ui/core/Divider";

class NutrHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.setState({
            dataToDisplay: [
            ],
            checked: true
        })
    }
    render() {
        return (
            <section id="SleepHist" >
                <Grid container justify={"space-evenly"}>
                    <Grid item xs={7}>
                        <Paper style={{width: "100%", padding: "20px"}}>
                            <Grid container justify="space-around">
                                <Grid>
                                    <Typography variant="h5" color="primary">
                                        29/05
                                    </Typography>
                                </Grid>
                                <Divider orientation="vertical" flexItem />
                                <Grid>
                                    <Typography variant="h5" style={{color: "#e53935"}}>
                                        2500
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Typography variant="h5" style={{color: "#fb8c00"}}>
                                        25
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Typography variant="h5" style={{color: "#4caf50"}}>
                                        35
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Typography variant="h5" style={{color: "#2196f3"}}>
                                        60
                                    </Typography>
                                </Grid>
                                <Divider orientation="vertical" flexItem />
                                <Grid>
                                    <CheckCircleIcon style={{ fontSize: 30, color: green[500]}}/>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>

            </section>
        );
    }
}



export default NutrHistory;