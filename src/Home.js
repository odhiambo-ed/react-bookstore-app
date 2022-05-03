import React from 'react';
import { useSelector } from 'react-redux';
import Nav from './components/Nav';
import Books from './components/Books';
import AddBooks from './components/AddBooks';
import Footer from './components/Footer';

function Home() {
  const state = useSelector((state) => state);
  const data = state.booksReducer;
  return (
    <div>
      <Nav />
      {data.map((item) => (
        <Books
          key={item.item_id}
          id={item.item_id}
          author={item.author}
          category={item.category}
          title={item.title}
        />
      ))}
      <AddBooks />
      <Footer recents="facebook" favorites="twitter" nearby="google" />
    </div>
  );
}

export default Home;
