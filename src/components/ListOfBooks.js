import { useSelector } from 'react-redux';
import Book from './Book';
import AddBookForm from './AddBookForm';

const ListOfBooks = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="container-list-books">
      {
        books.map((book) => (
          <Book key={book.id} title={book.title} id={book.id} />
        ))
      }

      <AddBookForm />
    </div>
  );
};

export default ListOfBooks;
