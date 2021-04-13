import React, { useState, useEffect } from 'react';

import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import moment from 'moment-timezone';
import ChangeFormat from './ChangeFormat';

function Clock() {
  const timezone = useSelector((state) => state.timezone);
  const format = useSelector((state) => state.format);
  const [localFormat, setLocalFormat] = useState('HH:mm:ss');
  const [time, setTime] = useState(moment.tz(timezone).format(localFormat));

  const timer = setInterval(() => setTime(moment.tz(timezone).format(localFormat)), 1000);
  useEffect(() => function () { clearTimeout(timer); });
  useEffect(() => {
    format ? setLocalFormat('LTS') : setLocalFormat('HH:mm:ss');
  }, [format]);

  return (
    <Grid item className="time">
      {time}
      <ChangeFormat />
    </Grid>
  );
}

export default Clock;
