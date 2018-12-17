import React from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
//import propTypes from 'prop-types'

// TODO: change to functional component if no state required
// TODO: do not import everything from booksapi if not necessary
// TODO: extract <ol> of books into separate component

class SearchBooks extends React.Component {
  static propTypes = {
  }

  state = {
    query: '',
    results: []
  }

  handleChange = (event) => {
    this.setState({ query: event.target.value}, this.search)
  }

  search = () => {
    console.log(this.state.query)
    BooksAPI.search(this.state.query).then((results) => {
      this.setState({
        results: results || []
      })
    })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input 
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.handleChange} />
            

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.results.map((book) => (<Book key={book.id} 
                                                    book={book} 
                                                    currShelf={book.shelf} 
                                                    shelves={this.props.shelves}
                                                    onChangeShelf={this.props.onChangeShelf}
                                                    />))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks