import React from 'react';

import { Grid } from '@material-ui/core';

import ChangeFormat from './ChangeFormat';
import useClock from '../../hooks/useClock';

function Clock() {
  const time = useClock();
  return (
    <Grid item className="time">
      {time}
      <ChangeFormat />
    </Grid>
  );
}

export default Clock;
