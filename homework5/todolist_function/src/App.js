import React, {useState} from 'react';
import ToDoItems from "./ToDoItem";
import {Button, Container, Grid, Input} from '@material-ui/core';
import {connect} from 'react-redux';
import mapStateToProps from "./redux/mapStateToProps";
import mapDispatchToProps from "./redux/mapDispatchtoProps";

function App({items, addNew}) {
    let [text, setText] = useState("");

    return (
        <Container align="center" maxWidth="sm"
                   style={{border: "1px solid black", borderRadius: "10px 10px", padding: "15px", marginTop: "10px"}}>
            <h1>Todo</h1>
            <Grid container justify="center" spacing={3}>
                <Grid item>
                    <Input type="text" onChange={e => setText(e.target.value)} value={text}/>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="secondary" onClick={() => {
                        addNew(text);
                        setText("")
                    }}>Add new</Button>
                </Grid>
            </Grid>
            {
                items.map((item, index) => (
                    <ToDoItems key={index} text={item.text} index={index} />
                ))
            }
        </Container>

    );
};
export default connect(mapStateToProps("App"), mapDispatchToProps("App"))(App);
