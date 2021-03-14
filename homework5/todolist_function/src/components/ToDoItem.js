import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { Grid, Checkbox, TextField, } from '@material-ui/core';

export default function ToDoItems(props) {
    let [status,setStatus] = useState(false);
    
    return (
        <Grid container spacing={1} justify="space-around" style={{ marginTop: "10px", border: "1px solid black", borderRadius: "10px 10px", padding: "2px" }}>
            <Grid item >  <Checkbox style={{ color: "green" }} onClick={()=>{setStatus(!status)}}  /></Grid>
            <Grid item > <TextField id="filled-basic" value={props.text} style={status ? {textDecoration: "line-through"}:{textDecoration:"none"}} /></Grid>
            <Grid item > <Button variant="contained" color="primary" onClick={props.delete} index={props.index} >delete</Button></Grid>
        </Grid>

    );
}