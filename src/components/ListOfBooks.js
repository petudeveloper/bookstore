import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useEffect } from 'react';
import Book from './Book';
import AddBookForm from './AddBookForm';
import { loadBooks } from '../redux/books/books';

const ListOfBooks = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const loadBooksAction = bindActionCreators(loadBooks, dispatch);

  useEffect(() => {
    loadBooksAction();
  }, [dispatch]);

  return (
    <div className="container-list-books">
      {
        Object.keys(books).map((id) => (
          <Book
            key={id}
            genre={books[id][0].category}
            id={id}
            title={books[id][0].title}
          />
        ))
      }
      <AddBookForm />
    </div>
  );
};

export default ListOfBooks;
