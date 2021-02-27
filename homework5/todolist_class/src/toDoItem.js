import React from 'react';
import Button from '@material-ui/core/Button';
import { Grid,  Checkbox, TextField, } from '@material-ui/core';

export default class ToDoItem extends React.Component {
    constructor(props) {
        super(props)
        this.textRef = React.createRef();
        this.checkRef = React.createRef();
    }

    isChecked = () => {
        let text = this.textRef.current.children[0].children[0];
        if (this.checkRef.current.children[0].children[0].checked) {
            text.style.textDecoration = "line-through";
        } else text.style.textDecoration = "none";

    }
    render() {
        return (
            <Grid container spacing={1} justify="space-around" style={{ marginTop: "10px", border: "1px solid black", borderRadius: "10px 10px", padding: "2px" }}>
                <Grid item >  <Checkbox style={{ color: "green" }} onClick={this.isChecked} ref={this.checkRef} /></Grid>
                <Grid item > <TextField id="filled-basic" value={this.props.text} ref={this.textRef} /></Grid>
                <Grid item > <Button variant="contained" color="primary" onClick={this.props.delete} index={this.props.index}> delete</Button></Grid>

            </Grid>

        );
    }

}



