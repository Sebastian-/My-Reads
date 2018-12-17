import React from 'react'
import propTypes from 'prop-types'

// TODO: change to functional component if no state required
// TODO: refactor so that shelfNameToTitle is not duplicated here and in Bookshelf
// TODO: handle changing shelves and updating server at the same time

class BookshelfChanger extends React.Component {
  static propTypes = {
    shelves: propTypes.array.isRequired,
    currShelf: propTypes.string.isRequired
  }

  shelfNameToTitle(shelfName) {
    const result = shelfName.replace(/([A-Z])/g, ' $1')
    return result.charAt(0).toUpperCase() + result.slice(1)
  }

  handleChange = (event) => {
    event.preventDefault()
    
    if(this.props.onChangeShelf) {
        this.props.onChangeShelf(this.props.book, event.target.value)
    }
  }

  render() {
    const { shelves, currShelf } = this.props

    return (
      <div className="book-shelf-changer">
        <select value={this.props.currShelf} onChange={this.handleChange}>
          <option value="move" disabled>Move to...</option>
          {shelves.map((shelf) => (<option key={shelf} value={shelf}>{(currShelf === shelf ? '*  ' : '   ') + this.shelfNameToTitle(shelf)}</option>))}
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookshelfChanger