import React from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class BookShelf extends React.Component {
  constructor (props) {  // this seems to only run one time.
    super(props)
    this.state = { 
      bookIDs: this.props.shelfContents,
      bookObjects: []
    }
  }

  componentWillMount () {
    const { bookIDs, bookObjects } = this.state

    let newBookObjects = []

    bookIDs.forEach((id) => {
      BooksAPI.get(id).then((book) => newBookObjects.push(book))
      .then(() => this.setState({ bookObjects: newBookObjects }))
    })
  }

  render () {
    const bookElements = this.state.bookObjects.map((bookObj) => (    // for each bookObject create an element
      <li key={bookObj.id}>
        <Book bookData={bookObj} handleMovingBooks={this.props.handleMovingBooks}/>
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
  shelfContents: PropTypes.array.isRequired,  // is an array of just book ids, use getBook to query for full book details
  shelfTitle: PropTypes.string.isRequired
}
