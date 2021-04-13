import React, { useState } from 'react';
import {
  Grid, FormControl, InputLabel, Select, MenuItem,
} from '@material-ui/core';

import { useDispatch } from 'react-redux';
import zones from './timezones.json';
import { CHANGE_TIMEZONE } from '../redux/actions';

function Selector() {
  const dispatch = useDispatch();
  const [timezone, setTimezone] = useState('Europe/Kiev');

  return (

    <Grid item>
      <FormControl className="formControl">
        <InputLabel id="label">timezone</InputLabel>
        <Select
          labelId="label"
          id="demo-mutiple-name"
          style={{ width: '230px' }}
          value={timezone}
          onChange={(e) => {
            setTimezone(e.target.value);
            dispatch({ type: CHANGE_TIMEZONE, payload: e.target.value });
          }}
        >
          {zones.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

    </Grid>

  );
}
export default Selector;
