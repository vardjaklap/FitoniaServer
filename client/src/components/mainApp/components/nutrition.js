import NutrHistory from './nutritionComponents/nutrHistory';
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import AddBox from '@material-ui/icons/AddBox';
//import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import Fade from '@material-ui/core/Fade';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import FastfoodIcon from '@material-ui/icons/Fastfood';



const colors = ["#e53935", "#fb8c00", "#ffeb3b", "#2196f3", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"];

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
            calories: 0,
            proteins: 0,
            fats: 0,
            carbohydrates: 0,
            dataToDisplay: [],
            dataToSave: [
                {name: 'Calories', value: 0},
                {name: 'Protein', value: 0},
                {name: 'Fats', value: 0},
                {name: 'Carbohydrates', value: 0}
            ],
            checked: false,
            page: 1
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeNav = this.handleChangeNav.bind(this);
        this.sendTheme = this.sendTheme.bind(this);
    }

    componentDidMount() {
        this.setState({
            dataToDisplay: [
                {name: 'Calories', value: 0},
                {name: 'Protein', value: 0},
                {name: 'Fats', value:0},
                {name: 'Carbohydrates', value: 0}
            ],
            checked: true
        })
        this.sendTheme()
    }
    sendTheme(){
        this.props.callBackFromParent("green");
    }
    handleClick(){
        let newCalories = this.state.dataToSave[0].value + (this.state.calories * 1);
        let newProteins = this.state.dataToSave[1].value + (this.state.proteins * 1);
        let newFats = this.state.dataToSave[2].value + (this.state.fats * 1);
        let newCarbo = this.state.dataToSave[3].value + (this.state.carbohydrates * 1);
        console.log(newCalories);
        console.log(newProteins);
        console.log(newFats);
        console.log(newCarbo);
        let updatedData = this.state.dataToSave;
        updatedData[0].value = newCalories;
        updatedData[1].value = newProteins;
        updatedData[2].value = newFats;
        updatedData[3].value = newCarbo;
        this.setState({
            dataToSave: updatedData
        })
        let showData = this.state.dataToDisplay;
        if(updatedData[0].value < 3000){
            showData[0].value = (updatedData[0].value / 30);
        }else{
            showData[0].value = 100;
        }
        if(updatedData[1].value < 165){
            showData[1].value = (updatedData[1].value / 1.65);
        }else{
            showData[1].value = 100;
        }
        if(updatedData[2].value < 60){
            showData[2].value = (updatedData[2].value / 0.6);
        }else{
            showData[2].value = 100;
        }
        if(updatedData[3].value < 250){
            showData[3].value = (updatedData[3].value / 2.5);
        }else{
            showData[3].value = 100;
        }
    }
    handleChange(event){
        let newName = event.target.name;
        let newValue = event.target.value;
        this.setState({
            [newName]: newValue
        })

    }
    handleChangeNav(event, value){
        this.setState({ page: value });
    }
    render() {
        return (
            <Fade in={this.state.checked} >
            <section id="Nutrition">
                    <Grid container justify="center">

                            <Paper  style={{marginTop: 30}}  elevation={1}>
                                { this.state.page === 0 ?
                                    <Fade in={this.state.page === 0}>
                                        <NutrHistory></NutrHistory>
                                    </Fade>
                                    : null }
                            </Paper>
                            <Grid item xs={10}>
                                { this.state.page === 1 ?
                                    <Container>
                                        <Grid container  direction="column"
                                              justify="center"
                                              alignItems="center" style={{height: "80vh"}}>
                                            <Grid item>
                                                <FastfoodIcon style={{fontSize: "300px"}} color="disabled" />
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
                            <BottomNavigationAction label="New" icon={<AddBox />} />
                        </BottomNavigation>
                    </Paper>
            </section>
            </Fade>
        );
    }
}



export default Nutrition;