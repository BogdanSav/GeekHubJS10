import React from 'react';
import {connect} from 'react-redux';
import mapStateToProps from '../../redux/mapStateToProps';
import {v4} from "uuid/wrapper.mjs";
import ToDoItem from '../ToDoItemComponent/ToDoItem';

// eslint-disable-next-line react/prop-types
function ToDoList({items}) {
  return (
      <>
        {
          // eslint-disable-next-line react/prop-types
          items.map((item, index) => (
              <ToDoItem key={v4()} text={item.text} index={index}/>
          ))
        }
      </>
  );
}

export default connect(mapStateToProps('ToDoList'), null)(ToDoList);
