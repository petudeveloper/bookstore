import { PropTypes } from 'prop-types';
import UpdateProgres from './UpdateProgress';

const Book = (props) => {
  const { title, genre, author } = props;

  return (
    <div className="bookInfo">
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
      <UpdateProgres />
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
