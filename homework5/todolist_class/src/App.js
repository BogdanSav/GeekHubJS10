import React, { Component } from 'react';
import ToDoItem from './toDoItem';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoItem: [],
      text: "",
    }
    this.items= undefined;
  }
  newItem = () => {
    let toDoItem = [...this.state.toDoItem];
    toDoItem.push(<ToDoItem text = {this.state.text}/> );
    this.setState({ toDoItem });
  }
  deleteItem=()=>{ 
    let toDoItem = [...this.state.toDoItem];
    toDoItem.pop();
    this.setState({ toDoItem });
  
  }
  inputOnChange= (e)=>{
    this.setState({text:e.target.value})
  }
  render() {
    return (
      <div className="container p-4">
        <input type="text" onChange={this.inputOnChange} />
        <button className="btn btn-primary" onClick={this.newItem}>add New</button>
        {this.state.toDoItem}
      </div>

    );
  }
}

export default App;
