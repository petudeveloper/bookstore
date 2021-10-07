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
        <span>Fantasy</span>
        <h3>{ title }</h3>
        <span>Pepito Perez</span>
        <div>
          <span>Comments</span>
          <button type="button" id={`book${id}`} onClick={() => removeBookAction(id)}>Remove</button>
          <span>Edit</span>
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
