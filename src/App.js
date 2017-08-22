import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './components/BookShelf'

class App extends React.Component {
  constructor () {
    super()
    this.state = { 
      showSearchPage: true, 
      bookState: [] 
    }
  }

  componentDidMount () {
    BooksAPI.getAll()
      .then((bookState) => this.setState({ bookState }))
  }

  render () {
    const { bookState } =  this.state
    const currentContents = bookState.filter((book) => book.shelf === 'currentlyReading')
    const wantContents    = bookState.filter((book) => book.shelf === 'wantToRead')
    const readContents    = bookState.filter((book) => book.shelf === 'read')

    return (
      <div className='app'>
        {this.state.showSearchPage ? (
          <div className='search-books'>
            <div className='search-books-bar'>
              <a className='close-search' onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className='search-books-input-wrapper'>
                <input type='text' placeholder='Search by title or author' />
              </div>
            </div>
            <div className='search-books-results'>
              <ol className='books-grid' />
            </div>
          </div>
        ) : (
          <div className='list-books'>
            <div className='list-books-title'>
              <h1>MyReads</h1>
            </div>
            <div className='list-books-content'>
              <div>
                <BookShelf shelfContents={currentContents} shelfTitle="Currently Reading" />
                <BookShelf shelfContents={wantContents} shelfTitle="Want to Read" />
                <BookShelf shelfContents={readContents} shelfTitle="Read" />
              </div>
            </div>
            <div className='open-search'>
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default App
