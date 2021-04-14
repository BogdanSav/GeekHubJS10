import React from 'react';

import { Container, Grid } from '@material-ui/core';
import Title from './components/Title';
import CardContainer from './components/CardContainer';

function App() {
  return (
    <Container maxWidth="xl">
      <Grid container direction="column" justify="space-around" alignItems="center" spacing={3}>
        <Title />
        <CardContainer />
      </Grid>
    </Container>
  );
}

export default App;
