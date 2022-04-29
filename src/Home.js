import React from 'react';
import Nav from './components/Nav';
import Books from './components/Books';
import AddBooks from './components/AddBooks';

function Home() {
  const data = [
    {
      id: 1,
      genre: 'Action',
      title: 'The Hunger Games',
      director: 'Suzanne Collins',
      percent: 64,
      chapter: 'Chapter 17',
    },
    {
      id: 2,
      genre: 'Science Fiction',
      title: 'Dune',
      director: 'Frank Herbet',
      percent: 8,
      chapter: 'Chapter 3: A lesson learned',
    },
    {
      id: 3,
      genre: 'Economy',
      title: 'Capital',
      director: 'Suzanne Collins',
      percent: 20,
      chapter: 'Introduction',
    },
  ];
  return (
    <div>
      <Nav />
      {data.map((item) => (
        <Books
          key={item.id}
          genre={item.genre}
          title={item.title}
          director={item.director}
          percent={item.percent}
          chapter={item.chapter}
        />
      ))}
      <AddBooks />
    </div>
  );
}

export default Home;
