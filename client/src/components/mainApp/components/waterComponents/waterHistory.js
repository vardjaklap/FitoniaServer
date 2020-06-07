import Grid from '@material-ui/core/Grid';
import {Component} from "react";
import React from "react";
import Paper from "@material-ui/core/Paper";

const styles = {
    Paper: {
        padding: "20px",
        marginTop: "20px",
        marginBottom: "10px"
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
                    <Paper style={styles.Paper}>

                    </Paper>

                </Grid>
            </section>
        );
    }
}



export default WaterHistory;