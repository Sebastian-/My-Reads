import React from 'react'
import propTypes from 'prop-types'
import BookshelfChanger from './BookshelfChanger'

// TODO: change to functional component if no state required

class Book extends React.Component {
  static propTypes = {
    book: propTypes.object.isRequired,
    currShelf: propTypes.string.isRequired,
    shelves: propTypes.array.isRequired
  }

  // TODO: remove backgroundImage since it's a prop
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
    const { book, currShelf, shelves }= this.props

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={this.state.coverStyle}></div>
            <BookshelfChanger currShelf={currShelf} shelves={shelves} book={book} onChangeShelf={this.props.onChangeShelf}/>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors.map((a) => (<p key={a}>{a}</p>))}</div>
        </div>
      </li>
    )
  }
}

export default Book