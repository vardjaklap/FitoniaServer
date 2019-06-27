import React, {Component} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import { amber, green, red, blue } from '@material-ui/core/colors';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const styles = {
    success: {
        backgroundColor: green[600]
    },
    error: {
        backgroundColor: red[600]
    },
    warning:{
        backgroundColor: amber[600]
    },
    info: {
        backgroundColor: blue[600]
    },
    message: {
        display: "flex",
        fontSize: "1.1em"
    }
}
class Snack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            message: '',
            type: '',
            icons: {
                success: <CheckCircleIcon></CheckCircleIcon>,
                warning: <WarningIcon></WarningIcon>,
                error: <ErrorIcon></ErrorIcon>,
                info: <InfoIcon></InfoIcon>,
            }
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle(){
        this.setState({
            open: !this.state.open
        })
    }
    handleOpen(type, message) {
        this.handleClose();
        this.setState({
            open: true,
            message,
            type
        });
    }
    handleClose(){
        this.setState({
            open: false
        })
    }
    componentDidMount() {

    }

    render(){ return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={this.state.open}
                autoHideDuration={3000}
                onClick={this.handleClose}
                onClose={this.handleClose}
                >
                <SnackbarContent
                    style={styles[this.state.type]}
                    message={<div style={styles.message} id="message-id">
                        <div>{this.state.icons[this.state.type]}</div>
                        <div style={{margin: "3px 0 0 10px"}}><span>{this.state.message}</span></div>
                    </div>}
                />
            </Snackbar>
        </div>
    );}
}
export default Snack;