import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import AddBox from '@material-ui/icons/AddBox';
import AddIcon from '@material-ui/icons/Add';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import WaterHistory from './waterComponents/waterHistory'
import { LinearProgress } from '@material-ui/core';
import amber from '@material-ui/core/colors/amber'
import Container from "@material-ui/core/Container";
import Opacity from '@material-ui/icons/Opacity';

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
        width: "35%",
        marginRight: '15px'
    },
    button: {
        width: "35%",
        height: "10vh"
    },
}

class Hydration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            waterAmount: 0,
            color: '#ffca28'
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeNav = this.handleChangeNav.bind(this);
        this.sendTheme = this.sendTheme.bind(this);
        this.addWaterPercentage = this.addWaterPercentage.bind(this);
        this.handle100 = this.handle100.bind(this);
        this.handle250 = this.handle250.bind(this);
        this.handle500 = this.handle500.bind(this);
        this.handle1L = this.handle1L.bind(this);
        this.handleCustom = this.handleCustom.bind(this);
        this.handleCustomChange = this.handleCustomChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            checked: true,
            page: 0,
            waterAmount: 0
        });
        this.sendTheme();
    }
    componentWillReceiveProps(nextProps, nextContext) {
        let newPercent;
        if(Math.round(nextProps.userData.dateData.water.amount * 100 / 3000) > 100){
            newPercent = 100;
        }else{
            newPercent = Math.round(nextProps.userData.dateData.water.amount * 100 / 3000);
        }
        this.setState({
            waterAmount: nextProps.userData.dateData.water.amount,
            percent: newPercent
        });
    }

    sendTheme(){
        this.props.callBackFromParent("blue");
    }
    handleClick(){

    }
    addWaterPercentage(amount){
        let addedWater = Math.round((amount * 100) / 3000);
        let newValue;
        if(this.state.percent + addedWater > 100){
          newValue = 100;
        }else{
            newValue = this.state.percent + addedWater
        }
        this.setState({
            percent: newValue,
            waterAmount: this.state.waterAmount + amount
        });
        setTimeout(() => {
            this.props.command("updateValue", {"water": this.state.waterAmount});
        }, 1)


    }
    handle100(){
        this.addWaterPercentage(100);
    }
    handle250(){
        this.addWaterPercentage(250);
    }
    handle500(){
        this.addWaterPercentage(500);
    }
    handle1L(){
        this.addWaterPercentage(1000);
    }
    handleCustomChange(event){
        let newValue = event.target.value;
        this.setState({
            customChange: newValue
        })
    }
    handleCustom(){
        if(this.state.customChange === ""){

        }else{
            this.addWaterPercentage(parseInt(this.state.customChange));
            this.setState({
                customChange: 0
            })
        }
    }
    handleChangeNav(event, value){
        this.setState({ page: value });
    }
    render() {
        return (
            <Fade in={this.state.checked}>
                <section id="Water" >
                        <Grid container justifyContent="center">
                            { this.state.page === 0 ?
                                <Fade in={this.state.page === 0} >
                                    <Grid item xs={12} sm={10} md={8}>
                                        <Paper style={styles.Paper}>
                                            <Grid container justifyContent="center" style={{padding: "25px 0"}}>
                                                <Grid item xs={12} md={6}>
                                                    <Typography style={{margin: '80px 0', fontSize: '3rem'}}>
                                                        {this.state.percent}%
                                                    </Typography>
                                                    <LinearProgress variant="determinate" value={this.state.percent} style={{height: '30px', colorSecondary: amber[400]}} color={'primary'}>
                                                    </LinearProgress>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <Grid container justifyContent="center" alignItems="center">
                                                        <Grid container justifyContent="space-around" style={{marginTop: 20}}>
                                                            <Button variant="contained" size="large" color="primary" style={styles.button} onClick={this.handle100}>
                                                                100ML
                                                            </Button>
                                                            <Button variant="contained" size="large" color="primary" style={styles.button} onClick={this.handle250}>
                                                                250ML
                                                            </Button>
                                                        </Grid>
                                                        <Grid container  justifyContent="space-around" style={{marginTop: 50}}>
                                                            <Button variant="contained" size="large" color="primary" style={styles.button} onClick={this.handle500}>
                                                                500ML
                                                            </Button>
                                                            <Button variant="contained" size="large" color="primary" style={styles.button} onClick={this.handle1L}>
                                                                1L
                                                            </Button>
                                                        </Grid>
                                                        <Grid container  justifyContent="center" style={{marginTop: 30}}>
                                                            <TextField
                                                                id="waterMl"
                                                                name="ml"
                                                                type="number"
                                                                label="Enter ml"
                                                                style={styles.textField}
                                                                margin="dense"
                                                                variant="outlined"
                                                                onChange={this.handleCustomChange}
                                                            ></TextField>
                                                            <Fab color="primary" aria-label="Add" onClick={this.handleCustom}>
                                                                <AddIcon />
                                                            </Fab>
                                                        </Grid>
                                                        {/*<Grid container  justifyContent="space-around">*/}
                                                        {/*    <Fab color="primary" aria-label="Add" onClick={this.handleCustom}>*/}
                                                        {/*        <AddIcon />*/}
                                                        {/*    </Fab>*/}
                                                        {/*</Grid>*/}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                </Fade>
                                : null }
                            { this.state.page === 1 ?
                                <Fade in={this.state.page === 1}>
                                    <div>
                                        <Container>
                                            <Grid container  direction="column"
                                                  justifyContent="center"
                                                  alignItems="center" style={{height: "80vh"}}>
                                                <Grid item>
                                                    <Opacity style={{fontSize: "300px"}} color="disabled" />
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="h2" style={{color: "grey"}}>
                                                        I am not finished yet.
                                                    </Typography>
                                                    <Typography variant="h2" style={{color: "grey"}}>
                                                        Come check next time ;)
                                                    </Typography>
                                                </Grid>

                                            </Grid>
                                        </Container>
                                    </div>
                                </Fade>
                                : null }
                        </Grid>
                        <Paper style={styles.footer}>
                            <BottomNavigation
                                value={this.state.page}
                                onChange={this.handleChangeNav}
                                showLabels>
                                <BottomNavigationAction label="Add" icon={<AddBox />} />
                                <BottomNavigationAction label="Recent" icon={<RestoreIcon />} />
                            </BottomNavigation>
                        </Paper>
                </section>
            </Fade>
        );
    }
}



export default Hydration;