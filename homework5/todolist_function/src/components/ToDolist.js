import React from 'react';
import mapStateToProps from "../redux/mapStateToProps"
import {connect} from "react-redux";

import ToDoItem from './ToDoItem';

function ToDoList({items}){
   return (
       <React.Fragment>
          {
              items.map((item, index)=>(
                  <ToDoItem key={index} text={item.text} index={index}/>
              ))
          }
       </React.Fragment>
   );
}

export default connect(mapStateToProps("ToDoList"),null)(ToDoList);