import Grid from '@material-ui/core/Grid';
import {Component} from "react";

import React from "react";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from '@material-ui/icons/Comment'
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import indigo from "@material-ui/core/colors/indigo"
import StarIcon from '@material-ui/icons/Star';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";


const data = [
    {name: 'Day 1', SleepDur: "9h 20m", Quality: 5, message: ""},
    {name: 'Day 2', SleepDur: "9h 20m", Quality: 4, message: "234"},
    {name: 'Day 3', SleepDur: "9h 20m", Quality: 3, message: "23"},
    {name: 'Day 4', SleepDur: "9h 20m", Quality: 0, message: "54t"},
    {name: 'Day 5', SleepDur: "9h 20m", Quality: 1, message: "32r"},
    {name: 'Day 6', SleepDur: "9h 20m", Quality: 4, message: "23r"},
    {name: 'Day 7', SleepDur: "9h 20m", Quality: 3, message: "w4r"},
];
const styles = {
    headerCell: {
        backgroundColor: indigo[500],
        color: "white",
        fontSize: 20
    },
    row:{
        fontSize: 15
    }
}

class SleepHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openMessage: false,
            message: ""
        };
        this.openMessage = this.openMessage.bind(this);
        this.closeMessage = this.closeMessage.bind(this);
    }

    componentDidMount() {
        this.setState({
            dataToDisplay: [
            ],
            checked: true
        })
    }
    openMessage(obj){
        this.setState({
            message: obj.message,
            openMessage: true
        })
    }
    closeMessage(){
        this.setState({
            openMessage: false
        })
    }
    render() {
        return (
            <section id="SleepHist" >
                    <Grid item xs={12}>
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <TableCell style={styles.headerCell}>Date</TableCell>
                                    <TableCell style={styles.headerCell}>Duration</TableCell>
                                    <TableCell style={styles.headerCell}>Quality</TableCell>
                                    <TableCell align="right" style={styles.headerCell}>Notes</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map(row => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row" style={styles.row}>
                                            {row.name}
                                        </TableCell>
                                        <TableCell style={styles.row}>{row.SleepDur}</TableCell>
                                        <TableCell>
                                            <StarIcon color="primary" style={row.Quality >= 1 ? {} : {display: "none"}}></StarIcon>
                                            <StarIcon color="primary" style={row.Quality >= 2 ? {} : {display: "none"}}></StarIcon>
                                            <StarIcon color="primary" style={row.Quality >= 3 ? {} : {display: "none"}}></StarIcon>
                                            <StarIcon color="primary" style={row.Quality >= 4 ? {} : {display: "none"}}></StarIcon>
                                            <StarIcon color="primary" style={row.Quality >= 5 ? {} : {display: "none"}}></StarIcon>
                                        </TableCell>
                                        <TableCell align="right">
                                            <IconButton id={row.name} disabled={row.message === "" } disableRipple={row.message === "" } onClick={() => this.openMessage(row)}>
                                                <CommentIcon style={row.message === "" ? {} : {color: indigo[500]}}></CommentIcon>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <Dialog
                            open={this.state.openMessage}
                            onClose={this.closeMessage}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">{"Your message:"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    {this.state.message}
                                </DialogContentText>
                            </DialogContent>
                        </Dialog>
                    </Grid>
            </section>
        );
    }
}



export default SleepHistory;