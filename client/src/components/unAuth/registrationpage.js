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
import Face from "@material-ui/icons/Face";
import Avatar from "@material-ui/core/Avatar";
import {pink} from "@material-ui/core/colors";
import ArrowBack from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";

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
    button: {
        height: "50px",
        marginBottom: "15px"
    },
    avatar: {
        margin: 8,
        color: '#fff',
        backgroundColor: pink[500],
        width: "60px",
        height: "60px"
    }
};


class RegistrationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:{
              value: '',
              error: false,
              helperText: ''
            },
            lastname: {
                value: '',
                error: false,
                helperText: ''
            },
            email: {
                value: '',
                error: false,
                helperText: ''
            },
            pass: {
                value: '',
                error: false,
                helperText: ''
            },
            checkbox: false,
            errorName: false
        };
        this.complete = this.complete.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }
    complete(e){
        e.preventDefault();
        if(this.validateForm()){
            let info = {
                name: this.state.name.value,
                surname: this.state.lastname.value,
                email: this.state.email.value,
                pass: this.state.pass.value,
            };

            this.props.callBackFromParent('register', info);
        }else{

        }
    }
    componentDidMount() {

    }
    validateForm(){
        const fields = ['name', 'lastname', 'email', 'pass'];
        let check = true;
        fields.forEach((el)=> {
            if(this.state[el].value === ''){
                check = false;
                this.setState({
                    [el]: {
                        value: this.state[el].value,
                        error: true,
                        helperText: 'Cannot be empty!'
                    }
                })
            }else if(this.state[el].value.length < 4){
                check = false;
                this.setState({
                    [el]: {
                        value: this.state[el].value,
                        error: true,
                        helperText: 'Too short!'
                    }
                })
            }
        });
        return check

    }

    render() {
        return (
            <div >
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <IconButton href="/" aria-label="back" color="inherit">
                            <ArrowBack fontSize="large" />
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            Sign up
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Container maxWidth="sm">
                    <Paper style={styles.Paper}>
                        <div style={styles.paper}>
                            <Avatar style={styles.avatar}>
                                <Face fontSize="large"/>
                            </Avatar>
                            <Typography component="h1" variant="h5" style={styles.Typography}>
                                Signing up
                            </Typography>
                            <form noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            error={this.state.name.error}
                                            helperText={this.state.name.helperText}
                                            autoComplete="fname"
                                            name="firstName"
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            autoFocus
                                            onChange={(e) => {this.setState({name:{
                                                    value : e.target.value
                                                }})}}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            error={this.state.lastname.error}
                                            helperText={this.state.lastname.helperText}
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="lname"
                                            onChange={(e) => {this.setState({lastname: {
                                                    value: e.target.value
                                                }})}}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            error={this.state.email.error}
                                            helperText={this.state.email.helperText}
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            onChange={(e) => {this.setState({email: {
                                                    value: e.target.value
                                                }})}}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            error={this.state.pass.error}
                                            helperText={this.state.pass.helperText}
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            onChange={(e) => {this.setState({pass: {
                                                value: e.target.value
                                                }})}}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            onChange={(e) => {this.setState({checkbox: e.target.checked})}}
                                            control={<Checkbox color="primary" />}
                                            label="I want to test this application!"
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    onClick={this.complete}
                                    style={styles.button}
                                    disabled={!this.state.checkbox}
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