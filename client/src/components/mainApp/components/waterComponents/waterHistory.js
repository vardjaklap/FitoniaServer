import Grid from '@material-ui/core/Grid';
import {Component} from "react";

import React from "react";
import blue from "@material-ui/core/colors/blue";

import { AreaChart, Area,  Tooltip , XAxis, YAxis, ResponsiveContainer } from 'recharts';
import Paper from "@material-ui/core/Paper";



// const data = [
//     {name: 'Day 1', amount: "1500", percent: 52},
//     {name: 'Day 2', amount: "180", percent: 44},
//     {name: 'Day 3', amount: "1500", percent: 30},
//     {name: 'Day 4', amount: "300", percent: 100},
//     {name: 'Day 5', amount: "100", percent: 13},
//     {name: 'Day 6', amount: "1500", percent: 42},
//     {name: 'Day 7', amount: "1230", percent: 36},
// ];
const data = [
    {
        "name": "Monday",
        "%": 90
    },
    {
        "name": "Tuesday",
        "%": 50
    },
    {
        "name": "Wednesday",
        "%": 77
    },
    {
        "name": "Thursday",
        "%": 67
    },
    {
        "name": "Friday",
        "%": 100
    },
    {
        "name": "Saturday",
        "%": 93
    },
    {
        "name": "Sunday",
        "%": 60
    }
]
const styles = {
    Paper: {
        padding: "20px",
        marginTop: "20px",
        marginBottom: "10px"
    }
}
class WaterHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    "name": "Monday",
                    "%": 0
                },
                {
                    "name": "Tuesday",
                    "%": 0
                },
                {
                    "name": "Wednesday",
                    "%": 0
                },
                {
                    "name": "Thursday",
                    "%": 0
                },
                {
                    "name": "Friday",
                    "%": 0
                },
                {
                    "name": "Saturday",
                    "%": 0
                },
                {
                    "name": "Sunday",
                    "%": 0
                }
            ]
        };
    }

    componentDidMount() {
        this.setState({
            data: [
                {
                    "name": "Monday",
                    "%": 0
                },
                {
                    "name": "Tuesday",
                    "%": 100
                },
                {
                    "name": "Wednesday",
                    "%": 0
                },
                {
                    "name": "Thursday",
                    "%": 30
                },
                {
                    "name": "Friday",
                    "%": 0
                },
                {
                    "name": "Saturday",
                    "%": 80
                },
                {
                    "name": "Sunday",
                    "%": 40
                }
            ]
        })
    }
    render() {
        return (
            <section id="WaterHist">
                <Grid item xs={12}>
                    <Paper style={styles.Paper}>
                        <ResponsiveContainer width='100%' aspect={4.0/2.0}>
                            <AreaChart data={this.state.data}
                                       margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#2196F3" stopOpacity={0.8}/>
                                        <stop offset="95%" stopColor="#2196F3" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" />
                                <YAxis domain={[0, 100]}/>
                                <Tooltip />
                                <Area type="monotone" dataKey="%" stroke="#2196F3" fillOpacity={1} fill="url(#colorUv)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Paper>

                </Grid>
            </section>
        );
    }
}



export default WaterHistory;