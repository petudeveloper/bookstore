import { PropTypes } from 'prop-types';

const Book = (props) => {
  const { title } = props;

  return (
    <div>
      <h1>{ title }</h1>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Book;
