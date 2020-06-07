import Grid from '@material-ui/core/Grid';
import {Component} from "react";
import React from "react";
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import { ThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import amber from "@material-ui/core/colors/amber";
import green from "@material-ui/core/colors/green";
import grey from "@material-ui/core/colors/grey";
import Grow from "@material-ui/core/Grow";
import { Socket} from '../../../../socket'

class NutrMain extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            dataToDisplay: {
                cal: 0,
                fat: 0,
                carb: 0,
                prot: 0
            },
            dailyProgress:{
                cal: 0,
                fat: 0,
                carb: 0,
                prot: 0
            },
            calInput: "",
            fatInput: "",
            carbInput: "",
            protInput: ""
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleCal = this.handleCal.bind(this);
        this.handleFat = this.handleFat.bind(this);
        this.handleProt = this.handleProt.bind(this);
        this.handleCarb = this.handleCarb.bind(this);
        Socket.on('getNutrInfo', (data) => {
            let obj = {
                cal: data.cal,
                fat: data.fat,
                carb: data.carb,
                prot: data.prot
            };
            this.checkProgress(obj)
        })
    }
    componentDidMount() {
        this._isMounted = true;
        Socket.emit("getNutr", 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    checkProgress(data){
        let progCal = Math.round((data.cal / 2000) * 100);
        let progFat = Math.round((data.fat / 60) * 100);
        let progProt = Math.round((data.prot / 100) * 100);
        let progCarb = Math.round((data.carb / 55) * 100);

        if(progCal > 100){
            progCal = 100;
        }
        if(progFat > 100){
            progFat = 100;
        }
        if(progProt > 100){
            progProt = 100;
        }
        if(progCarb > 100){
            progCarb = 100;
        }
        if (this._isMounted) {
            setTimeout(() => {
                this.setState({
                    dataToDisplay: data,
                    dailyProgress: {
                        cal: progCal,
                        fat: progFat,
                        carb: progCarb,
                        prot: progProt
                    }
                })

            }, 200);
        }

    }
    handleInput(event){
        this.setState({
                [event.target.name]: event.target.value
        })
    }
    handleCal(){
        if(this.state.calInput !== ""){
            let newValue = this.state.dataToDisplay.cal + parseInt(this.state.calInput);
            this.props.command("updateValue", {"cal": newValue});
            this.setState({
                calInput: ""
            })
            Socket.emit("getNutr", 0);
        }
    }
    handleFat(){
        if(this.state.fatInput !== ""){
            let newValue = this.state.dataToDisplay.fat + parseInt(this.state.fatInput);
            this.props.command("updateValue", {"fat": newValue});
            this.setState({
                fatInput: ""
            })
            Socket.emit("getNutr", 0);
        }
    }
    handleProt(){
        if(this.state.protInput !== ""){
            let newValue = this.state.dataToDisplay.prot + parseInt(this.state.protInput);
            this.props.command("updateValue", {"prot": newValue});
            this.setState({
                protInput: ""
            })
            Socket.emit("getNutr", 0);
        }
    }
    handleCarb(){
        if(this.state.carbInput !== ""){
            let newValue = this.state.dataToDisplay.carb + parseInt(this.state.carbInput);
            this.props.command("updateValue", {"carb": newValue});
            this.setState({
                carbInput: ""
            })
            Socket.emit("getNutr", 0);
        }
    }

    render() {
        return (
            <section id="SleepHist" >
                <Grid container style={{margin: "25px 0 60px"}} justify="space-evenly" alignItems="stretch" spacing={2}>
                    <Grid item sm={6} md={4} lg={3}>
                        <ThemeProvider
                            theme={createMuiTheme({
                                palette: {
                                    primary: red,
                                    secondary: {
                                        main: grey.A100
                                    }
                                },
                            })}
                        >
                            <Grow in unmountOnExit mountOnEnter>
                            <Card style={{maxWidth: 345, paddingTop: 15, height: "100%"}}>
                                <Box position="relative" display="inline-flex">
                                    <div >
                                        <CircularProgress
                                            variant="static"
                                            value={100}
                                            color="secondary"
                                            size={150} thickness={4}
                                        />
                                        <CircularProgress
                                            style={{position: 'absolute',
                                                left: 0,}}
                                            variant="static" value={this.state.dailyProgress.cal}   size={150} thickness={4} color="primary"
                                        />
                                    </div>
                                    <Box
                                        top={0}
                                        left={0}
                                        bottom={0}
                                        right={0}
                                        position="absolute"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Typography variant="h6" component="div" color="textSecondary">{this.state.dataToDisplay.cal}/2000kc</Typography>
                                    </Box>
                                </Box>
                                <CardContent style={{textAlign: "left"}}>
                                    <Typography gutterBottom variant="h4" component="h2">
                                        Calories
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" component="p" >
                                        Calories are main energy blocks for the body. Healthy human being needs up to 2,000 calories per day.
                                    </Typography>
                                    <TextField value={this.state.calInput  || ''} id="calInput" name="calInput" label="Calories" variant="outlined" type="number" style={{marginTop: 10}}  onChange={this.handleInput}/>
                                </CardContent>
                                <CardActions >
                                    <Button color="primary" onClick={this.handleCal}>
                                        Add
                                    </Button>
                                </CardActions>
                            </Card>
                            </Grow>
                        </ThemeProvider>
                    </Grid>

                    <Grid item sm={6} md={4} lg={3}>
                        <ThemeProvider
                            theme={createMuiTheme({
                                palette: {
                                    primary: amber,
                                    secondary: {
                                        main: grey.A100
                                    }
                                },
                            })}
                        >
                            <Grow in unmountOnExit mountOnEnter>
                            <Card style={{maxWidth: 345, paddingTop: 15, height: "100%"}}>
                                <Box position="relative" display="inline-flex">
                                    <div >
                                        <CircularProgress
                                            variant="static"
                                            value={100}
                                            color="secondary"
                                            size={150} thickness={4}
                                        />
                                        <CircularProgress
                                            style={{position: 'absolute',
                                                left: 0,}}

                                            variant="static" value={this.state.dailyProgress.fat}   size={150} thickness={4} color="primary"
                                        />
                                    </div>
                                    <Box
                                        top={0}
                                        left={0}
                                        bottom={0}
                                        right={0}
                                        position="absolute"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Typography variant="h6" component="div" color="textSecondary">{this.state.dataToDisplay.fat}/60g</Typography>
                                    </Box>
                                </Box>
                                <CardContent style={{textAlign: "left"}}>
                                    <Typography gutterBottom variant="h4" component="h2">
                                        Fats
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" component="p">
                                        Fats are needed for maintenance of cell membranes and to maintain a stable body temperature.
                                    </Typography>
                                    <TextField value={this.state.fatInput  || ''} id="fatInput" name="fatInput" label="Fats" variant="outlined" type="number" style={{marginTop: 10}}  onChange={this.handleInput}/>
                                </CardContent>
                                <CardActions>
                                    <Button color="primary"  onClick={this.handleFat}>
                                        Add
                                    </Button>
                                </CardActions>
                            </Card>
                            </Grow>
                        </ThemeProvider>
                    </Grid>

                    <Grid item sm={6} md={4} lg={3}>
                        <ThemeProvider
                            theme={createMuiTheme({
                                palette: {
                                    primary: green,
                                    secondary: {
                                        main: grey.A100
                                    }
                                },
                            })}
                        >
                            <Grow in unmountOnExit mountOnEnter>
                                <Card style={{maxWidth: 345, paddingTop: 15, height: "100%"}}>
                                    <Box position="relative" display="inline-flex">
                                        <div >
                                            <CircularProgress
                                                variant="static"
                                                value={100}
                                                color="secondary"
                                                size={150} thickness={4}
                                            />
                                            <CircularProgress
                                                style={{position: 'absolute',
                                                    left: 0,}}
                                                variant="static" value={this.state.dailyProgress.carb}  size={150} thickness={4} color="primary"
                                            />
                                        </div>
                                        <Box
                                            top={0}
                                            left={0}
                                            bottom={0}
                                            right={0}
                                            position="absolute"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Typography variant="h6" component="div" color="textSecondary">{this.state.dataToDisplay.carb}/55g</Typography>
                                        </Box>
                                    </Box>
                                    <CardContent style={{textAlign: "left"}}>
                                        <Typography gutterBottom variant="h4" component="h2">
                                            Carbohydrates
                                        </Typography>
                                        <Typography variant="body1" color="textSecondary" component="p">
                                            Carbohydrates are compounds made up of types of sugar. They are essential to every living organism.
                                        </Typography>
                                        <TextField value={this.state.carbInput   || ''} id="carbInput" name="carbInput" label="Carbohydrates" variant="outlined" type="number" style={{marginTop: 10}}  onChange={this.handleInput}/>
                                    </CardContent>
                                    <CardActions>
                                        <Button color="primary"  onClick={this.handleCarb}>
                                            Add
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grow>
                        </ThemeProvider>
                    </Grid>

                    <Grid item sm={6} md={4} lg={3}>
                        <ThemeProvider
                            theme={createMuiTheme({
                                palette: {
                                    primary: blue,
                                    secondary: {
                                        main: grey.A100
                                    }
                                },
                            })}
                        >
                            <Grow in unmountOnExit mountOnEnter>
                                <Card style={{maxWidth: 345, paddingTop: 15, height: "100%"}}>
                                    <Box position="relative" display="inline-flex">
                                        <div >
                                            <CircularProgress
                                                variant="static"
                                                value={100}
                                                color="secondary"
                                                size={150} thickness={4}
                                            />
                                            <CircularProgress
                                                style={{position: 'absolute',
                                                    left: 0,}}
                                                variant="static" value={this.state.dailyProgress.prot}  size={150} thickness={4} color="primary"
                                            />
                                        </div>
                                        <Box
                                            top={0}
                                            left={0}
                                            bottom={0}
                                            right={0}
                                            position="absolute"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Typography variant="h6" component="div" color="textSecondary">{this.state.dataToDisplay.prot}/50g</Typography>
                                        </Box>
                                    </Box>
                                    <CardContent style={{textAlign: "left"}}>
                                        <Typography gutterBottom variant="h4" component="h2">
                                            Proteins
                                        </Typography>
                                        <Typography variant="body1" color="textSecondary" component="p">
                                            Proteins are organic compounds that consist of amino acids joined by peptide bonds.
                                        </Typography>
                                        <TextField value={this.state.protInput   || ''} id="protInput" name="protInput" label="Proteins" variant="outlined" type="number" style={{marginTop: 10}}  onChange={this.handleInput}/>
                                    </CardContent>
                                    <CardActions>
                                        <Button color="primary"  onClick={this.handleProt}>
                                            Add
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grow>
                        </ThemeProvider>
                    </Grid>
                </Grid>
            </section>
        );
    }
}



export default NutrMain;