import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Input } from '@material-ui/core';
import mapDispatchToProps from '../../redux/mapDispatchToProps';
import {AnyAction} from "redux";


// @ts-ignore
const Header =({ addNew }:AnyAction)=> {
  const [text, setText] = useState('');

  return (
    <React.Fragment>
      <h1>ToDo</h1>
      <Grid container justify="center" spacing={3}>
        <Grid item>
          <Input type="text" onChange={(e) => setText(e.target.value)} value={text} />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              text ? addNew(text) && setText('') : alert('empty Todo');
            }}
          >
            Add new
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

// @ts-ignore
export default connect(null, mapDispatchToProps('Header'))(Header);
