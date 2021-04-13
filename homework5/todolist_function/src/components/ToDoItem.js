// eslint-disable-next-line jsx-a11y/control-has-associated-label
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import {Grid, Checkbox, TextField} from '@material-ui/core';
import { connect } from 'react-redux';
import mapDispatchToProps from '../redux/mapDispatchToProps';

function ToDoItem({
  delItems, complete, index, text,
}) {
  const [status, setStatus] = useState(false);

  return (
    <Grid
      container
      spacing={1}
      justify="space-around"
      style={{
        marginTop: '10px', border: '1px solid black', borderRadius: '10px 10px', padding: '2px',
      }}
    >
      <Grid item>
        {' '}
        <Checkbox style={{ color: 'green' }} onClick={() => { setStatus(!status); complete(); }} />
      </Grid>
      <Grid item>
        {' '}
        <TextField id="filled-basic" value={text} style={status ? { textDecoration: 'line-through' } : { textDecoration: 'none' }} />
      </Grid>
      <Grid item>
        {' '}
        <Button variant="contained" color="primary" onClick={() => { delItems(index); }}>delete</Button>
      </Grid>
    </Grid>

  );
}



export default connect(null, mapDispatchToProps('ToDoItem'))(ToDoItem);
