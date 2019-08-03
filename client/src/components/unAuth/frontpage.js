import React from 'react';
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
    button: {
        margin: "5px",
        padding: "15px 25px"
    },
    text: {

    },
    logo: {
        height: "200px",
        width: "200px",
        borderRadius: "100%",
        border: "5px #3F51B5 solid"
    },
    trLeft: {
        width: 0,
        height: 0,
        borderBottom: "400px solid #3f51b5 ",
        borderLeft: "160px solid transparent",
        display: 'inline'
    },
    trRight: {
        width: 0,
        height: 0,
        borderBottom: "400px solid #757de8",
        borderRight: "160px solid transparent",
        display: 'inline'
    }
};

function FrontPage() {
    return (
        <div id="frontPage">
            <AppBar position="static" color="primary">
                <Toolbar>
                </Toolbar>
            </AppBar>
            <Container component="main">
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={12} md={8}>
                        <Grid container style={{minHeight: "80vh"}} justify="center" alignItems="center" spacing={3}>
                            <Grid item xs={12} md={4}>
                                <div className="div" style={styles.logo}> </div>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                            <Typography variant="h2" color="primary"  style={styles.text} gutterBottom>
                                                FITONIA
                                            </Typography>
                                            <Typography variant="h5" color="primary"  style={styles.text} paragraph>
                                                Your new You begins now
                                            </Typography>
                                                <Button href="/login" color="primary" variant="outlined" size="large" style={styles.button}>
                                                    Login
                                                </Button>
                                                <Button href="/register" color="primary" variant="outlined" size="large" style={styles.button}>
                                                    Sign up
                                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/*<div className="background" style={{opacity: 0.9}}>*/}
                {/*    <div className="triangle" style={styles.trLeft}>*/}

                {/*    </div>*/}
                {/*    <div className="triangle" style={styles.trRight}>*/}

                {/*    </div>*/}
                {/*</div>*/}


            </Container>
        </div>
    );
}

export default FrontPage;
