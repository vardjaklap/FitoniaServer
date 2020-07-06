import React, { Component } from 'react';
import Fade from '@material-ui/core/Fade';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";


class NewFood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chipData:[
                { key: 0, label: 'Angular' },
                { key: 1, label: 'jQuery' },
                { key: 2, label: 'Polymer' },
                { key: 3, label: 'React' },
                { key: 4, label: 'Vue.js' },
            ]
        };
        this.sendTheme = this.sendTheme.bind(this);
    }

    componentDidMount() {
        this.sendTheme()
    }
    sendTheme(){
        this.props.callBackFromParent("tools");
    }
    deleteChip(data){
        
    }
    render() {
        return (
            <div>
                <Fade in={true}>
                    <section id="Evaluation" style={{textAlign: "left"}}>
                        <Container>
                            <Grid container justify="center"  style={{minHeight: "70vh"}}>
                                <Grid item xs={12} sm={10} md={8}>
                                    <Typography variant="h5" gutterBottom>
                                        Add new food item
                                    </Typography>
                                    <Paper style={{minHeight: "300px"}}>
                                        <TextField id="outlined-basic" label="Name" variant="outlined" />
                                        <FormControl variant="outlined" style={{minWidth: 120}}>
                                            <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                // value={age}
                                                // onChange={handleChange}
                                                label="Age"
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <Typography variant="h5" gutterBottom>
                                            Ingredients
                                        </Typography>
                                        {this.state.chipData.map((data) => {
                                            return (
                                                <li key={data.key}>
                                                    <Chip
                                                        label={data.label}
                                                        // onDelete={handleDelete(data)}
                                                        // className={classes.chip}
                                                    />
                                                </li>
                                            );
                                        })}
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Container>
                    </section>
                </Fade>
            </div>
        );
    }
}



export default NewFood;