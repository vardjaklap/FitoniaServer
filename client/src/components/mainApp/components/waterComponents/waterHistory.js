import Grid from '@material-ui/core/Grid';
import {Component} from "react";

import React from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import blue from "@material-ui/core/colors/blue";



const data = [
    {name: 'Day 1', amount: "1500", percent: 52},
    {name: 'Day 2', amount: "180", percent: 44},
    {name: 'Day 3', amount: "1500", percent: 30},
    {name: 'Day 4', amount: "300", percent: 100},
    {name: 'Day 5', amount: "100", percent: 13},
    {name: 'Day 6', amount: "1500", percent: 42},
    {name: 'Day 7', amount: "1230", percent: 36},
];
const styles = {
    headerCell: {
        backgroundColor: blue[500],
        color: "white",
        fontSize: 20
    },
    row:{
        color: blue[500],
        fontSize: 15
    }
}
class WaterHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        this.setState({

        })
    }
    render() {
        return (
            <section id="WaterHist">
                <Grid item xs={12}>
                    <Table>
                        <TableHead >
                            <TableRow>
                                <TableCell style={styles.headerCell}>Date</TableCell>
                                <TableCell style={styles.headerCell}>Amount</TableCell>
                                <TableCell style={styles.headerCell}>%</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {data.map(row => (
                                <TableRow key={row.name} >
                                    <TableCell component="th" scope="row" style={styles.row}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell  style={styles.row}>{row.amount}</TableCell>
                                    <TableCell  style={styles.row}>
                                        {row.percent}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Grid>
            </section>
        );
    }
}



export default WaterHistory;