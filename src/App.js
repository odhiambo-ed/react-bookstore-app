import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getApiBooks } from './redux/books/books';
import Home from './Home';
import Categories from './Categories';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApiBooks());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
