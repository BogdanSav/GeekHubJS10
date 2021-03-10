import React from 'react';
import Button from '@material-ui/core/Button';
import { Grid, Checkbox, TextField, } from '@material-ui/core';

export default function ToDoItems(props) {
    let textRef = React.createRef();
    let checkRef = React.createRef();
    let isChecked = () => {
        let text = textRef.current.children[0].children[0];
        if (checkRef.current.children[0].children[0].checked) {
            text.style.textDecoration = "line-through";
        } else text.style.textDecoration = "none";

    }
    return (
        <Grid container spacing={1} justify="space-around" style={{ marginTop: "10px", border: "1px solid black", borderRadius: "10px 10px", padding: "2px" }}>
            <Grid item >  <Checkbox style={{ color: "green" }} onClick={isChecked} ref={checkRef} /></Grid>
            <Grid item > <TextField id="filled-basic" value={props.text} ref={textRef} /></Grid>
            <Grid item > <Button variant="contained" color="primary" onClick={props.delete} index={props.index} >delete</Button></Grid>
        </Grid>

    );
}