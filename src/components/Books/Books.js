import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from '../AddBook/AddBook';
import Book from '../Book/Book';
import './Books.css';

function Books() {
  const list = useSelector((state) => state.booksReducers.list);
  const randomNumber = Math.floor((Math.random() * 100) + 1);
  const stringRandom = randomNumber.toString();
  return (
    <div>
      <div>
        {
                    list.map((elem) => (
                      <div key={elem.item_id}>
                        <div className="card">
                          <Book title={elem.title} author={elem.author} category={elem.category} progress={stringRandom} chapter="Chapter 17" id={elem.item_id} />
                        </div>
                      </div>
                    ))
                }
      </div>
      <div className="hr"> </div>
      <AddBook />
    </div>
  );
}

export default Books;
