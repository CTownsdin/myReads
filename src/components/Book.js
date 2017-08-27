import React from 'react'
import PropTypes from 'prop-types'

class Book extends React.Component{

  render(){
    const { bookData, updateShelf } = this.props
    return (
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover' style={{
            width: 128,
            height: 192,
            backgroundImage: `url(${bookData.imageLinks && bookData.imageLinks.smallThumbnail})`
          }} />
          <div className='book-shelf-changer'>
            <select value={bookData.shelf} onChange={(e) => updateShelf(bookData, e.target.value)} >
              <option value='none'>Move to...</option>
              <option value='currentlyReading'>Currently Reading</option>
              <option value='wantToRead'>Want to Read</option>
              <option value='read'>Read</option>
              <option value='none'>None</option>
            </select>
          </div>
        </div>
        <div className='book-title'>{bookData.title}</div>
        <div className='book-authors'>{bookData.authors && bookData.authors[0]}</div>
      </div>
    )
  }
}

export default Book

Book.propTypes = {
  updateShelf: PropTypes.func.isRequired,
  bookData: PropTypes.object.isRequired
}
