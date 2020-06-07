import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SpaIcon from '@material-ui/icons/Spa';


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