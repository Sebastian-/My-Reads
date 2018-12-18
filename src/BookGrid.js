import React from 'react'
import propTypes from 'prop-types'
import Book from './Book'

// TODO: change to functional component if no state required

class BookGrid extends React.Component {
  static propTypes = {
    books: propTypes.array.isRequired,
    onChangeShelf: propTypes.func.isRequired,
  }

  render() {
    const { books, onChangeShelf } = this.props

    return (
      <ol className="books-grid">
        {books.map((book) => (
          <Book 
            key={book.id}
            book={book}
            onChangeShelf={onChangeShelf}/>
        ))}
      </ol>
    )
  }
}

export default BookGrid