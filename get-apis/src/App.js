import React, { useEffect, useState } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import { Container, Grid } from "@material-ui/core";
import Title from "./components/Title";
import CardContainer from "./components/CardContainer"
import fetchData from "./services/api.js"

function App() {
    let [state, setState] = useState([]);
    useEffect(async function () {
        const response = await fetchData();
        setState(response)
    });
    if (state.length===0) {
        return (
            <Container align="center">
                <CircularProgress />
            </Container>

        );
    }
    return (
            <Container maxWidth='xl'>
                <Grid container direction="column" justify="space-around" alignItems="center" spacing={3}>
                    <Title />
                    <CardContainer data={state} />
                </Grid>
            </Container>
    );

}

export default App;
