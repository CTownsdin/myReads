import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

const HomePage = (props) => {
  const currBooks = props.allBooks.filter((book) => book.shelf === 'currentlyReading')
  const wantBooks = props.allBooks.filter((book) => book.shelf === 'wantToRead')
  const readBooks = props.allBooks.filter((book) => book.shelf === 'read')

  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <div>
          <BookShelf shelfContents={currBooks}
            shelfTitle='Currently Reading'
            updateShelf={props.updateShelf} />
          <BookShelf shelfContents={wantBooks}
            shelfTitle='Want to Read'
            updateShelf={props.updateShelf} />
          <BookShelf shelfContents={readBooks}
            shelfTitle='Read'
            updateShelf={props.updateShelf} />
        </div>
      </div>
      <div className='open-search'>
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  )
}

export default HomePage

HomePage.propTypes = {
  allBooks: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
}
