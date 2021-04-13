// eslint-disable-next-line jsx-a11y/control-has-associated-label
import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/mapStateToProps';

import ToDoItem from './ToDoItem';

function ToDoList({ items }) {
  return (
      // eslint-disable-next-line react/jsx-filename-extension
    <React.Fragment>
      {
              items.map((item, index) => (
                <ToDoItem key={`item${index}`} text={item.text} index={index} />
              ))
          }
    </React.Fragment>
  );
}

export default connect(mapStateToProps('ToDoList'), null)(ToDoList);
