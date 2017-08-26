import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
// import BookShelf from './components/BookShelf'
import Home from './components/Home'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      allBooks: []
    }
    this.updateShelf = this.updateShelf.bind(this)
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((allBooks) => {
        this.setState({ allBooks })
      })
  }

  updateShelf(book, newShelf) {
    BooksAPI.update(book, newShelf)
      .then((res) => {    //  since we know it moved, ignore the res and change the shelf on book manually, 
        book.shelf = newShelf
        this.setState((state) => ({    // new state is the same as the old state, except this one book has changed
          allBooks: state.allBooks.filter(b => b.id !== book.id).concat([book])
        }))
      })
      .catch((err) => {
        console.log(`updateShelf error! - ${err}`)
      })
  }

  render() {
    const { allBooks } = this.state

    return (
      <div className='app'>
        <Route exact path='/' render={() => (<Home allBooks={allBooks} updateShelf={this.updateShelf} />)} />
        <div className='open-search'>
          {/* <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>   FIX ME */}
        </div>
      </div>
      // <div className='app'>      
      //   {this.state.showSearchPage ? (
      //     <div className='search-books'>
      //       <div className='search-books-bar'>
      //         <a className='close-search' onClick={() => this.setState({ showSearchPage: false })}>Close</a>
      //         <div className='search-books-input-wrapper'>
      //           <input type='text' placeholder='Search by title or author' />
      //         </div>
      //       </div>
      //       <div className='search-books-results'>
      //         <ol className='books-grid' />
      //       </div>
      //     </div>
      //   ) : (
      //       <div className='list-books'>
      //         <div className='list-books-title'>
      //           <h1>MyReads</h1>
      //         </div>
      //         <div className='list-books-content'>
      //           <div>
      //             <BookShelf shelfContents={currBooks}
      //               shelfTitle='Currently Reading'
      //               updateShelf={this.updateShelf} />
      //             <BookShelf shelfContents={wantBooks}
      //               shelfTitle='Want to Read'
      //               updateShelf={this.updateShelf} />
      //             <BookShelf shelfContents={readBooks}
      //               shelfTitle='Read'
      //               updateShelf={this.updateShelf} />
      //           </div>
      //         </div>
      //         <div className='open-search'>
      //           <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
      //         </div>
      //       </div>
      //     )}
      // </div>
    )
  }
}

export default App
