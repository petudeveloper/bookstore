import { v4 as uuidv4 } from 'uuid';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Zf3WPK19TLPHZbzO75bN/books/';

// Actions
const LOAD = 'bookStore/books/LOAD';

const initialState = [];

// Reducer
export const reducer = (state = initialState, action) => {
  if (action.type === LOAD) {
    return action.state;
  }
  return state;
};

// Action Creators
export const loadBooks = () => async (dispatch) => {
  const response = await fetch(URL);
  const state = await response.json();
  dispatch({ type: LOAD, state });
};

export const addBook = (book) => async (dispatch) => {
  await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      item_id: uuidv4(),
      title: book.title,
      category: book.category,
    }),
  });
  const response = await fetch(URL);
  const state = await response.json();
  dispatch({ type: LOAD, state });
};

export const removeBook = (id) => async (dispatch) => {
  await fetch(URL + id, { method: 'DELETE' });
  const response = await fetch(URL);
  const state = await response.json();
  dispatch({ type: LOAD, state });
};

export default reducer;
