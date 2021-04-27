
import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapStateToProps';

import ToDoItem from '../ToDoItemComponent/ToDoItem';

// eslint-disable-next-line react/prop-types
function ToDoList({ items }) {
  return (
      // eslint-disable-next-line react/jsx-filename-extension
    <React.Fragment>
      {
        // eslint-disable-next-line react/prop-types
              items.map((item, index) => (
                <ToDoItem key={`item${index}`} text={item.text} index={index} />
              ))
          }
    </React.Fragment>
  );
}

export default connect(mapStateToProps('ToDoList'), null)(ToDoList);
