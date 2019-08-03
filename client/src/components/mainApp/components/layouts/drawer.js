import {Component} from "react";
// import Drawer from "../menu";
import React from "react";
import red from "@material-ui/core/colors/red";
import {Link} from "react-router-dom";
import orange from "@material-ui/core/colors/orange";
import yellow from "@material-ui/core/colors/yellow";
import teal from "@material-ui/core/es/colors/teal";
import blue from "@material-ui/core/colors/blue";
import indigo from "@material-ui/core/colors/indigo";
import deepPurple from "@material-ui/core/colors/deepPurple";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from "@material-ui/core/ListItemIcon";

import Assessment from '@material-ui/icons/Assessment';
import Gavel from '@material-ui/icons/Gavel';
import Done from '@material-ui/icons/Event';
import Fastfood from '@material-ui/icons/Fastfood';
import Opacity from '@material-ui/icons/Opacity';
import Snooze from '@material-ui/icons/Snooze';
import Spa from '@material-ui/icons/Spa';
import Cloud from '@material-ui/icons/Cloud'
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const styles = {
    name:{
        flexGrow: 1,
        textTransform: 'capitalize'
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    avatarBig: {
        margin: 10,
        width: 60,
        height: 60,
    },
    avatar: {
        margin: 10
    }
}

class DrawerTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selTest: null,
            user: this.props.userData,
            month: ''
        };

    }
    componentDidMount() {
        let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        let month = months[new Date().getMonth()];
        let date = new Date().getDate();
        let  year = new Date().getFullYear();
        this.setState({
            selTest: this.props.selTest,
            month,
            date,
            year
        })
    }
    render() {
        return (
            <div style={{width: 250}}>
                <Avatar style={styles.avatarBig} color="red">{this.state.user.name.charAt(0).toUpperCase()}</Avatar>
                <div style={{marginLeft: 10}}>
                    <Typography variant="h5" color="inherit" style={styles.name}>Welcome,</Typography>
                    <Typography variant="h5" color="inherit" style={styles.name}>
                        {this.state.user.name} {this.state.user.lname}
                    </Typography>
                </div>

                <List>
                    <Grid container justify="center">
                        <Grid item xs={4}>
                            <Cloud style={{color: 'grey', fontSize: '2rem'}}></Cloud>
                            <Box>  19°C</Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box textAlign="center"  fontSize={26}> {this.state.date} </Box>
                            <Box textAlign="center"> {this.state.month}, {this.state.year} </Box>
                        </Grid>
                    </Grid>
                </List>
                <Divider />
                <List>
                    <ListItem button selected={this.state.selTest === "Dashboard"} component={Link} from="" to="/app">
                        <ListItemIcon><Assessment style={{color: red[500]}}></Assessment></ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button  selected={this.state.selTest === "Training"} component={Link} to="/app/training">
                        <ListItemIcon><Gavel style={{color: orange[500]}}></Gavel></ListItemIcon>
                        <ListItemText primary="Training" />
                    </ListItem>
                    <ListItem button  selected={this.state.selTest === "Notepad"} component={Link} to="/app/notepad">
                        <ListItemIcon><Done style={{color: yellow[600]}} ></Done></ListItemIcon>
                        <ListItemText primary="Notepad" />
                    </ListItem>
                    <ListItem button  selected={this.state.selTest === "Nutrition"} component={Link} to="/app/nutrition">
                        <ListItemIcon><Fastfood style={{color: teal[500]}} ></Fastfood></ListItemIcon>
                        <ListItemText primary="Nutrition"  />
                    </ListItem>
                    <ListItem button  selected={this.state.selTest === "Hydration"} component={Link} to="/app/hydration">
                        <ListItemIcon><Opacity style={{color: blue[500]}} ></Opacity></ListItemIcon>
                        <ListItemText primary="Hydration" />
                    </ListItem>
                    <ListItem button  selected={this.state.selTest === "Sleep"} component={Link} to="/app/sleep">
                        <ListItemIcon><Snooze style={{color: indigo[500]}} ></Snooze></ListItemIcon>
                        <ListItemText primary="Sleep" />
                    </ListItem>
                    <ListItem button  selected={this.state.selTest === "Meditation"} component={Link} to="/app/meditation">
                        <ListItemIcon><Spa style={{color: deepPurple[500]}} ></Spa></ListItemIcon>
                        <ListItemText primary="Meditation" />
                    </ListItem>
                </List>
            </div>
        );
    }
}



export default DrawerTest;