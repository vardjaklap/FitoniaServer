import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import {  pink } from '@material-ui/core/colors';
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from '@material-ui/icons/ArrowBack'

const styles = {
    contTyp: {
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

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        };
        this.complete = this.complete.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.loginAsTestUser = this.loginAsTestUser.bind(this);

    }
    complete(e){
        e.preventDefault();
        if(this.validateForm()){
            let info = {
                email: this.state.email.value,
                pass: this.state.pass.value
            };
            this.props.callBackFromParent('login', info);
        }
    }
    loginAsTestUser(){
        let info = {
            email: "testing_account@somemail.com",
            pass: "testingaccount"
        };
        this.props.callBackFromParent('login', info);
    }
    validateForm(){
        const fields = ['email', 'pass'];
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

    render(){ return (
        <div>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <IconButton href="/" aria-label="back" color="inherit">
                        <ArrowBack fontSize="large" />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Sign in
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="sm">
                <Paper style={styles.Paper}>
                    <div style={styles.contTyp}>
                        <Avatar style={styles.avatar}>
                            <AssignmentInd fontSize="large"/>
                        </Avatar>
                        <Typography component="h1" variant="h5" style={styles.Typography}>
                            Log in
                        </Typography>
                    </div>
                    <form>
                        <Grid container spacing={2}>
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
                                {/*<FormControlLabel*/}
                                {/*    control={<Checkbox value="allowExtraEmails" color="primary" />}*/}
                                {/*    label="Keep me logged in"*/}
                                {/*/>*/}
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.complete}
                            style={styles.button}
                        >
                            Sign In
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="/register" variant="body2">
                                    Don't have an account? Sign up
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Button  variant="contained" color="primary" onClick={this.loginAsTestUser}>
                                    Sign in with existing test account
                                </Button>
                            </Grid>
                        </Grid>

                    </form>
                </Paper>
            </Container>
        </div>
    );}
}
export default Login;