import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";


const styles = {
    Paper: {
        marginTop: "40px",
        padding: "20px"
    },
    bigAvatar: {
        margin: 10,
        width: 90,
        height: 90,
    },
};

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
        this.sendTheme = this.sendTheme.bind(this);
    }

    componentDidMount() {
        this.setState({
            checked: true
        })
        this.sendTheme()
    }
    sendTheme(){
        this.props.callBackFromParent("profile");
    }

    render() {
        return (
            <Fade in={this.state.checked}>
                <section id="Profile" >
                    <Container>
                        <Grid container>
                            <Grid item xs={12}>
                                <Paper style={styles.Paper}>
                                    <Grid container alignItems="center" justify="center">
                                        <Grid item>
                                            <Avatar style={styles.bigAvatar} color="red">A</Avatar>
                                        </Grid>
                                        <Grid item xs={12}>
                                                  <Typography>
                                                      Your name
                                                  </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>

                                    </Grid>
                                    <Grid>

                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </Fade>
        );
    }
}



export default Profile;