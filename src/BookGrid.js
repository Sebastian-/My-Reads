import React from 'react';
import propTypes from 'prop-types';
import Book from './Book';

const BookGrid = (props) => {
  const { books, onChangeShelf } = props;

  return (
    <ol className="books-grid">
      {books.map((book) => (
        <Book 
          key={book.id}
          book={book}
          onChangeShelf={onChangeShelf}/>
      ))}
    </ol>
  );
};

BookGrid.propTypes = {
  books: propTypes.array.isRequired,
  onChangeShelf: propTypes.func.isRequired,
};

export default BookGrid;
