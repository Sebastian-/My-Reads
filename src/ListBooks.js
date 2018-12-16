import React from 'react'
import propTypes from 'prop-types'
import Bookshelf from './Bookshelf'

// TODO: change to functional component if no state required
// TODO: consider passing a filtered list of books into each bookshelf here

class ListBooks extends React.Component {
  static propTypes = {
    books: propTypes.array.isRequired
  }

  render() {
    const shelves = ['currentlyReading', 'wantToRead', 'read']

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map((shelf) => (<Bookshelf key={shelf} 
                                              shelfName={shelf} 
                                              books={this.props.books} 
                                              shelves={shelves} 
                                              onChangeShelf={this.props.onChangeShelf}/>))}
        </div>
      </div>
    )
  }
}

export default ListBooks