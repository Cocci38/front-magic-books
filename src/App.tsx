//import React from 'react';
import { Menu } from './components/Menu';
import './styles/styles.css';
import { Book } from './views/Book';
import { Home } from './views/Home';
import { Routes, Route } from 'react-router-dom';

function App() {

  
  return (
    <>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book/:id' element={<Book/>}/>
      </Routes>
      <footer>

      </footer>
    </>
  );
}

export default App;
