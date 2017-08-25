import React from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class BookShelf extends React.Component {  // Could this be a SFC ?
  constructor (props) {
    super(props)
  }

  render () {
    const bookElements = this.props.shelfContents.map((book) => (    // for each bookObject create an element
      <li key={book.id}>
        <Book bookData={book} handleMovingBooks={this.props.handleMovingBooks}/>
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
  handleMovingBooks: PropTypes.func.isRequired,
  shelfContents: PropTypes.array.isRequired,  // array of book objects
  shelfTitle: PropTypes.string.isRequired
}
