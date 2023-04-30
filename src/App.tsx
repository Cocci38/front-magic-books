//import React from 'react';
import { Menu } from './components/Menu';
import './styles/styles.css';
import { Book } from './views/Book';
import { Home } from './views/Home';
import { Routes, Route } from 'react-router-dom';
import { PostBook } from './views/admin/PostBook';

function App() {

  
  return (
    <>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book/:id' element={<Book/>}/>
        <Route path='/book' element={<PostBook/>}/>
      </Routes>
      
      <footer>

      </footer>
    </>
  );
}

export default App;
