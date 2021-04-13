import React, { useCallback, useState } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { CHANGE_FORMAT } from '../redux/actions';

function ChangeFormat() {
  const dispatch = useDispatch();
  const [format, setFormat] = useState(true);
  const onClick = useCallback(() => {
    setFormat(!format);
    dispatch({ type: CHANGE_FORMAT, payload: format });
  }, [format]);
  return (
    <Button variant="outlined" style={{ fontFamily: 'Roboto Slab , serif', fontSize: '40%' }} onClick={onClick}>{format ? '24' : '12'}</Button>
  );
}

export default ChangeFormat;
