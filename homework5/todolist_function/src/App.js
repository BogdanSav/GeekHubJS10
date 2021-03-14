import React from 'react';

import { Container } from '@material-ui/core';

import Header from "./components/Header";
import ToDoList from "./components/ToDolist";
function App(props) {

  return (
    <Container align="center" maxWidth="sm" style={{ border: "1px solid black", borderRadius: "10px 10px", padding: "15px", marginTop: "10px" }}>
      <Header />
      <ToDoList />

    </Container>

  );
};
export default App;
