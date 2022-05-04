const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/DBnb0WWdoqF1ZP2E2ldq/books';
export const fetchBook = async () => {
  const res = await fetch(url);
  return res.json();
};
export const postBook = async (id, title, author, category) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: id,
      title,
      author,
      category,
    }),
  });
  return res.text();
};

export const deleteBook = async (id) => {
  const res = await fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  return res.text();
};
