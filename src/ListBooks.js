import React from 'react'
import propTypes from 'prop-types'

// TODO: change to functional component if no state required

class ListBooks extends React.Component {
  static propTypes = {
    books: propTypes.array.isRequired
  }

  render() {
    const shelves = ['currentlyReading', 'wantToRead', 'read']

    return (
      <div className='list-books'>
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map((shelf) => (<Bookshelf />))}
        </div>
      </div>
    )
  }
}

export default ListBooks