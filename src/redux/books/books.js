import getBooks, { addApiBook, removeApiBook } from '../API/api';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

const initialState = [];

export const addBook = (payload) => {
  addApiBook(payload);
  return ({
    type: ADD_BOOK,
    payload,
  });
};

export const removeBook = (payload) => {
  removeApiBook(payload);
  return ({
    type: REMOVE_BOOK,
    payload,
  });
};

export const getApiBooks = () => async (dispatch) => {
  const books = await getBooks();

  dispatch({
    type: GET_BOOKS,
    payload: books,
  });
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BOOK:
      return [...state, payload];
    case REMOVE_BOOK:
      return state.filter((e) => e.id !== payload);
    case GET_BOOKS:
      return [...state, ...payload];
    default:
      return state;
  }
};

export default reducer;
