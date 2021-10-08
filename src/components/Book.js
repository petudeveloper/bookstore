import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import UpdateProgres from './UpdateProgress';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { title, id } = props;

  const dispatch = useDispatch();
  const removeBookAction = bindActionCreators(removeBook, dispatch);

  return (
    <div className="bookInfo">
      <div>
        <span className="genre-tittle">Fantasy</span>
        <h3>{ title }</h3>
        <span className="author">Pepito Perez</span>
        <div>
          <button className="comment-btn book-btn" type="button">Comments</button>
          <button className="delete-btn book-btn" type="button" id={`book${id}`} onClick={() => removeBookAction(id)}>Remove</button>
          <button className="edit-btn book-btn" type="button">Edit</button>
        </div>
      </div>
      <UpdateProgres />
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
