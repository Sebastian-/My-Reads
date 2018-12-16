import React from 'react'
import propTypes from 'prop-types'
import Book from './Book'

// TODO: change to functional component if no state required
// TODO: add default text when no books are present in shelf

class Bookshelf extends React.Component {
  static propTypes = {
    shelfName: propTypes.string.isRequired,
    books: propTypes.array.isRequired,
    shelves: propTypes.array.isRequired
  }

  // Returns the name of the shelf formatted for display 
  // Eg. if name = 'fooBar' returns 'Foo Bar'
  shelfNameToTitle(shelfName) {
    const result = shelfName.replace(/([A-Z])/g, ' $1')
    return result.charAt(0).toUpperCase() + result.slice(1)
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.shelfNameToTitle(this.props.shelfName)}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.filter((book) => (book.shelf === this.props.shelfName))
                  .map((book) => (<Book key={book.id} 
                                        book={book} 
                                        currShelf={this.props.shelfName} 
                                        shelves={this.props.shelves}
                                        onChangeShelf={this.props.onChangeShelf}
                                        />))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf