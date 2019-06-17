import React from 'react';
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';


function FrontPage() {
    return (
        <div id="frontPage">
            <Container  component="main" maxWidth="xs">
                <Button href="/login">
                    Login
                </Button>
                <Button href="/register">
                    Sign up
                </Button>
            </Container>
        </div>
    );
}

export default FrontPage;
