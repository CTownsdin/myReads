import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

// BookShelf - a branch component, it will have local state which is the contents of the book shelf
class BookShelf extends React.Component {
  constructor (props) {
    super(props)
    this.state = { shelfContents: this.props.shelfContents }
  }

  render () {
    const { shelfContents } = this.state
    const { shelfTitle } = this.props
    const bookElements = shelfContents.map((book) => (
      <li key={book.id}>
        <Book bookData={book} />
      </li>
    ))

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
  shelfContents: PropTypes.array.isRequired,
  shelfTitle: PropTypes.string.isRequired
}
