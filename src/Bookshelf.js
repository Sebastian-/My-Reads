import React from 'react'
import propTypes from 'prop-types'
import BookGrid from './BookGrid'

// TODO: change to functional component if no state required
// TODO: add default text when no books are present in shelf

class Bookshelf extends React.Component {
  static propTypes = {
    shelfName: propTypes.string.isRequired,
    books: propTypes.array.isRequired,
    onChangeShelf: propTypes.func.isRequired
  }

  render() {
    const { books, shelfName, onChangeShelf } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <BookGrid 
            books={books}
            onChangeShelf={onChangeShelf} />
        </div>
      </div>
    )
  }
}

export default Bookshelf