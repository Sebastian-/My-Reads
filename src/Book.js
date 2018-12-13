import React from 'react'
import propTypes from 'prop-types'

// TODO: change to functional component if no state required

class Book extends React.Component {
  static propTypes = {
    book: propTypes.object.isRequired
  }

  state = {
    coverStyle: {
      height: 0,
      width: 0,
      backgroundImage: ''
    }
  }

  componentDidMount() {
    const coverImage = new Image()
    coverImage.onload = (event) => {
      const img = event.target
      this.setState({
        coverStyle: {
          height: img.height > 200 ? 200 : img.height,
          width: img.width,
          backgroundImage: `url(${img.src})`
        }
      })
    }
    coverImage.src = this.props.book.imageLinks.thumbnail
  }

  render() {
    const { book }= this.props

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={this.state.coverStyle}></div>
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