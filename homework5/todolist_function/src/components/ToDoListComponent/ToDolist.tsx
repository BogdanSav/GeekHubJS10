import React from 'react';
import {connect} from 'react-redux';
import mapStateToProps from '../../redux/mapStateToProps';
import {v4} from "uuid";
import ToDoItem from '../ToDoItemComponent/ToDoItem';
import {AnyAction} from "redux";


const ToDoList = ({items}:AnyAction)=> {
  return (
      <React.Fragment>
        {
          items.map((item:{text:string}, index:number) => (
              <ToDoItem key={v4()} text={item.text} index={index}/>
          ))
        }
      </React.Fragment>
  );
}

export default connect(mapStateToProps('ToDoList'), null)(ToDoList);
