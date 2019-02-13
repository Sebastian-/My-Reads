import React from 'react';
import propTypes from 'prop-types';
import BookGrid from './BookGrid';

const Bookshelf = (props) => {
  const { books, shelfName, onChangeShelf } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <BookGrid 
          books={books}
          onChangeShelf={onChangeShelf} />
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  shelfName: propTypes.string.isRequired,
  books: propTypes.array.isRequired,
  onChangeShelf: propTypes.func.isRequired
};

export default Bookshelf;
