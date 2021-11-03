import {Component} from "react";
import React from "react";
import Grid from "@material-ui/core/Grid";




class WaterSilhouette extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        this.setState({

        })
    }
    render() {
        return (
            <section id="Silhouette">
                <Grid
                container
                justifyContent="center">
                    <Grid item lg={6} md={7} sm={9} xs={11}>
                        <div style={{position: "relative", width: "100%", height: "100%"}}>
                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="150 20 1000 1250" fill="#e0e0e0">
                                <path d="M631.14,49.71c-22.8,2.95-37,15.93-42.55,39.17-.87,3.82-2,13.53-2.4,21.5-.55,12.77-.87,14.18-2.18,12.22-1.86-2.62-5-2.84-6.88-.55s-.65,15.17,2.19,22.59c3.92,10.37,6.87,14.51,10.14,14.51,2.29-.11,2.95.44,2.95,2.08,0,1.2,2,12,4.47,24,5,24.44,4.91,25.86-1.2,34.15-5.78,8-21.38,18.23-34.26,22.92a139.85,139.85,0,0,1-14.51,3.6c-12.88,2.62-17,4.58-24.44,12-11.79,11.68-14.3,19.86-14.41,45.83-.1,16.91.22,20.51,2.84,32,1.75,7.75,3,16.15,3,21.06,0,8.62-3.82,41-7.86,66.78l-2.51,15.6-3.82-.66c-20-3.49-68.74-16.15-90-23.24l-8.72-2.94-7.1-12.22c-3.93-6.77-9.05-14.41-11.45-16.92-4.37-4.58-4.48-4.8-3.71-10.69a79.89,79.89,0,0,1,2.18-10.58c1.2-3.82,1.2-5-.11-7.42-.76-1.53-2.07-2.73-3-2.73-1.85,0-7.53,11.35-8.51,17.13-.76,4.91-2.73,7.53-2.73,3.71,0-4,4.48-18.55,7.21-23.35s3.38-9.93,1.63-12.66c-1.52-2.4-4-.65-8.51,6-2.18,3.39-4.25,5.57-4.47,4.8s1-3.27,2.73-5.78c5.56-7.86,6.11-9.27,4.69-12.87-1.75-4-2.73-3.93-6.66.21-2.62,2.73-3.27,3.06-3.82,1.64a2.42,2.42,0,0,0-2-1.75c-2.18,0-8.73,7.75-13.86,16.37-4.58,7.86-4.8,8.51-4.8,16.91.11,12.66,1.64,24.55,3.82,28.92a54.55,54.55,0,0,1,2.62,5.67c.22,1,3.16,3.71,6.44,6.11s9.49,8.62,14,13.86c9.06,10.48,16.92,16.26,32.63,23.79,5.67,2.73,18.77,9.71,28.91,15.6,21.39,12.22,33.94,18.33,48.56,23.57,32.08,11.67,42.66,15.71,48.23,18.44,11.23,5.67,16.58,3.6,23.13-8.84,3.49-6.55,4.91-11.56,8.4-28.8,4.91-24,11.89-50.2,13.09-49,.33.44,3.06,5,6,9.93,5,8.84,5.24,9.5,5.13,17.46,0,6.55-.87,10.8-3.6,18.77-6.54,19.2-11.24,27.06-25.42,42.33-17.57,19.1-24.77,33.94-40.7,84.57-16.69,52.92-20.3,70.38-24,116.42-3.05,38.08-1.52,71.69,5.13,117.3,4.8,32.3,3.82,67.32-2.4,88.93-6.44,22-8.62,35.89-10.25,65.46-1,16.81.54,32,9.16,90.68,3.71,24.87,4.91,48.77,3.38,63.28-2.4,21.28-2.4,23.57-.76,29.25,1.53,5.23,1.42,5.78-2,16.14-3.93,12.12-10.81,30-13.1,34.37a17.75,17.75,0,0,0-1.63,7.32c0,5.12,1.2,6,9,7.2,2.84.43,5.46,1.2,5.79,1.74s2.18,1,4.25,1,4,.55,4.37,1.1c1.2,2,8,1.2,9.6-1.1l1.52-2.18,2,2.18c2.18,2.51,8.62,3,12.87,1,5.24-2.4,6.55-8,6.77-27.17.11-8.08.54-17.68,1-21.28a36,36,0,0,0-.76-13.2c-1.2-5.13-1.31-8-.44-12.33.76-3.82.76-9.28,0-16.81-1.42-13.74-.22-31.31,3.6-53.68,3.93-23.79,6.77-36.88,10.26-48,11.46-36,13.86-56.08,11.56-97.66l-1-18,4-12.33a200.81,200.81,0,0,0,6-24.55c1.2-6.77,3.17-16.91,4.47-22.59s4-21.93,6.11-36c3.71-25.43,7.86-48.23,10.92-60.34,3.82-15.17,13.64-67.76,14.84-80.09,1-10.59,1-15.72,0-24-.77-5.78-1.2-10.58-1.1-10.8a24,24,0,0,1,5.79,2.4,39.11,39.11,0,0,0,6.54,2.62c.66,0,4.91,3.6,9.61,8.07,7.31,7,9.38,9.82,14.94,20.84,3.61,7,7.64,16,9.17,20,3.82,10.7,15.49,31.43,31.32,56.09,10.14,15.71,19,31.42,31.64,56.3,20.84,41,24.88,50.3,33.61,75.51,3.6,10.58,8.94,24.22,11.89,30.22,5.89,12.11,6.76,15.93,9.49,41.24,3.17,29.79,11.13,50.09,32.41,82.39a476.54,476.54,0,0,1,28.7,49.1c17.56,35.13,24.66,58.15,22.36,72.56-1.41,8.62-1.41,16.58.11,23.35,1.86,8.62,7.31,12.22,21.39,13.85l5.67.77,2.73,6.33c3.93,9.16,9.6,14.73,19.2,19.31,9.82,4.58,18,5.35,21.72,2,1.74-1.63,2.62-1.85,3.6-.87,3,3,10.15-.11,17-7.31,3.06-3.16,3.49-4.47,3.06-7.31-.77-3.93-2.3-5.35-14.73-14.19-14.52-10.25-25.1-24.22-38.63-51.17-4.47-9.06-9.28-19.86-10.48-24.22-4.8-16-14.07-65.69-20.29-108.35C851.34,976.3,844.79,955,827,918c-9.16-18.88-10-21.28-13.75-38.19-3.81-17.79-3.92-18.44-4.8-53.47-1.2-45.28-4-68.19-12-96.35-5.89-21.16-15-39.17-39.61-79.32-22.47-36.55-22.69-37.1-23.35-76.49L733,545.09l5.78-1.86a134.64,134.64,0,0,0,13.2-5.56c4-2.08,8.08-3.71,8.84-3.71s2.84-1,4.37-2.18,6.65-4.26,11.34-6.66c7.21-3.71,9.5-5.57,15.06-12.55,3.6-4.47,14.84-15.6,25.1-24.77,33-29.46,42.66-39.17,62.08-61.86,4.91-5.68,11.57-13.21,14.95-16.92a70.13,70.13,0,0,0,7.53-9.16c1.86-3.6.55-9.06-4.58-18.88-3.6-7-7.2-11.24-20.41-24.55-8.73-8.95-21.06-22.59-27.27-30.33-12.77-16-15.28-18.55-29.14-29.14-10.15-7.63-13.09-11-18.44-21.6s-12.22-20-22.58-30.66c-16-16.7-23.25-19.53-49.87-19.53-21.06,0-32.19-2.08-44.85-8.51s-18.76-16.15-13.85-22.15c3.6-4.48,8.07-14.19,11.13-24.45,1.63-5.45,4.36-13.63,6.11-18.33,5.45-14.62,8.18-31.31,5-31.31a3.87,3.87,0,0,0-2.4,1c-.66.65-1.1-4.26-1.2-13.31-.11-15.5-1.42-23.24-5.57-32.08C680,69,672.17,60.08,666.17,56.7,656.24,50.91,642.71,48.29,631.14,49.71Zm110,284.6c1,1.3,7.3,6.8,13.8,12.3a302.94,302.94,0,0,1,22.7,21.3c15.9,16.7,31.1,30.5,40.2,36.4,11.8,7.7,11.7,7.4,4.3,13.2-5.2,4.1-7.8,7.4-15,18.9-4.7,7.7-13.3,20.2-19,27.9-10.8,14.6-27.8,34.9-30.5,36.3-1,.6-5.1-.1-11.2-1.7-8.4-2.3-10.2-3.1-13-6.3-1.8-2-4.1-4-5.2-4.3-1.6-.5-1.9-1.6-1.9-6.8,0-13.2,2.1-30.9,5.5-46.7,6.5-30,7.7-34.4,11.2-38.3,8-9.1,11.9-20.1,11-31.2-.8-10.5-3.3-15.6-16-32.3-.6-.8-.6-1.2.1-1.2S740.08,332.91,741.18,334.31ZM731,519.71c-1,1.6-4.6,2-4.6.5,0-.8,1-1.4,2.6-1.4C730.38,518.81,731.28,519.21,731,519.71Zm7.3,13.1c2,1.7,2.1,2.3,1,3.6s-12,7.4-13.4,7.4c-.3,0-.5-2.4-.5-5.4v-5.5l4.3-.9C735.58,530.61,735.58,530.61,738.28,532.81Z"
                                />
                            </svg>
                            <svg style={{transition: "all 0.3s", position: "absolute", top: "0", left: "0", clipPath: "polygon(0 " + (100 - this.props.percent) +  "%, 100% "+ (100 - this.props.percent) + "%, 100% 100%, 0% 100%)"}} id="Layer_2" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="150 20 1000 1250" fill="#2196f3">
                                <path d="M631.14,49.71c-22.8,2.95-37,15.93-42.55,39.17-.87,3.82-2,13.53-2.4,21.5-.55,12.77-.87,14.18-2.18,12.22-1.86-2.62-5-2.84-6.88-.55s-.65,15.17,2.19,22.59c3.92,10.37,6.87,14.51,10.14,14.51,2.29-.11,2.95.44,2.95,2.08,0,1.2,2,12,4.47,24,5,24.44,4.91,25.86-1.2,34.15-5.78,8-21.38,18.23-34.26,22.92a139.85,139.85,0,0,1-14.51,3.6c-12.88,2.62-17,4.58-24.44,12-11.79,11.68-14.3,19.86-14.41,45.83-.1,16.91.22,20.51,2.84,32,1.75,7.75,3,16.15,3,21.06,0,8.62-3.82,41-7.86,66.78l-2.51,15.6-3.82-.66c-20-3.49-68.74-16.15-90-23.24l-8.72-2.94-7.1-12.22c-3.93-6.77-9.05-14.41-11.45-16.92-4.37-4.58-4.48-4.8-3.71-10.69a79.89,79.89,0,0,1,2.18-10.58c1.2-3.82,1.2-5-.11-7.42-.76-1.53-2.07-2.73-3-2.73-1.85,0-7.53,11.35-8.51,17.13-.76,4.91-2.73,7.53-2.73,3.71,0-4,4.48-18.55,7.21-23.35s3.38-9.93,1.63-12.66c-1.52-2.4-4-.65-8.51,6-2.18,3.39-4.25,5.57-4.47,4.8s1-3.27,2.73-5.78c5.56-7.86,6.11-9.27,4.69-12.87-1.75-4-2.73-3.93-6.66.21-2.62,2.73-3.27,3.06-3.82,1.64a2.42,2.42,0,0,0-2-1.75c-2.18,0-8.73,7.75-13.86,16.37-4.58,7.86-4.8,8.51-4.8,16.91.11,12.66,1.64,24.55,3.82,28.92a54.55,54.55,0,0,1,2.62,5.67c.22,1,3.16,3.71,6.44,6.11s9.49,8.62,14,13.86c9.06,10.48,16.92,16.26,32.63,23.79,5.67,2.73,18.77,9.71,28.91,15.6,21.39,12.22,33.94,18.33,48.56,23.57,32.08,11.67,42.66,15.71,48.23,18.44,11.23,5.67,16.58,3.6,23.13-8.84,3.49-6.55,4.91-11.56,8.4-28.8,4.91-24,11.89-50.2,13.09-49,.33.44,3.06,5,6,9.93,5,8.84,5.24,9.5,5.13,17.46,0,6.55-.87,10.8-3.6,18.77-6.54,19.2-11.24,27.06-25.42,42.33-17.57,19.1-24.77,33.94-40.7,84.57-16.69,52.92-20.3,70.38-24,116.42-3.05,38.08-1.52,71.69,5.13,117.3,4.8,32.3,3.82,67.32-2.4,88.93-6.44,22-8.62,35.89-10.25,65.46-1,16.81.54,32,9.16,90.68,3.71,24.87,4.91,48.77,3.38,63.28-2.4,21.28-2.4,23.57-.76,29.25,1.53,5.23,1.42,5.78-2,16.14-3.93,12.12-10.81,30-13.1,34.37a17.75,17.75,0,0,0-1.63,7.32c0,5.12,1.2,6,9,7.2,2.84.43,5.46,1.2,5.79,1.74s2.18,1,4.25,1,4,.55,4.37,1.1c1.2,2,8,1.2,9.6-1.1l1.52-2.18,2,2.18c2.18,2.51,8.62,3,12.87,1,5.24-2.4,6.55-8,6.77-27.17.11-8.08.54-17.68,1-21.28a36,36,0,0,0-.76-13.2c-1.2-5.13-1.31-8-.44-12.33.76-3.82.76-9.28,0-16.81-1.42-13.74-.22-31.31,3.6-53.68,3.93-23.79,6.77-36.88,10.26-48,11.46-36,13.86-56.08,11.56-97.66l-1-18,4-12.33a200.81,200.81,0,0,0,6-24.55c1.2-6.77,3.17-16.91,4.47-22.59s4-21.93,6.11-36c3.71-25.43,7.86-48.23,10.92-60.34,3.82-15.17,13.64-67.76,14.84-80.09,1-10.59,1-15.72,0-24-.77-5.78-1.2-10.58-1.1-10.8a24,24,0,0,1,5.79,2.4,39.11,39.11,0,0,0,6.54,2.62c.66,0,4.91,3.6,9.61,8.07,7.31,7,9.38,9.82,14.94,20.84,3.61,7,7.64,16,9.17,20,3.82,10.7,15.49,31.43,31.32,56.09,10.14,15.71,19,31.42,31.64,56.3,20.84,41,24.88,50.3,33.61,75.51,3.6,10.58,8.94,24.22,11.89,30.22,5.89,12.11,6.76,15.93,9.49,41.24,3.17,29.79,11.13,50.09,32.41,82.39a476.54,476.54,0,0,1,28.7,49.1c17.56,35.13,24.66,58.15,22.36,72.56-1.41,8.62-1.41,16.58.11,23.35,1.86,8.62,7.31,12.22,21.39,13.85l5.67.77,2.73,6.33c3.93,9.16,9.6,14.73,19.2,19.31,9.82,4.58,18,5.35,21.72,2,1.74-1.63,2.62-1.85,3.6-.87,3,3,10.15-.11,17-7.31,3.06-3.16,3.49-4.47,3.06-7.31-.77-3.93-2.3-5.35-14.73-14.19-14.52-10.25-25.1-24.22-38.63-51.17-4.47-9.06-9.28-19.86-10.48-24.22-4.8-16-14.07-65.69-20.29-108.35C851.34,976.3,844.79,955,827,918c-9.16-18.88-10-21.28-13.75-38.19-3.81-17.79-3.92-18.44-4.8-53.47-1.2-45.28-4-68.19-12-96.35-5.89-21.16-15-39.17-39.61-79.32-22.47-36.55-22.69-37.1-23.35-76.49L733,545.09l5.78-1.86a134.64,134.64,0,0,0,13.2-5.56c4-2.08,8.08-3.71,8.84-3.71s2.84-1,4.37-2.18,6.65-4.26,11.34-6.66c7.21-3.71,9.5-5.57,15.06-12.55,3.6-4.47,14.84-15.6,25.1-24.77,33-29.46,42.66-39.17,62.08-61.86,4.91-5.68,11.57-13.21,14.95-16.92a70.13,70.13,0,0,0,7.53-9.16c1.86-3.6.55-9.06-4.58-18.88-3.6-7-7.2-11.24-20.41-24.55-8.73-8.95-21.06-22.59-27.27-30.33-12.77-16-15.28-18.55-29.14-29.14-10.15-7.63-13.09-11-18.44-21.6s-12.22-20-22.58-30.66c-16-16.7-23.25-19.53-49.87-19.53-21.06,0-32.19-2.08-44.85-8.51s-18.76-16.15-13.85-22.15c3.6-4.48,8.07-14.19,11.13-24.45,1.63-5.45,4.36-13.63,6.11-18.33,5.45-14.62,8.18-31.31,5-31.31a3.87,3.87,0,0,0-2.4,1c-.66.65-1.1-4.26-1.2-13.31-.11-15.5-1.42-23.24-5.57-32.08C680,69,672.17,60.08,666.17,56.7,656.24,50.91,642.71,48.29,631.14,49.71Zm110,284.6c1,1.3,7.3,6.8,13.8,12.3a302.94,302.94,0,0,1,22.7,21.3c15.9,16.7,31.1,30.5,40.2,36.4,11.8,7.7,11.7,7.4,4.3,13.2-5.2,4.1-7.8,7.4-15,18.9-4.7,7.7-13.3,20.2-19,27.9-10.8,14.6-27.8,34.9-30.5,36.3-1,.6-5.1-.1-11.2-1.7-8.4-2.3-10.2-3.1-13-6.3-1.8-2-4.1-4-5.2-4.3-1.6-.5-1.9-1.6-1.9-6.8,0-13.2,2.1-30.9,5.5-46.7,6.5-30,7.7-34.4,11.2-38.3,8-9.1,11.9-20.1,11-31.2-.8-10.5-3.3-15.6-16-32.3-.6-.8-.6-1.2.1-1.2S740.08,332.91,741.18,334.31ZM731,519.71c-1,1.6-4.6,2-4.6.5,0-.8,1-1.4,2.6-1.4C730.38,518.81,731.28,519.21,731,519.71Zm7.3,13.1c2,1.7,2.1,2.3,1,3.6s-12,7.4-13.4,7.4c-.3,0-.5-2.4-.5-5.4v-5.5l4.3-.9C735.58,530.61,735.58,530.61,738.28,532.81Z"
                                />
                            </svg>
                            {this.props.percent}%
                        </div>

                    </Grid>
                </Grid>
                </section>
        );
    }
}



export default WaterSilhouette;