import React from 'react';
import {
  Grid, FormControl, InputLabel, Select, MenuItem,
} from '@material-ui/core';

import { connect } from 'react-redux';
import zones from '../timezones.json';
import mapDispatchToProps from '../../redux/mapDispatchToProps';
import useSelectFunc from './useSelectFunc';
// eslint-disable-next-line react/prop-types
function Selector({ timezoneCh }) {
  const [timezone, changeZone] = useSelectFunc('Europe/Kiev', timezoneCh);
  return (

    <Grid item>
      <FormControl className="formControl">
        <InputLabel id="label">timezone</InputLabel>
        <Select
          labelId="label"
          id="demo-multiple-name"
          style={{ width: '230px' }}
          value={timezone}
          onChange={changeZone}
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
export default connect(null, mapDispatchToProps('Selector'))(Selector);
