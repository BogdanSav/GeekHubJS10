import React, { Component } from 'react';
import ToDoItem from './toDoItem';
import { Container, Grid, Input,  Button } from '@material-ui/core';


class App extends Component {
  constructor(props) {
    super(props);
    this.InputRef = React.createRef();
    this.state = {
      toDoItem: [],
    }
    this.items=undefined;
    
  }
  newItem=()=> {
    console.log(this.InputRef.current.children[0].value);
    let toDoItem =[...this.state.toDoItem];
    toDoItem.push(this.InputRef.current.children[0].value);
    this.setState({toDoItem}); 
    setTimeout(()=>{ this.InputRef.current.children[0].value = ""},10);
    clearTimeout();
   
  }
  deleteItem=(e)=>{
    let toDoItem =[...this.state.toDoItem];
    toDoItem.splice(e.target.parentElement.getAttribute('index')|| e.target.getAttribute('index'),1);
    this.setState({toDoItem}); 
    console.log(toDoItem);
  }
  render() {
    return (
      <Container align="center" maxWidth="sm" style={{border: "1px solid black", borderRadius: "10px 10px", padding:"15px", marginTop:"10px" }}>
        <h1>ToDo</h1>
        <Grid container justify="center" spacing={3}>
          <Grid item>
            <Input type="text" ref={this.InputRef}/>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" onClick={this.newItem}>Add new</Button>
          </Grid>
        </Grid>
        {this.items = this.state.toDoItem.map((item, index)=>(
           <ToDoItem text={item} delete={this.deleteItem} index={index} />
           
        ))}
      </Container>


    );
  }

}

export default App;
