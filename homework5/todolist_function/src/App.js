import React, { useState } from 'react';
import ToDoItems from "./components/ToDoItem";
import { Container, Grid, Input, Button } from '@material-ui/core';

function App(props) {
  const [ToDoItem, setToDoItem] = useState([]);
  let [text, setText] = useState("");
  // let inputRef = React.createRef();
  const newItem = () => {
    if (text) {
      let toDoItem = [...ToDoItem];
      toDoItem.push(text);
      setToDoItem(toDoItem);
      setText("");
    }
    else alert("empty Todo");
  }
  const deleteItem = (e) => {
    let toDoItem = [...ToDoItem];
    toDoItem.splice(e.target.parentElement.getAttribute('index') || e.target.getAttribute('index'), 1);
    setToDoItem(toDoItem);
  }
  let items = ToDoItem.map((item, index) => (
    <ToDoItems key={index} text={item} index={index} delete={deleteItem} />
  ));

  return (
    <Container align="center" maxWidth="sm" style={{ border: "1px solid black", borderRadius: "10px 10px", padding: "15px", marginTop: "10px" }}>
      <h1>ToDo</h1>
      <Grid container justify="center" spacing={3}>
        <Grid item>
          <Input type="text" onChange={e => setText(e.target.value)} value={text} />
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
