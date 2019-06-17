import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LockOutlinedIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Avatar from "@material-ui/core/Avatar";

const styles = {
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    Paper: {
        marginTop: "40px",
        padding: "20px"
    },
    Typography: {
        marginBottom: '20px'
    },
    Avatar: {
        color: 'white'
    }
};


class RegistrationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastname: '',
            email: '',
            pass: '',
        };
        this.complete = this.complete.bind(this);
    }
    complete(e){
        e.preventDefault();
        let info = {
            name: this.state.name,
            surname: this.state.lastname,
            email: this.state.email,
            pass: this.state.pass
        };
        console.log(info);
        this.props.callBackFromParent('register', info);
    }
    componentDidMount() {

    }

    render() {
        return (
            <div >
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Sign up
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Container maxWidth="sm">
                    <Paper style={styles.Paper}>
                        <div style={styles.paper}>

                            <Typography component="h1" variant="h5" style={styles.Typography}>
                                Signing up
                            </Typography>
                            <form noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="fname"
                                            name="firstName"
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            autoFocus
                                            value={this.state.name}
                                            onChange={(e) => {this.setState({name: e.target.value})}}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            value={this.state.lastname}
                                            autoComplete="lname"
                                            onChange={(e) => {this.setState({lastname: e.target.value})}}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            value={this.state.email}
                                            onChange={(e) => {this.setState({email: e.target.value})}}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            value={this.state.pass}
                                            onChange={(e) => {this.setState({pass: e.target.value})}}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                                            label="I want to sell my soul."
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    onClick={this.complete}
                                >
                                    Sign Up
                                </Button>
                                <Grid container justify="flex-end">
                                    <Grid item>
                                        <Link href="/login" variant="body2">
                                            Already have an account? Sign in
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Paper>
                </Container>
            </div>
        )
    }
}
export default RegistrationPage