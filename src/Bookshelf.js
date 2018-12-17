import React from 'react'
import propTypes from 'prop-types'
import BookGrid from './BookGrid';

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
          <BookGrid books={this.props.books} onChangeShelf={this.props.onChangeShelf} shelves={this.props.shelves} />
        </div>
      </div>
    )
  }
}

export default Bookshelf