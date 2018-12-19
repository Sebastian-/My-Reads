import React from 'react';
import propTypes from 'prop-types';
import Bookshelf from './Bookshelf';
import { formatShelfName } from './utils';
import { Link } from 'react-router-dom';

// TODO: change to functional component if no state required
// TODO: extract list-books and title into app component

class ListShelves extends React.Component {
  static propTypes = {
    books: propTypes.array.isRequired,
    shelves: propTypes.array.isRequired,
    onChangeShelf: propTypes.func.isRequired
  }

  render() {
    const { books, shelves, onChangeShelf } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map((shelf) => (
            <Bookshelf 
              key={shelf} 
              shelfName={formatShelfName(shelf)} 
              books={books.filter((book) => (book.shelf === shelf))}
              onChangeShelf={onChangeShelf}/>
          ))}
        </div>
        <Link className="open-search" to="/search">Search</Link>
      </div>
    );
  }
}

export default ListShelves;
