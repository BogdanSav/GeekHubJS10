
 import React from 'react';

import { Container } from '@material-ui/core';

import Header from './components/HeaderComponent/Header';
import ToDoList from './components/ToDoListComponent/ToDolist';

function App() {
  return (
      // eslint-disable-next-line react/jsx-filename-extension
    <Container
      align="center"
      maxWidth="sm"
      style={{
        border: '1px solid black', borderRadius: '10px 10px', padding: '15px', marginTop: '10px',
      }}
    >
      <Header />
      <ToDoList />
    </Container>

  );
}

export default App;
