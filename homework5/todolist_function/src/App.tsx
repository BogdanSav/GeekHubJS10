import React from 'react';

import { Container } from '@material-ui/core';

import Header from './components/HeaderComponent/Header';
import ToDoList from './components/ToDoListComponent/ToDolist';

const App:React.FC =()=> {
  return (
//@ts-ignore
    <Container align={"center"}>
      <Header />
      <ToDoList />
    </Container>

  );
}

export default App;
