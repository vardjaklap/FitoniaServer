import {Component} from "react";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import SvgIcon from "@material-ui/core/SvgIcon";
import green from "@material-ui/core/colors/green";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Grow from "@material-ui/core/Grow";
import {Socket} from "../../../../socket";


class FoodBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogOpen: false,
            searchResults: [{
                id: 0,
                name: "Chicken parmesan",
                type: "Meat",
                ingredients: ["Chicken", "Cheese", "Tomato", "Breading"],
                nutrValues:{
                    cal: 350,
                    fat: 24,
                    carb: 30,
                    prot: 35
                },
                img: "https://www.afamilyfeast.com/wp-content/uploads/2018/01/chicken-parmesan-3.jpg"

            },{
                id: 1,
                name: "Banana split",
                type: "Dessert",
                ingredients: ["Banana", "Ice cream", "Berries", "Pineapple"],
                nutrValues:{
                    cal: 800,
                    fat: 5,
                    carb: 67,
                    prot: 1
                },
                img: "https://i0.wp.com/fountainavenuekitchen.com/wp-content/uploads/2017/07/breakfast-banana-split1.jpg?resize=1170%2C780&ssl=1"


            },{
                id: 2,
                name: "Steamed vegetables",
                type: "Vegetables",
                ingredients: ["Broccoli", "Cauliflower", "Carrots", "Peppers"],
                nutrValues:{
                    cal: 250,
                    fat: 3,
                    carb: 3,
                    prot: 5
                },
                img: "https://images-gmi-pmc.edge-generalmills.com/5bce0f7f-53dc-4fe1-9331-dfb2fe038c69.jpg"
            }],
            selectedFood:{
                id: 0,
                name: "Not chosen",
                nutrValues:{
                    cal: 0,
                    fat: 0,
                    carb: 0,
                    prot: 0
                }
            }
        };
    }
    addFood = (value) => {
        this.setState({
            dialogOpen: true,
            selectedFood: value
        })
    }
    handleClose = () => {
        this.setState({
            dialogOpen: false,
        })
    };
    addFoodEntry(item){
        Socket.emit("addFoodEntry", item);
        this.handleClose();
    }
    componentDidMount() {
        this.setState({
            dataToDisplay: [
            ],
            checked: true
        })
    }
    render() {
        return (
            <section id="foodBase">
                <Grid container justifyContent="center" scroll="body">
                    {/*<Grid item xs={12} sm={10}>*/}
                    {/*    <Grid container justifyContent="space-evenly">*/}
                    {/*        <Tooltip title="Meat" arrow>*/}
                    {/*            <div className="box">*/}
                    {/*                <IconButton style={{height: "75px", width: "75px"}} color="primary">*/}
                    {/*                    <SvgIcon style={{height: "50px", width: "50px"}}>*/}
                    {/*                        <path d="M20.16 12.73C22.93 9.96 22.57 5.26 19.09 3C17.08 1.67 14.39 1.66 12.36 2.97C10.6 4.1 9.63 5.86 9.46 7.68C9.33 9 8.83 10.23 7.91 11.15L7.88 11.18C6.72 12.34 6.72 14.11 7.81 15.19L8.8 16.18C9.89 17.27 11.66 17.27 12.75 16.18C13.72 15.21 15 14.68 16.39 14.53C17.76 14.38 19.1 13.78 20.16 12.73M6.26 19.86C6.53 20.42 6.44 21.1 5.97 21.56C5.39 22.15 4.44 22.15 3.85 21.56C3.58 21.29 3.44 20.94 3.42 20.58C3.06 20.56 2.71 20.42 2.44 20.15C1.85 19.56 1.85 18.61 2.44 18.03C2.9 17.57 3.59 17.47 4.14 17.74L6.62 15.31C6.76 15.5 6.92 15.72 7.1 15.9L8.09 16.89C8.3 17.09 8.5 17.26 8.76 17.41L6.26 19.86Z" ></path>*/}
                    {/*                    </SvgIcon>*/}
                    {/*                </IconButton>*/}
                    {/*            </div>*/}
                    {/*        </Tooltip>*/}
                    {/*        <Tooltip title="Fish" arrow>*/}
                    {/*            <div className="box">*/}
                    {/*                <IconButton style={{height: "75px", width: "75px"}} color="primary">*/}
                    {/*                    <SvgIcon style={{height: "50px", width: "50px"}}>*/}
                    {/*                        <path d="M12,20L12.76,17C9.5,16.79 6.59,15.4 5.75,13.58C5.66,14.06 5.53,14.5 5.33,14.83C4.67,16 3.33,16 2,16C3.1,16 3.5,14.43 3.5,12.5C3.5,10.57 3.1,9 2,9C3.33,9 4.67,9 5.33,10.17C5.53,10.5 5.66,10.94 5.75,11.42C6.4,10 8.32,8.85 10.66,8.32L9,5C11,5 13,5 14.33,5.67C15.46,6.23 16.11,7.27 16.69,8.38C19.61,9.08 22,10.66 22,12.5C22,14.38 19.5,16 16.5,16.66C15.67,17.76 14.86,18.78 14.17,19.33C13.33,20 12.67,20 12,20M17,11A1,1 0 0,0 16,12A1,1 0 0,0 17,13A1,1 0 0,0 18,12A1,1 0 0,0 17,11Z" />*/}
                    {/*                    </SvgIcon>*/}
                    {/*                </IconButton>*/}
                    {/*            </div>*/}
                    {/*        </Tooltip>*/}
                    {/*        <Tooltip title="Starch" arrow>*/}
                    {/*            <div className="box">*/}
                    {/*                <IconButton style={{height: "75px", width: "75px"}} color="primary">*/}
                    {/*                    <SvgIcon style={{height: "50px", width: "50px"}}>*/}
                    {/*                        <path d="M22,11H19.7C19.4,9.9 18.9,8.8 18.2,8L21.6,2.6L19.9,1.5L16.7,6.6C16.3,6.3 16,6.1 15.5,5.9L16.4,2.3L14.5,1.8L13.7,5.2C13.1,5.1 12.6,5 12,5C8.3,5 5.2,7.6 4.3,11H2C2,15.1 4.5,18.6 8,20.2V22H16V20.2C19.5,18.6 22,15.1 22,11M12,7C14.6,7 16.8,8.7 17.6,11H6.4C7.2,8.7 9.4,7 12,7Z" />*/}
                    {/*                    </SvgIcon>*/}
                    {/*                </IconButton>*/}
                    {/*            </div>*/}
                    {/*        </Tooltip>*/}
                    {/*        <Tooltip title="Dessert" arrow>*/}
                    {/*            <div className="box">*/}
                    {/*                <IconButton style={{height: "75px", width: "75px"}} color="primary">*/}
                    {/*                    <SvgIcon style={{height: "50px", width: "50px"}}>*/}
                    {/*                        <path d="M17.5 6.05C17.25 3.22 14.89 1 12 1S6.75 3.22 6.5 6.05C5.09 6.28 4 7.5 4 9C4 10.66 5.34 12 7 12L12 22L17 12C18.66 12 20 10.66 20 9C20 7.5 18.91 6.28 17.5 6.05M12 17.53L8.89 11.31C8.95 11.26 9 11.21 9.08 11.16C9.93 11.69 10.93 12 12 12S14.07 11.69 14.92 11.16C15 11.21 15.05 11.26 15.11 11.31L12 17.53Z"/>*/}
                    {/*                    </SvgIcon>*/}
                    {/*                </IconButton>*/}
                    {/*            </div>*/}
                    {/*        </Tooltip>*/}
                    {/*        <Tooltip title="Veggies" arrow>*/}
                    {/*            <div className="box">*/}
                    {/*                <IconButton style={{height: "75px", width: "75px"}} color="primary">*/}
                    {/*                    <SvgIcon style={{height: "50px", width: "50px"}}>*/}
                    {/*                        <path d="M11,12H8.82C9.62,12.5 10.35,13.07 11,13.68V12M7,11C7.27,5.88 9.37,2 12,2C14.66,2 16.77,5.94 17,11.12C18.5,10.43 20.17,10 22,10C16.25,12.57 18.25,22 12,22C6,22 7.93,12.57 2,10C3.82,10 5.5,10.4 7,11M11,11V9H8.24L8.03,11H11M11,8V6H9.05C8.8,6.6 8.6,7.27 8.43,8H11M11,5V3.3C10.45,3.63 9.95,4.22 9.5,5H11M12,3V5H13V6H12V8H14V9H12V11H15V12H12V14H14V15H12.23C13.42,16.45 14.15,18 14.32,19.23C15.31,17.56 15.96,14.84 16,11.76C15.94,7 14.13,3 12,3Z"/>*/}
                    {/*                    </SvgIcon>*/}
                    {/*                </IconButton>*/}
                    {/*            </div>*/}
                    {/*        </Tooltip>*/}
                    {/*        <Tooltip title="Beverages" arrow>*/}
                    {/*            <div className="box">*/}
                    {/*                <IconButton style={{height: "75px", width: "75px"}} color="primary">*/}
                    {/*                    <EmojiFoodBeverageIcon style={{height: "50px", width: "50px"}}/>*/}
                    {/*                </IconButton>*/}
                    {/*            </div>*/}
                    {/*        </Tooltip>*/}
                    {/*    </Grid>*/}
                    {/*</Grid>*/}
                    <Grid item xs={12} md={6} style={{marginTop: "25px" }}>
                        <Paper style={{padding: "15px 0" }}>
                            <InputBase
                                placeholder="Search food items..."
                                inputProps={{ 'aria-label': 'Search food items' }}
                                style={{width: "85%", }}
                            />
                            <IconButton color="primary" aria-label="directions">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Grid>
                    <Grid item id="searchResults" style={{margin: "40px 0 70px"}}>
                        <Grid container justifyContent="space-evenly" spacing={3} alignItems="stretch" >
                            {this.state.searchResults.map((item) =>
                                <Grid key={item.id} item xs={12} sm={5} md={4}>
                                    <Grow in unmountOnExit mountOnEnter>
                                    <Card style={{textAlign: "left", height: "100%", display: "flex",flexDirection: "column"}} >
                                        <CardHeader
                                            avatar={
                                                <Avatar aria-label="recipe" style={{backgroundColor: green[500]}}>
                                                    <SvgIcon >
                                                        <path d="M20.16 12.73C22.93 9.96 22.57 5.26 19.09 3C17.08 1.67 14.39 1.66 12.36 2.97C10.6 4.1 9.63 5.86 9.46 7.68C9.33 9 8.83 10.23 7.91 11.15L7.88 11.18C6.72 12.34 6.72 14.11 7.81 15.19L8.8 16.18C9.89 17.27 11.66 17.27 12.75 16.18C13.72 15.21 15 14.68 16.39 14.53C17.76 14.38 19.1 13.78 20.16 12.73M6.26 19.86C6.53 20.42 6.44 21.1 5.97 21.56C5.39 22.15 4.44 22.15 3.85 21.56C3.58 21.29 3.44 20.94 3.42 20.58C3.06 20.56 2.71 20.42 2.44 20.15C1.85 19.56 1.85 18.61 2.44 18.03C2.9 17.57 3.59 17.47 4.14 17.74L6.62 15.31C6.76 15.5 6.92 15.72 7.1 15.9L8.09 16.89C8.3 17.09 8.5 17.26 8.76 17.41L6.26 19.86Z" ></path>
                                                    </SvgIcon>
                                                </Avatar>
                                            }
                                            title={item.name}
                                            subheader={item.type}
                                        />
                                        <CardMedia
                                            image={item.img}
                                            title={item.name}
                                            style={{height: "150px"}}
                                        />
                                        <CardContent style={{paddingBottom: 0}}>
                                            <Typography variant="subtitle1">
                                                Nutritional values
                                            </Typography>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Chip label={item.nutrValues.cal} variant="outlined" style={{borderColor: "#e53935", color: "#e53935"}}/>
                                                </Grid>
                                                <Grid item>
                                                    <Chip label={item.nutrValues.fat}  variant="outlined" style={{borderColor: "#fb8c00", color: "#fb8c00"}}/>
                                                </Grid>
                                                <Grid item>
                                                    <Chip label={item.nutrValues.carb} variant="outlined" style={{borderColor: "#4caf50", color: "#4caf50"}}/>
                                                </Grid>
                                                <Grid item>
                                                    <Chip label={item.nutrValues.prot}  variant="outlined" style={{borderColor: "#2196f3", color: "#2196f3"}}/>
                                                </Grid>
                                            </Grid>
                                            <Typography variant="subtitle1">
                                                Ingredients
                                            </Typography>
                                            <Grid container spacing={1}>
                                                {item.ingredients.map((ingr) =>
                                                    <Grid item key={ingr}>
                                                        <Chip size="small" label={ingr} />
                                                    </Grid>
                                                )}
                                            </Grid>
                                        </CardContent>
                                        <CardActions style={{marginTop: "auto"}}>
                                            <Button color="primary" onClick={() => this.addFood(item)}>Add</Button>
                                            {/*<IconButton aria-label="add to favorites" style={{marginLeft: 'auto'}}>*/}
                                            {/*    <FavoriteIcon />*/}
                                            {/*</IconButton>*/}
                                        </CardActions>
                                        </Card>
                                    </Grow>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Grid>

                <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={this.state.dialogOpen} style={{padding: "30px"}}>
                    <DialogTitle id="simple-dialog-title">Log your food</DialogTitle>
                    <DialogContent dividers>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography variant="h3" style={{textAlign: "center"}}>
                                    {this.state.selectedFood.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} style={{color: "#e53935"}}>
                                <Typography variant="h4" style={{textAlign: "center"}}>
                                    {this.state.selectedFood.nutrValues.cal}
                                </Typography>
                                <Typography variant="h6" gutterBottom style={{textAlign: "center"}}>
                                    Calories
                                </Typography>
                            </Grid>
                            <Grid item xs={6} style={{color: "#fb8c00"}}>
                                <Typography variant="h4" style={{textAlign: "center"}}>
                                    {this.state.selectedFood.nutrValues.fat}
                                </Typography>
                                <Typography variant="h6" gutterBottom style={{textAlign: "center"}}>
                                    Fat
                                </Typography>
                            </Grid>
                            <Grid item xs={6} style={{color: "#4caf50"}}>
                                <Typography variant="h4" style={{textAlign: "center"}}>
                                    {this.state.selectedFood.nutrValues.carb}
                                </Typography>
                                <Typography variant="h6" gutterBottom style={{textAlign: "center"}}>
                                    Carbohydrates
                                </Typography>
                            </Grid>
                            <Grid item xs={6} style={{color: "#2196f3"}}>
                                <Typography variant="h4" style={{textAlign: "center"}}>
                                    {this.state.selectedFood.nutrValues.prot}
                                </Typography>
                                <Typography variant="h6" gutterBottom style={{textAlign: "center"}}>
                                    Protein
                                </Typography>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus color="primary" onClick={() => this.addFoodEntry(this.state.selectedFood.nutrValues)}>
                            Add!
                        </Button>
                    </DialogActions>
                </Dialog>
            </section>
        );
    }
}



export default FoodBase;