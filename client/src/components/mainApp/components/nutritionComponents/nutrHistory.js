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
                <Grid item xs={12}>
                    <Table>
                        <TableHead >
                            <TableRow>
                                <TableCell style={styles.headerCell}>Date</TableCell>
                                <TableCell style={styles.headerCell} align="center">Calories</TableCell>
                                <TableCell style={styles.headerCell} align="center">Proteins</TableCell>
                                <TableCell style={styles.headerCell}  align="center">Fats</TableCell>
                                <TableCell style={styles.headerCell}  align="center">Carbohydrates</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {data.map(row => (
                                <TableRow key={row.name} >
                                    <TableCell style={styles.row.day}>{row.name}</TableCell>
                                    <TableCell style={styles.row.cal} align="center">{row.Calories}</TableCell>
                                    <TableCell style={styles.row.prot} align="center">{row.Proteins}</TableCell>
                                    <TableCell style={styles.row.fat} align="center">{row.Fats}</TableCell>
                                    <TableCell style={styles.row.carb} align="center">{row.Carbohydrates}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Grid>
            </section>
        );
    }
}



export default NutrHistory;