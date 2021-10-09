import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useEffect, useState } from 'react';
import Book from './Book';
import AddBookForm from './AddBookForm';
import { loadBooks } from '../redux/books/books';

const ListOfBooks = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const loadBooksAction = bindActionCreators(loadBooks, dispatch);

  const [progress, updateProgress] = useState([]);

  useEffect(() => {
    loadBooksAction();
  }, [dispatch]);

  const addProgress = () => {
    progress.unshift(0);
    updateProgress(progress);
  };

  const onclickUpdateProgres = (index) => {
    const newProgres = [...progress];
    newProgres[index] += 1;
    updateProgress(newProgres);
  };

  return (
    <div className="container-list-books">
      {
        Object.keys(books).map((id, index) => (
          <Book
            key={id}
            genre={books[id][0].category}
            id={id}
            title={books[id][0].title}
            progress={progress[index]}
            onclickUpdateProgres={onclickUpdateProgres}
            index={index}
          />
        ))
      }
      <AddBookForm addProgress={addProgress} />
    </div>
  );
};

export default ListOfBooks;
