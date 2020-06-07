import Grid from '@material-ui/core/Grid';
import {Component} from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
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


const styles = {
    headerCell: {
        backgroundColor: teal[500],
        color: "white",
        fontSize: 20
    },
    row:{
        day: {
            fontSize: 15,
            color: teal[500]
        },
        cal: {
            fontSize: 15,
            color: red[500]
        },
        prot: {
            fontSize: 15,
            color: orange[500]
        },
        fat: {
            fontSize: 15,
            color: yellow[600]
        },
        carb: {
            fontSize: 15,
            color: blue[500]
        }

    },
}

const data = [
    {name: 'Day 1', Calories: 40, Proteins: 60, Fats: 90, Carbohydrates: 60},
    {name: 'Day 2', Calories: 30, Proteins: 40, Fats: 100, Carbohydrates: 90},
    {name: 'Day 3', Calories: 60, Proteins: 60, Fats: 40, Carbohydrates: 20},
    {name: 'Day 4', Calories: 28, Proteins: 40, Fats: 20, Carbohydrates: 28},
    {name: 'Day 5', Calories: 100, Proteins: 100, Fats: 60, Carbohydrates: 20},
    {name: 'Day 6', Calories: 90, Proteins: 50, Fats: 20, Carbohydrates: 100, amt: 25},
    {name: 'Day 7', Calories: 28, Proteins: 100, Fats: 20, Carbohydrates: 40, amt: 21},
];

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