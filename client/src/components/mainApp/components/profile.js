import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";


const styles = {
    Paper: {
        padding: "20px",
        marginTop: "20px",
        marginBottom: "10px"
    },
    input: {

    },
    button: {
        height: "50px",
        marginBottom: "15px"
    },

};

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            name: {
                value: '',
                complete: false
            },
            lname:{
                value: '',
                complete: false
            },
            email:{
                value: '',
                complete: false
            },
            passOld:{
                value: '',
                complete: false
            },
            passNew:{
                value: '',
                complete: false,
                helperText: "Enter new password if you want to change it"
            },
        };
        this.sendTheme = this.sendTheme.bind(this);
        this.complete = this.complete.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    componentDidMount() {
        console.log(this.props.userData);
        this.sendTheme()
    }
    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            checked: true,
            name:{
                value: nextProps.userData.name
            },
            lname:{
                value: nextProps.userData.lname
            },
            email:{
                value: nextProps.userData.email
            }
        });
    }

    sendTheme(){
        this.props.callBackFromParent("profile");
    }
    complete(e){
        e.preventDefault();
        if(this.validateForm()){
            let info = {
                name: this.state.name.value,
                surname: this.state.lname.value,
                email: this.state.email.value,
                pass: this.state.pass.value,
                passNew: this.state.passNew.value
            };

            this.props.command('updateProfile', info);
        }else{

        }

    }
    validateForm(){
        const fields = ['name', 'lname', 'email', 'pass'];
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
            if(this.state.passNew.value !== '' && this.state.passNew.value.length < 8){
                check = false;
                this.setState({
                    passNew: {
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
            <Fade in={this.state.checked}>
                <section id="Profile">
                    <Container>
                        <Grid container justify="center">
                            <Grid item xs={12}>
                                <Grid container justify="center">
                                    <Grid item xs={12} sm={6}>
                                        <Button variant="contained" color="primary" style={{height: "100px", width: "100%", marginTop: "20px"}} component={Link} to="/app/evaluation">
                                            The Evaluation
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper style={styles.Paper}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <TextField
                                                error={this.state.name.error}
                                                variant="outlined"
                                                required
                                                fullWidth
                                                label="Name"
                                                value={this.state.name.value}
                                                helperText={this.state.name.helperText}
                                                margin="normal"
                                                style={styles.input}
                                                onChange={(e) => {this.setState({name:{
                                                        value : e.target.value
                                                    }})}}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                error={this.state.lname.error}
                                                variant="outlined"
                                                required
                                                fullWidth
                                                label="Last name"
                                                value={this.state.lname.value}
                                                helperText={this.state.lname.helperText}
                                                margin="normal"
                                                style={styles.input}
                                                onChange={(e) => {this.setState({lname:{
                                                        value : e.target.value
                                                    }})}}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                error={this.state.email.error}
                                                variant="outlined"
                                                required
                                                fullWidth
                                                label="Email"
                                                value={this.state.email.value}
                                                helperText={this.state.email.helperText}
                                                margin="normal"
                                                style={styles.input}
                                                onChange={(e) => {this.setState({email:{
                                                        value: e.target.value
                                                    }})}}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                error={this.state.passNew.error}
                                                variant="outlined"
                                                required
                                                fullWidth
                                                name="password"
                                                label="New password"
                                                type="password"
                                                id="passwordNew"
                                                margin="normal"
                                                helperText={this.state.passNew.helperText}
                                                autoComplete="password"
                                                onChange={(e) => {this.setState({passNew:{
                                                        value: e.target.value
                                                    }})}}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                helperText="Enter your current password to make changes"
                                                variant="outlined"
                                                required
                                                fullWidth
                                                name="password"
                                                label="Password"
                                                type="password"
                                                id="password"
                                                margin="normal"
                                                autoComplete="current-password"
                                                onChange={(e) => {
                                                    this.setState({pass:{
                                                        value : e.target.value
                                                    }})
                                                if(e.target.value.length > 7){
                                                    this.setState({
                                                        checkbox: true
                                                    })
                                                }else{
                                                    this.setState({
                                                        checkbox: false
                                                    })
                                                }
                                                }
                                                }
                                            />
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
                                            Save changes
                                        </Button>
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