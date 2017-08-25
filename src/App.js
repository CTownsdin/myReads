import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './components/BookShelf'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      showSearchPage: true,
      currIds: [],
      wantIds: [],
      readIds: []
    }
    this.handleMovingBooks = this.handleMovingBooks.bind(this)
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((allBooks) => {
        const currIds = allBooks.filter((b) => b.shelf === 'currentlyReading').map((b) => b.id)
        const wantIds = allBooks.filter((b) => b.shelf === 'wantToRead').map((b) => b.id)
        const readIds = allBooks.filter((b) => b.shelf === 'read').map((b) => b.id)
        this.setState({ currIds, wantIds, readIds })
      })
  }

  // TODO:
  handleMovingBooks(bookData, e) {
    e.preventDefault()  // check e for e.target.bookData  ?
    console.log(e.target.value)
    console.log(bookData)
    // console.log(book.id)  // Y
    // console.log(e.target.value)  // Y

    // BooksAPI.update(book, e.target.value)
    //   .then((updateRes) => this.setState({
    //     currIds: updateRes.currentlyReading,
    //     wantIds: updateRes.wantToRead,
    //     readIds: updateRes.read
    //   }))
  }

  handleMoveABook

  render() {
    const { currIds, wantIds, readIds } = this.state

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
                  <BookShelf shelfContents={currIds} shelfTitle='Currently Reading' handleMovingBooks={this.handleMovingBooks} />
                  <BookShelf shelfContents={wantIds} shelfTitle='Want to Read' handleMovingBooks={this.handleMovingBooks} />
                  <BookShelf shelfContents={readIds} shelfTitle='Read' handleMovingBooks={this.handleMovingBooks} />
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
