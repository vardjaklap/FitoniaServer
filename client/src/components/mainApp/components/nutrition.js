import NutrHistory from './nutritionComponents/nutrHistory';
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import Fade from '@material-ui/core/Fade';
import Container from "@material-ui/core/Container";
import EqualizerIcon from '@material-ui/icons/Equalizer';
import Grow from "@material-ui/core/Grow";
import KitchenIcon from '@material-ui/icons/Kitchen';
import FoodBase from "./nutritionComponents/foodBase";
import NutrMain from "./nutritionComponents/nutrMain"

const styles = {
    Paper: {
        padding: "20px",
        marginTop: "20px",
        marginBottom: "10px"
    },
    footer: {
        position: "fixed",
        bottom: 0,
        width: "100%"
    },
    textField: {
        width: "40%",
        margin: "5%",

    },
    button: {
        width: "50%",
        height: "10vh"
    },
    cont: {
        marginTop: 50
    }

}

class Nutrition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            page: 1
        };
        this.handleChangeNav = this.handleChangeNav.bind(this);
        this.sendTheme = this.sendTheme.bind(this);
    }

    componentDidMount() {
        this.setState({
            checked: true
        })
        this.sendTheme()
    }
    sendTheme(){
        this.props.callBackFromParent("green");
    }
    handleChangeNav(event, value){
        this.setState({ page: value });
    }
    render() {
        return (
            <Fade in={this.state.checked} >
            <section id="Nutrition">
                    <Grid container justifyContent="center" style={{paddingTop: "20px"}}>
                        <Grid item xs={10}>
                            { this.state.page === 0 ?
                                <Fade in={this.state.page === 0}>
                                    <NutrHistory> </NutrHistory>
                                </Fade>
                                : null }
                        </Grid>
                            <Grid item xs={10}>
                                { this.state.page === 1 ?
                                    <NutrMain command={this.props.command}/>
                                    : null }

                                { this.state.page === 2 ?
                                    <Container >
                                        <Grow in={this.state.page === 2} unmountOnExit mountOnEnter>
                                            <FoodBase/>
                                        </Grow>
                                    </Container>
                                    : null }
                            </Grid>
                        </Grid>
                    <Paper style={styles.footer}>
                        <BottomNavigation
                            value={this.state.page}
                            onChange={this.handleChangeNav}
                            showLabels
                        >
                            <BottomNavigationAction label="Recent" icon={<RestoreIcon />} />
                            <BottomNavigationAction label="Today" icon={<EqualizerIcon />} />
                            <BottomNavigationAction label="Search" icon={<KitchenIcon />} />

                        </BottomNavigation>
                    </Paper>
            </section>
            </Fade>
        );
    }
}



export default Nutrition;