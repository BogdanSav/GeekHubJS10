import React, { useEffect, useState } from 'react';

import { Container, Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from './Card';
import fetchData from '../services/api';

function CardContainer() {
  const [state, setState] = useState([]);
  async function getData() {
    const response = await fetchData();
    return response;
  }
  useEffect(() => { getData().then((r) => setState(r)); }, []);
  if (state.length === 0) {
    return (
      <Container align="center">
        <CircularProgress />
      </Container>

    );
  }
  return (
    <Grid item>
      <Grid container direction="row" justify="space-around" alignItems="flex-start" spacing={2} wrap="wrap">
        {
                    state.map((data, index) => (
                      <Card key={index} content={data} />
                    ))
                }
      </Grid>
    </Grid>

  );
}

export default CardContainer;
