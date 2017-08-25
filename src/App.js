import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './components/BookShelf'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      showSearchPage: true,
      allBooks: []
    }
    this.handleMovingBooks = this.handleMovingBooks.bind(this)
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((allBooks) => {
        this.setState({ allBooks })
      })
  }

  handleMovingBooks(){
    console.log('imagine moving books')
  }

  render() {
    const { allBooks } = this.state

    const currBooks = allBooks.filter((book) => book.shelf === 'currentlyReading')
    const wantBooks = allBooks.filter((book) => book.shelf === 'wantToRead')
    const readBooks = allBooks.filter((book) => book.shelf === 'read')
    
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
                  <BookShelf shelfContents={currBooks} 
                    shelfTitle='Currently Reading' 
                    handleMovingBooks={this.handleMovingBooks} />
                  <BookShelf shelfContents={wantBooks} 
                    shelfTitle='Want to Read' 
                    handleMovingBooks={this.handleMovingBooks} />
                  <BookShelf shelfContents={readBooks} 
                    shelfTitle='Read' 
                    handleMovingBooks={this.handleMovingBooks} />
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
