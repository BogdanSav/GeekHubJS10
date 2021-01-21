import React, { useState } from 'react';
import ToDoItems from "./ToDoItem";
import { Container, Grid, Input,  Button } from '@material-ui/core';

function App(props){
  const [ToDoItem, setToDoItem] = useState(["Learn Hooks", "Create TodoList"]);
  let inputRef = React.createRef();
  let newItem = () =>{
    let toDoItem =[...ToDoItem];
    toDoItem.push(inputRef.current.children[0].value);
    setToDoItem(toDoItem);
    inputRef.current.children[0].value  = "";
  }
  let deleteItem =(e)=> {
    let toDoItem =[...ToDoItem];
    toDoItem.splice(e.target.parentElement.getAttribute('index')|| e.target.getAttribute('index'),1);
    setToDoItem(toDoItem);
  }
  let items = ToDoItem.map((item, index)=>(
          <ToDoItems text={item} index={index} delete={deleteItem}/>
        ));
 
  return (
      <Container align="center" maxWidth="sm" style={{border: "1px solid black", borderRadius: "10px 10px", padding:"15px", marginTop:"10px" }}>
        <h1>ToDo</h1>
        <Grid container justify="center" spacing={3}>
          <Grid item>
            <Input type="text" ref={inputRef}/>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" onClick={newItem} >Add new</Button>
          </Grid>
        </Grid>
        {items}
      </Container>

    );
};
export default App;
