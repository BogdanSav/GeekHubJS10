import React, { useCallback, useState } from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import mapDispatchToProps from '../../redux/mapDispatchToProps';

// eslint-disable-next-line react/prop-types
function ChangeFormat({ formatting }) {
  const [format, setFormat] = useState(true);
  const onClick = useCallback(() => {
    setFormat(!format);
    formatting(format);
  }, [format]);
  return (
    <Button variant="outlined" style={{ fontFamily: 'Roboto Slab , serif', fontSize: '40%' }} onClick={onClick}>{format ? '24' : '12'}</Button>
  );
}

export default connect(null, mapDispatchToProps('ChangeFormat'))(ChangeFormat);
