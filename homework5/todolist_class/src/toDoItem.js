import React from 'react';

class ToDoItem extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div className="input-group mb-3">
                <span className="input-group-text">
                <input className="form-check-input" type="checkbox" />  
                {this.props.text}</span>
                
            </div>
        );
    };
}
export default ToDoItem;