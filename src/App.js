import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage'
import { Route } from 'react-router-dom'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      allBooks: []
    }
    this.updateShelf = this.updateShelf.bind(this)
  }

  componentDidMount () {
    BooksAPI.getAll()
      .then((allBooks) => {
        this.setState({ allBooks })
      })
  }

  updateShelf (book, newShelf) {
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

  render () {
    const { allBooks } = this.state

    return (
      <div className='app'>
        <Route exact path='/' render={() => (<HomePage allBooks={allBooks} updateShelf={this.updateShelf} />)} />
        <Route path='/search' render={() => (<SearchPage updateShelf={this.updateShelf} />)} />
      </div>
    )
  }
}

export default App
