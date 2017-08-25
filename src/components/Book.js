import React from 'react'
import PropTypes from 'prop-types'

class Book extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const { bookData } = this.props
    return (
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover' style={{
            width: 128,
            height: 192,
            backgroundImage: `url(${bookData.imageLinks.smallThumbnail})`
          }} />
          <div className='book-shelf-changer'>
            <select value={bookData.shelf} onChange={this.props.handleMovingBooks} >
              <option value='none' disabled>Move to...</option>
              <option value='currentlyReading'>Currently Reading</option>
              <option value='wantToRead'>Want to Read</option>
              <option value='read'>Read</option>
              <option value='none'>None</option>
            </select>
          </div>
        </div>
        <div className='book-title'>{bookData.title}</div>
        <div className='book-authors'>{bookData.authors[0]}}</div>
      </div>
    )
  }
}

export default Book

Book.propTypes = {
  handleMovingBooks: PropTypes.func.isRequired,
  bookData: PropTypes.object.isRequired
}
