import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookGrid from './BookGrid'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

// TODO: extract <ol> of books into separate component
// TODO: add throttle/debounce to searching (https://www.peterbe.com/plog/how-to-throttle-and-debounce-an-autocomplete-input-in-react)
// TODO: remove close search div here

class SearchBooks extends React.Component {
  static propTypes = {
    shelvedBooks: propTypes.object.isRequired,
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

    if(!query) return

    BooksAPI.search(query.trim()).then((results) => {
      if(results.error) {
        this.setState({
          results: []
        })
        return
      }

      // Books returned by the search endpoint do not have a shelf attribute
      results = results.map((result) => {
        if (shelvedBooks[result.id]) {
          result.shelf = shelvedBooks[result.id]
        }
        return result
      })

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
            books={query? results : []}
            onChangeShelf={this.props.onChangeShelf} />
        </div>
      </div>
    )
  }
}

export default SearchBooks