import React from 'react'
import PropTypes from 'prop-types'

// <Book /> - a presentational "leaf" component that displays a book
const Book = (props) => (
  <div className='book'>
    <div className='book-top'>
      <div className='book-cover' style={{ 
        width: 128, height: 192, 
        backgroundImage: `url(${props.bookData.imageLinks.smallThumbnail})`
      }} />
      <div className='book-shelf-changer'>
        <select>
          <option value='none' disabled>Move to...</option>
          <option value='currentlyReading'>Currently Reading</option>
          <option value='wantToRead'>Want to Read</option>
          <option value='read'>Read</option>
          <option value='none'>None</option>
        </select>
      </div>
    </div>
    <div className='book-title'>{props.bookData.title}</div>
    <div className='book-authors'>{props.bookData.authors[0]}}</div>
  </div>
)

export default Book

Book.propTypes = {
  bookData: PropTypes.object.isRequired
}
