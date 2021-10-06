import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const bookGenres = [
  'Action and Adventure',
  'Classics',
  'Comic Book or Graphic Novel',
  'Detective and Mystery',
  'Fantasy',
  'Historical Fiction',
  'Science Fiction',
  'Horror',
  'Literary Fiction',
  'Romance',
  'Science Fiction (Sci-Fi)',
  'Suspense and Thrillers',
];

const AddBookForm = () => {
  const dispatch = useDispatch();
  const createBookAction = bindActionCreators(addBook, dispatch);

  const [title, updateTitle] = useState('');
  const [author, updateAuthor] = useState('');

  const setTitle = (e) => updateTitle(e.target.value);
  const setAuthor = (e) => updateAuthor(e.target.value);

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(), // make sure it's unique
      title,
      author,
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    createBookAction(newBook);
    updateTitle('');
    updateAuthor('');
  };

  return (
    <div>
      <h3>Add New Book</h3>
      <form className="form" onSubmit={submitBookToStore}>
        <input type="text" placeholder="Book Title" onChange={setTitle} />
        <select className="addBookGenre fontStyle9 fontColor4" onChange={setAuthor}>
          {
          bookGenres.map((genres) => (
            <option key="book-id" value={genres}>{genres}</option>
          ))
        }
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
