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

const AddBookForm = () => (
  <div>
    <h3>Add New Book</h3>
    <form className="form">
      <input type="text" placeholder="Book Title" />
      <select className="addBookGenre fontStyle9 fontColor4">
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

export default AddBookForm;
