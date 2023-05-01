//import React from 'react';
import { Menu } from './components/Menu';
import './styles/styles.css';
import { Book } from './views/Book';
import { Home } from './views/Home';
import { Routes, Route } from 'react-router-dom';
import { PostBook } from './views/admin/PostBook';
import { PostCategory } from './views/admin/PostCategory';

function App() {

  
  return (
    <>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book/:id' element={<Book/>}/>
        <Route path='/book' element={<PostBook/>}/>
        <Route path='/category' element={<PostCategory/>}/>
      </Routes>
      
      <footer>

      </footer>
    </>
  );
}

export default App;
