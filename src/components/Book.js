import { PropTypes } from 'prop-types';
import UpdateProgres from './UpdateProgress';

const Book = (props) => {
  const { title, id } = props;

  return (
    <div className="bookInfo">
      <div>
        <span>Fantasy</span>
        <h3>{ title }</h3>
        <span>Pepito Perez</span>
        <div>
          <span>Comments</span>
          <span id={`book${id}`}>Remove</span>
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
