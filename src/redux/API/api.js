const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/PPlgEfTb30qRhBVluIsR/books';

const getBooks = async () => {
  const response = await fetch(apiUrl);
  const books = await response.json();
  const array = [];
  Object.keys(books).forEach((e) => {
    const id = { id: e };
    array.push({ ...id, ...books[e][0] });
  });
  return array;
};

export const removeApiBook = async (id) => {
  await fetch(`${apiUrl}/${id}`, {
    method: 'delete',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const addApiBook = async (book) => {
  await fetch(`${apiUrl}`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: book.id, title: book.title, author: book.author, category: book.category,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default getBooks;
