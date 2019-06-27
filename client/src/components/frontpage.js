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
    }
}

function FrontPage() {
    return (
        <div id="frontPage">
            <AppBar position="static" color="primary">
                <Toolbar>
                </Toolbar>
            </AppBar>
            <Container component="main">
                <Grid container  justify="center" style={{minHeight: "80vh"}} alignItems="center">
                    <Grid container spacing={3} justify="center">
                        <Grid item xs={4}>
                            <div className="div" style={styles.logo}>
                            </div>
                        </Grid>
                        <Grid item xs={7}>
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

            </Container>
        </div>
    );
}

export default FrontPage;
