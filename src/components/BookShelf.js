import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends React.Component {
  // TODO:  extract a createBookElements utility?
  // use in BookShelf and also on Search page.

  render () {
    const bookElements = this.props.shelfContents.map((book) => (
      <li key={book.id}>
        <Book bookData={book} updateShelf={this.props.updateShelf} />
      </li>
    ))

    const { shelfTitle } = this.props

    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{ shelfTitle }</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            { bookElements }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf

BookShelf.propTypes = {
  updateShelf: PropTypes.func.isRequired,
  shelfContents: PropTypes.array.isRequired,  // array of book objects
  shelfTitle: PropTypes.string.isRequired
}
