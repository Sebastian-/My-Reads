import React from 'react'
import propTypes from 'prop-types'
import { formatShelfName } from './utils'

class BookshelfChanger extends React.Component {
  static propTypes = {
    shelfOptions: propTypes.array.isRequired,
    book: propTypes.object.isRequired,
    onChangeShelf: propTypes.func.isRequired,
  }

  handleChange = (event) => {
    const { book, onChangeShelf } = this.props
    const newShelf = event.target.value
    
    onChangeShelf(book, newShelf)
  }

  render() {
    const { book, shelfOptions } = this.props

    return (
      <div className="book-shelf-changer">
        <select value={(book.shelf || 'none')} onChange={this.handleChange}>
          <option value="move" disabled>Current Shelf...</option>
          {shelfOptions.map((shelf) => (
            <option key={shelf} value={shelf}>
              {((book.shelf || 'none') === shelf ? '\u2713' : ' ') + ' '
              + formatShelfName(shelf)}
            </option>))}
        </select>
      </div>
    )
  }
}

export default BookshelfChanger