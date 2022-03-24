import React from 'react';
import './App.css';
import { Table } from './Components/Table/';
import { Header } from './Components/Header/';
import { ButtonPrimary } from './Components/Button/';

function App() {
  
  return (
    <div className="App">
      <main className="main">
        <Header>
          <h1>Tic Tac Toe</h1>
        </Header>
        <Table />
        <div className="buttons">
          <ButtonPrimary image="../../Assets/refresh.svg">
            Novo Jogo
          </ButtonPrimary>
        </div>
      </main>
    </div>
  );
}

export default App;
