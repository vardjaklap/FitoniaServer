import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";
import SpaIcon from '@material-ui/icons/Spa';



const styles = {
    Paper: {
        // padding: "20px",
        marginTop: "10px",
        textAlign: "left"
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
    }

}
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
const rows = [
    createData('December, 16', 30.2, 12.2, 24.3, 12.3),
    createData('December, 15', 29.8, 12.6, 27.6, 12.3),
    createData('December, 14', 29.6, 12.3, 24.7, 12.2),
    createData('December, 13', 30.3, 14.3, 27.1, 12.5),
];

class Meditation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
        this.handleClick = this.handleClick.bind(this);
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
    sendTheme(){
        this.props.callBackFromParent("deepPurple");
    }
    handleClick(){

    }
    handleChange(event){


    }
    render() {
        return (
            <Fade in={this.state.checked}>
                <section id="Meditation" >
                        <Container>
                            <Grid container  direction="column"
                                  justify="center"
                                  alignItems="center" style={{height: "80vh"}}>
                                <Grid item>
                                    <SpaIcon style={{fontSize: "300px"}} color="disabled" />
                                </Grid>
                                <Grid item>
                                    <Typography variant="h2" style={{color: "grey"}}>
                                        I am not finished yet.
                                    </Typography>
                                    <Typography variant="h2" style={{color: "grey"}}>
                                        Come check next time ;)
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Container>
                </section>
            </Fade>
        );
    }
}



export default Meditation;