import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookGrid from './BookGrid'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'


class SearchBooks extends React.Component {
  static propTypes = {
    shelvedBooks: propTypes.array.isRequired,
    onChangeShelf: propTypes.func.isRequired
  }

  state = {
    query: '',
    results: []
  }

  handleChange = (event) => {
    this.setState({ query: event.target.value}, this.search)
  }

  search = () => {
    const { query } = this.state
    const { shelvedBooks } = this.props

    if (!query) return

    BooksAPI.search(query.trim()).then((results) => {
      if(results.error) {
        this.setState({
          results: []
        })
        return
      }
      
      // Books returned by the search endpoint do not have a shelf attribute
      const shelvedIDs = shelvedBooks.reduce((shelvedIDs, book) => {
        shelvedIDs[book.id] = book
        return shelvedIDs
      }, {})
      results = results.map((result) => (shelvedIDs[result.id] || result))
      
      this.setState({
        results: results
      })
    })
  }

  render() {
    const { query, results } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close Search</Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.handleChange} />
          </div>
        </div>
        <div className="search-books-results">
          <BookGrid 
            books={query ? results : []}
            onChangeShelf={this.props.onChangeShelf} />
        </div>
      </div>
    )
  }
}

export default SearchBooks