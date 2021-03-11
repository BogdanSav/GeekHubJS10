import React from 'react';
import Header from "./components/Header";
import Clock from "./components/Clock"
import Selector from "./components/Selector"
import { Container, Grid} from "@material-ui/core";
import './App.css';

function App (){

    return (
        <Container maxWidth='sm'>
            <Grid container direction='column' justify='center' alignItems='center'>
                <Header />
                <Clock />
                <Selector />
            </Grid>
        </Container>
    );

}

export default App;
