import React from 'react'
import propTypes from 'prop-types'
import Book from './Book'

// TODO: change to functional component if no state required

class BookGrid extends React.Component {
  static propTypes = {
    books: propTypes.array.isRequired
  }

  render() {
    return (
      <ol className="books-grid">
        {this.props.books.map((book) => (<Book key={book.id} 
                                    book={book} 
                                    currShelf={book.shelf}
                                    shelves={this.props.shelves}
                                    onChangeShelf={this.props.onChangeShelf}
                                    />))}
      </ol>
    )
  }
}

export default BookGrid