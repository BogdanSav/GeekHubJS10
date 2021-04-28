import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Header from './components/HeaderComponent/Header';
import Clock from './components/ClockComponent/Clock';
import Selector from './components/SelectorComponent/Selector';
import './App.css';

function App() {
  return (
    <Container maxWidth="sm">
      <Grid container direction="column" justify="center" alignItems="center">
        <Header />
        <Clock />
        <Selector />
      </Grid>
    </Container>
  );
}

export default App;
