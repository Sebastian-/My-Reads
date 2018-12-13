import React from 'react'
import propTypes from 'prop-types'

// TODO: change to functional component if no state required

class Book extends React.Component {
  static propTypes = {
    book: propTypes.object.isRequired
  }

  getCoverStyle() {
    const coverImage = new Image()
    coverImage.src = this.props.book.imageLinks.smallThumbnail
    // Crop to avoid overflowing book-top div
    const height = coverImage.height > 200 ? 200 : coverImage.height

    return {
      width: coverImage.width,
      height: height,
      backgroundImage: `url(${coverImage.src})`
    }
  }

  render() {
    const { book }= this.props
    
    
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={this.getCoverStyle()}></div>
            <div className="book-shelf-changer">
              <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors.map((a) => (<p key={a}>{a}</p>))}</div>
        </div>
      </li>
    )
  }
}

export default Book