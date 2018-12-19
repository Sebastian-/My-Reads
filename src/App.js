import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListShelves from './ListShelves'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books
      })
    })
  }

  changeShelf = (book, newShelf) => {
    if (book.shelf === newShelf) return
    
    if(!book.shelf) {
      book.shelf = newShelf
      this.setState((prevState) => ({
        books: prevState.books.concat(book)
      }))
      return
    }

    this.setState((prevState) => ({
      books: prevState.books.map((b) => {
        if (b.id === book.id) {
          b.shelf = newShelf
        } 
        return b
      })
    }));

    BooksAPI.update(book, newShelf)
  }

  render() {
    return (
      <div className="app">
        <Route 
          exact path="/"
          render={() => (
            <ListShelves
              books={this.state.books}
              onChangeShelf={this.changeShelf}
              shelves={['currentlyReading', 'wantToRead', 'read']}/>
          )} />
        <Route 
          exact path="/search"
          render={() => (
            <SearchBooks
              shelvedBooks={this.state.books}
              onChangeShelf={this.changeShelf} />
          )} />
      </div>
    )
  }
}

export default BooksApp
