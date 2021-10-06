import { useSelector } from 'react-redux';
import Book from './Book';

const ListOfBooks = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="container-list-books">
      {
        books.map((book) => (
          <Book key={book.id} title={book.title} genre={book.genre} author={book.author} />
        ))
      }
    </div>
  );
};

export default ListOfBooks;
