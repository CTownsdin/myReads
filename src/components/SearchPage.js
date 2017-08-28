import React from 'react'
import { Link } from 'react-router-dom'
import DebounceInput from 'react-debounce-input'
import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [],
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(searchStr) {
    BooksAPI.search(searchStr, 20)    // maxResults = 20
      .then((books) => books.map(b => b.id))
      .then((ids) => ids.map((id) => BooksAPI.get(id)))   // need to get the version of the books with the .shelf property on them
      .then((booksPromises) => Promise.all(booksPromises))
      .then((books) => this.setState({ searchResults: books }))
      .catch((err) => console.warn(`handleSearch err - ${err}`))
  }

  render() {
    const bookElements = this.state.searchResults.map(book =>
      (<li key={book.id}>
        <Book bookData={book} updateShelf={this.props.updateShelf} />
      </li>)
    )
    console.log(`bookElements - ${bookElements}`);

    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/' className='close-search'>Close</Link>
          <div className='search-books-input-wrapper'>
            {/* <input type='text' placeholder='Search by title or author' /> */}
            <DebounceInput
              placeholder='Search by title or author'
              minLength={2}
              debounceTimeout={400}
              onChange={e => this.handleSearch(e.target.value)} />
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid' >
            {bookElements}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage

SearchPage.propTypes = {
  updateShelf: PropTypes.func.isRequired,
}
