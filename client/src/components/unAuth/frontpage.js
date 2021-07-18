import React from 'react';
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import logoBid from '../resources/logoBogTransparent.png';

const styles = {
    appBar: {
        minHeight: 200,
    },
    log: {
      width: 250,
      height: 250
    },


    button: {
        margin: "5px",
        padding: "15px 25px"
    },
    text: {
        fontFamily: "'Nunito', sans-serif",
    },
    logo: {
        height: "200px",
        width: "200px",
        borderRadius: "100%",
        border: "5px #3F51B5 solid"
    }
};

function FrontPage() {
    return (
        <div id="frontPage">
            <Grid container style={{height: "20px", width: "100%"}}>
                <Grid item style={{height: "20px", width: "calc(100% / 7)", backgroundColor: "#f44336"}}></Grid>
                <Grid item style={{height: "20px", width: "calc(100% / 7)", backgroundColor: "#ffc107"}}></Grid>
                <Grid item style={{height: "20px", width: "calc(100% / 7)", backgroundColor: "#ffeb3b"}}></Grid>
                <Grid item style={{height: "20px", width: "calc(100% / 7)", backgroundColor: "#4caf50"}}></Grid>
                <Grid item style={{height: "20px", width: "calc(100% / 7)", backgroundColor: "#2196f3"}}></Grid>
                <Grid item style={{height: "20px", width: "calc(100% / 7)", backgroundColor: "#3f51b5"}}></Grid>
                <Grid item style={{height: "20px", width: "calc(100% / 7)", backgroundColor: "#673ab7"}}></Grid>
            </Grid>
            <Container component="main">
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={8}>
                        <Grid container style={{minHeight: "70vh"}} justifyContent="center" alignItems="center" spacing={1}>
                            <Grid item xs={12} md={4}>
                                <Grid container justifyContent="center">
                                    <Grid item>
                                        <img src={logoBid} alt="" style={styles.log}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Grid container >
                                    <Grid container justifyContent="center">
                                        <Typography variant="h2" color="primary"  style={styles.text} gutterBottom>
                                            ФITONIA
                                        </Typography>
                                    </Grid>
                                    <Grid container justifyContent="center">
                                        <Button href="/login" color="primary" variant="contained" size="large" style={styles.button}>
                                            Login
                                        </Button>
                                        <Button href="/register" color="primary" variant="outlined" size="large" style={styles.button}>
                                            Sign up
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container justifyContent="center">
                    <Grid item>
                        <Typography variant="h3" color="primary"  style={styles.text} gutterBottom>
                            Your new You begins today
                        </Typography>
                    </Grid>
                </Grid>


            </Container>
        </div>
    );
}

export default FrontPage;
