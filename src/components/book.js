import { PropTypes } from 'prop-types';

const Book = (props) => {
  const { title, genre, author } = props;

  return (
    <div>
      <span>{ genre }</span>
      <h3>{ title }</h3>
      <span>{ author }</span>
      <div>
        <span>Comments</span>
        <span>Remove</span>
        <span>Edit</span>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
