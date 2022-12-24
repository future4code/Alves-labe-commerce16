import React from 'react';
import './App.css';
import Produtos from './components/Produtos/Produtos';
import Filtro from './components/Filtro/Filtro';
import Carrinho from './components/Carrinho/Carrinho';

import styled from 'styled-components';


function App() {
  return (
    <div className="App">
        <Filtro/> 
        <Produtos />
        <Carrinho/>
           
    </div>
  );
}

export default App;
