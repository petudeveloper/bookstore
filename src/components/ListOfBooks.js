import Book from './Book.js';

const ListOfBooks = () => (
  <div className="container-list-books">
    <Book title="book 1" genre="Action and Adventure" author="petu" />
    <Book title="book 2" genre="Classics" author="petumazo" />
    <Book title="book 3" genre="Fantasy" author="petudeveloper" />
  </div>
);

export default ListOfBooks;
