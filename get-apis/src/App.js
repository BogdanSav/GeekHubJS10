import React, { useEffect } from 'react';
import {useSelector,useDispatch} from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container, Grid } from "@material-ui/core";
import Title from "./components/Title";
import CardContainer from "./components/CardContainer"

import {GET_DATA} from "./redux/actions";

function App() {
    const dispatch = useDispatch();
    const state = useSelector(state=>state.apis);
    useEffect(()=>{
       dispatch({type:GET_DATA,payload:[]})
        
    },[])
    
    if (state.length===0) {
        return (
            <Container align="center" maxWidth="md">
                <Grid container justify="space-around" alignItems="center">
                    <Grid item xs={12} > <CircularProgress /></Grid>
                </Grid>
               
            </Container>

        );
    }
    return (
            <Container maxWidth='xl'>
                <Grid container direction="column" justify="space-around" alignItems="center" spacing={3}>
                    <Title />
                    <CardContainer/>
                </Grid>
            </Container>
    );

}

export default App;
