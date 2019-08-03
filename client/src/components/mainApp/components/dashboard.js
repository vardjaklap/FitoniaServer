import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import RestoreIcon from '@material-ui/icons/Restore';
// import AddBox from '@material-ui/icons/AddBox';
import Fade from '@material-ui/core/Fade';
import Typography from "@material-ui/core/Typography";
import Create from '@material-ui/icons/Create';
import ReportProblem from '@material-ui/icons/ReportProblem';



const styles = {
    Paper: {
        marginTop: "40px",
        padding: "20px"
    }
};

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            user: {
                name: "undefined",
                lname: "undefined",
                email: "undefined",
                dateData: {
                    date: null,
                    tr: {
                        completed: false
                    },
                    nt: {
                        message: ''
                    },
                    nutr: {
                        cal: 0,
                        prot: 0,
                        fat: 0,
                        carb: 0
                    },
                    sl: {
                        dur: 0,
                        quality: 0,
                        note: ''
                    }
                }
            }
        };
        this.sendTheme = this.sendTheme.bind(this);
    }

    componentDidMount() {
        this.setState({
            dataToDisplay: [],
            checked: true,
            user: this.props.userData
        })
        this.sendTheme()

    }
    sendTheme(){
        this.props.callBackFromParent("red");
    }
    render() {
        return (
            <Fade in={this.state.checked}>
                <div>
                    <Container>
                        <Grid container justify="center" spacing={10}>
                            <Grid item md={4}>
                                <Paper style={styles.Paper}>
                                    <div>
                                        <Typography>Training</Typography>
                                        <ReportProblem  style={{fontSize: '4rem', color: 'grey'}} />
                                        <Typography>
                                            Not started
                                        </Typography>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item md={4}>
                                <Paper style={styles.Paper}>
                                    <div >
                                        <Typography>Notepad</Typography>
                                        <ReportProblem style={{fontSize: '4rem', color: 'grey'}} />
                                        <Typography>
                                            Not started
                                        </Typography>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item md={4}>
                                <Paper style={styles.Paper}>
                                    <div>
                                        <Typography>Nutrition</Typography>
                                        <Create  style={{fontSize: '4rem', color: 'grey'}} />
                                        <Typography>
                                            In progress
                                        </Typography>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item md={4}>
                                <Paper style={styles.Paper}>
                                    <div>
                                        <Typography>Hydration</Typography>
                                        <Create  style={{fontSize: '4rem', color: 'grey'}} />
                                        <Typography>
                                            In progress
                                        </Typography>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item md={4}>
                                <Paper style={styles.Paper}>
                                    <div >
                                        <Typography>Sleep</Typography>
                                        <Create  style={{fontSize: '4rem', color: 'grey'}} />
                                        <Typography>
                                            In progress
                                        </Typography>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item md={4}>
                                <Paper style={styles.Paper}>
                                    <div >
                                        <Typography>Meditation</Typography>
                                        <ReportProblem style={{fontSize: '4rem', color: 'grey'}} />
                                        <Typography>
                                            Not started
                                        </Typography>
                                    </div>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </Fade>
        );
    }
}



export default Dashboard;