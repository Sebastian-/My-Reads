import React from 'react'
import propTypes from 'prop-types'

// TODO: change to functional component if no state required

class Bookshelf extends React.Component {
  static propTypes = {
    name: propTypes.string.isRequired,
    books: propTypes.array.isRequired
  }

  // Returns the name of the shelf formatted for display 
  // Eg. if name = 'fooBar' returns 'Foo Bar'
  shelfNameToTitle() {
    const result = this.props.name.replace(/([A-Z])/g, ' $1')
    return result.charAt(0).toUpperCase() + result.slice(1)
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.shelfNameToTitle()}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.filter((book) => (book.shelf === this.props.name))
                  .map((book) => (<li>{book.title}</li>))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf