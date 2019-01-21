import React from 'react';
import propTypes from 'prop-types';
import BookshelfChanger from './BookshelfChanger';

class Book extends React.Component {

  static propTypes = {
    book: propTypes.object.isRequired,
    onChangeShelf: propTypes.func.isRequired
  }

  state = {
    coverHeight: 0,
    coverWidth: 0
  }

  componentDidMount() {
    this._isMounted = true;

    // Determine cover image dimensions
    const { imageLinks } = this.props.book;
    if(!imageLinks) return;

    new Promise((resolve) => {
      const coverImage = new Image();
      coverImage.src = imageLinks.thumbnail || imageLinks.smallThumbnail;
      coverImage.onload = resolve(coverImage);
    }).then((coverImage) => {
      this.setState({
        coverHeight: coverImage.height > 200 ? 200 : coverImage.height,
        coverWidth: coverImage.width > 130 ? 130 : coverImage.width
      });
    });
  }

  render() {
    const { book } = this.props;
    const { coverHeight, coverWidth } = this.state;
    const coverURL = (
      book.imageLinks ? 
        `url(${book.imageLinks.thumbnail || book.imageLinks.smallThumbnail})` 
        : '');

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div 
              className="book-cover" 
              style={{
                height: coverHeight || 200,
                width: coverWidth || 130,
                backgroundImage: coverURL}}>
            </div>
            <BookshelfChanger 
              shelfOptions={['currentlyReading', 'wantToRead', 'read', 'none']}
              book={book}
              onChangeShelf={this.props.onChangeShelf}/>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors && book.authors.map((author) => (<p key={author}>{author}</p>))}
          </div>
        </div>
      </li>
    );
  }
}

export default Book;