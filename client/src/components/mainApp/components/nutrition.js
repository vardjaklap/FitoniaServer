import NutrHistory from './nutritionComponents/nutrHistory';
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import AddBox from '@material-ui/icons/AddBox';
//import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';




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
                            {/*<Grid item xs={10}>*/}
                            {/*    { this.state.page === 1 ?*/}
                            {/*        <Paper style={styles.Paper}>*/}
                            {/*            <Fade in={this.state.page === 1}>*/}
                            {/*                <Grid container>*/}
                            {/*                    <Grid item xs={12} md={6}>*/}
                            {/*                        <div style={{ height: 500 +'px'}}>*/}
                            {/*                            <ResponsiveContainer  width="100%" height="100%">*/}
                            {/*                                <BarChart data={this.state.dataToDisplay}>*/}
                            {/*                                    <XAxis dataKey="name" stroke="teal" />*/}
                            {/*                                    <YAxis domain={[0, 100]} stroke="teal"/>*/}
                            {/*                                    <Bar dataKey="value" fill="#8884d8" barSize={25}*/}
                            {/*                                         background={{ fill: '#eee' }}>*/}
                            {/*                                        {*/}
                            {/*                                            this.state.dataToDisplay.map((entry, index) => (*/}
                            {/*                                                <Cell key={`cell-${index}`} fill={colors[index % 20]}/>*/}
                            {/*                                            ))*/}
                            {/*                                        }*/}
                            {/*                                    </Bar>*/}
                            {/*                                </BarChart>*/}
                            {/*                            </ResponsiveContainer>*/}
                            {/*                        </div>*/}
                            {/*                    </Grid>*/}
                            {/*                    <Grid item xs={12} md={6}>*/}
                            {/*                        <TextField*/}
                            {/*                            id="calories"*/}
                            {/*                            name="calories"*/}
                            {/*                            type="number"*/}
                            {/*                            label="Calories"*/}
                            {/*                            style={styles.textField}*/}
                            {/*                            margin="dense"*/}
                            {/*                            variant="outlined"*/}
                            {/*                            onChange={this.handleChange}*/}
                            {/*                        >*/}
                            {/*                        </TextField>*/}
                            {/*                        <TextField*/}
                            {/*                            id="proteins"*/}
                            {/*                            name="proteins"*/}
                            {/*                            type="number"*/}
                            {/*                            label="Proteins"*/}
                            {/*                            style={styles.textField}*/}
                            {/*                            margin="dense"*/}
                            {/*                            variant="outlined"*/}
                            {/*                            onChange={this.handleChange}></TextField>*/}
                            {/*                        <TextField*/}
                            {/*                            id="fats"*/}
                            {/*                            name="fats"*/}
                            {/*                            type="number"*/}
                            {/*                            label="Fats"*/}
                            {/*                            style={styles.textField}*/}
                            {/*                            margin="dense"*/}
                            {/*                            variant="outlined"*/}
                            {/*                            onChange={this.handleChange}></TextField>*/}
                            {/*                        <TextField*/}
                            {/*                            id="carbohydrates"*/}
                            {/*                            name="carbohydrates"*/}
                            {/*                            type="number"*/}
                            {/*                            label="Carbohydrates"*/}
                            {/*                            style={styles.textField}*/}
                            {/*                            margin="dense"*/}
                            {/*                            variant="outlined"*/}
                            {/*                            onChange={this.handleChange}></TextField>*/}
                            {/*                        <Grid container justify="center" style={styles.cont}>*/}
                            {/*                            <Button variant="contained" style={styles.button} color="primary" onClick={this.handleClick}>*/}
                            {/*                                Add values!*/}
                            {/*                            </Button>*/}
                            {/*                        </Grid>*/}
                            {/*                    </Grid>*/}
                            {/*                </Grid>*/}
                            {/*            </Fade>*/}
                            {/*        </Paper>*/}
                            {/*        : null }*/}
                            {/*</Grid>*/}
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