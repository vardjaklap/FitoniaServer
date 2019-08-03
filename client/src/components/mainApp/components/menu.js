
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DrawerTest from "./layouts/drawer";
import {Link} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";


const styles = {
    grow: {
        flexGrow: 1
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

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: false,
            anchorEl: null
        };
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.handleMenu = this.handleMenu.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    componentDidMount() {

    }
    toggleDrawer = (side, open) => () => {
        this.setState({
            left: open,
        });
    };
    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {

        this.setState({ anchorEl: null });
    };
    handleLogout = () => {
        this.handleClose();
        this.props.logout();
    };

    render() {
        return (
            <section id="Navigation" styles={styles.root}>

                    <Drawer  open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={this.toggleDrawer('left', false)}
                            onKeyDown={this.toggleDrawer('left', false)}
                        >
                            <DrawerTest userData={this.props.userData} selTest={this.props.title}></DrawerTest>
                        </div>
                        <Typography variant="caption" fontWeight="fontWeightLight"  style={{position: "absolute", bottom: 0, margin: 10}}> v. ALPHA 0.0.5</Typography>
                    </Drawer>
                    <AppBar position="static" >
                        <Toolbar>
                            <IconButton color="inherit" aria-label="Menu" style={styles.menuButton} onClick={this.toggleDrawer('left', true)}>
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h5" color="inherit" align="center" style={styles.grow}>
                                {this.props.title}
                            </Typography>
                            <div>
                                <Avatar style={styles.avatar} onClick={this.handleMenu}>H</Avatar>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={this.state.anchorEl}
                                    open={Boolean(this.state.anchorEl)}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem button onClick={this.handleClose} component={Link} to="/app/profile">Profile</MenuItem>
                                    {/*<MenuItem onClick={this.handleClose}>My account</MenuItem>*/}
                                    <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                                </Menu>
                            </div>
                        </Toolbar>
                    </AppBar>
            </section>
        );
    }
}



export default Nav;