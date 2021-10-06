// Actions
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

// Reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK: {
      const { id } = action;
      return state.filter((book) => book.id !== id);
    }
    default:
      return state;
  }
};

// Action Creators
export function addBook(book) {
  return {
    type: ADD_BOOK,
    book,
  };
}

export function removeBook(id) {
  return {
    type: REMOVE_BOOK,
    id,
  };
}

export default reducer;
