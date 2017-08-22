import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const mockBooksArray = [{
  'title': 'The Linux Command Line',
  'subtitle': 'A Complete Introduction',
  'authors': [
    'William E. Shotts, Jr.'
  ],
  'publisher': 'No Starch Press',
  'publishedDate': '2012',
  'description': "You've experienced the shiny, point-and-click surface of your Linux computer—now dive below and explore its depths with the power of the command line. The Linux Command Line takes you from your very first terminal keystrokes to writing full programs in Bash, the most popular Linux shell. Along the way you'll learn the timeless skills handed down by generations of gray-bearded, mouse-shunning gurus: file navigation, environment configuration, command chaining, pattern matching with regular expressions, and more. In addition to that practical knowledge, author William Shotts reveals the philosophy behind these tools and the rich heritage that your desktop Linux machine has inherited from Unix supercomputers of yore. As you make your way through the book's short, easily-digestible chapters, you'll learn how to: * Create and delete files, directories, and symlinks * Administer your system, including networking, package installation, and process management * Use standard input and output, redirection, and pipelines * Edit files with Vi, the world’s most popular text editor * Write shell scripts to automate common or boring tasks * Slice and dice text files with cut, paste, grep, patch, and sed Once you overcome your initial \"shell shock,\" you'll find that the command line is a natural and expressive way to communicate with your computer. Just don't be surprised if your mouse starts to gather dust. A featured resource in the Linux Foundation's \"Evolution of a SysAdmin\"",
  'industryIdentifiers': [
    {
      'type': 'ISBN_13',
      'identifier': '9781593273897'
    },
    {
      'type': 'ISBN_10',
      'identifier': '1593273894'
    }
  ],
  'readingModes': {
    'text': true,
    'image': false
  },
  'pageCount': 480,
  'printType': 'BOOK',
  'categories': [
    'COMPUTERS'
  ],
  'averageRating': 4,
  'ratingsCount': 2,
  'maturityRating': 'NOT_MATURE',
  'allowAnonLogging': true,
  'contentVersion': '1.2.2.0.preview.2',
  'panelizationSummary': {
    'containsEpubBubbles': false,
    'containsImageBubbles': false
  },
  'imageLinks': {
    'smallThumbnail': 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
    'thumbnail': 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
  },
  'language': 'en',
  'previewLink': 'http://books.google.com/books?id=nggnmAEACAAJ&dq=linux&hl=&cd=3&source=gbs_api',
  'infoLink': 'https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api',
  'canonicalVolumeLink': 'https://market.android.com/details?id=book-nggnmAEACAAJ',
  'id': 'nggnmAEACAAJ',
  'shelf': 'currentlyReading'
}, {
  'title': 'The Linux Command Line',
  'subtitle': 'A Complete Introduction',
  'authors': [
    'William E. Shotts, Jr.'
  ],
  'publisher': 'No Starch Press',
  'publishedDate': '2012',
  'description': "You've experienced the shiny, point-and-click surface of your Linux computer—now dive below and explore its depths with the power of the command line. The Linux Command Line takes you from your very first terminal keystrokes to writing full programs in Bash, the most popular Linux shell. Along the way you'll learn the timeless skills handed down by generations of gray-bearded, mouse-shunning gurus: file navigation, environment configuration, command chaining, pattern matching with regular expressions, and more. In addition to that practical knowledge, author William Shotts reveals the philosophy behind these tools and the rich heritage that your desktop Linux machine has inherited from Unix supercomputers of yore. As you make your way through the book's short, easily-digestible chapters, you'll learn how to: * Create and delete files, directories, and symlinks * Administer your system, including networking, package installation, and process management * Use standard input and output, redirection, and pipelines * Edit files with Vi, the world’s most popular text editor * Write shell scripts to automate common or boring tasks * Slice and dice text files with cut, paste, grep, patch, and sed Once you overcome your initial \"shell shock,\" you'll find that the command line is a natural and expressive way to communicate with your computer. Just don't be surprised if your mouse starts to gather dust. A featured resource in the Linux Foundation's \"Evolution of a SysAdmin\"",
  'industryIdentifiers': [
    {
      'type': 'ISBN_13',
      'identifier': '9781593273897'
    },
    {
      'type': 'ISBN_10',
      'identifier': '1593273894'
    }
  ],
  'readingModes': {
    'text': true,
    'image': false
  },
  'pageCount': 480,
  'printType': 'BOOK',
  'categories': [
    'COMPUTERS'
  ],
  'averageRating': 4,
  'ratingsCount': 2,
  'maturityRating': 'NOT_MATURE',
  'allowAnonLogging': true,
  'contentVersion': '1.2.2.0.preview.2',
  'panelizationSummary': {
    'containsEpubBubbles': false,
    'containsImageBubbles': false
  },
  'imageLinks': {
    'smallThumbnail': 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
    'thumbnail': 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
  },
  'language': 'en',
  'previewLink': 'http://books.google.com/books?id=nggnmAEACAAJ&dq=linux&hl=&cd=3&source=gbs_api',
  'infoLink': 'https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api',
  'canonicalVolumeLink': 'https://market.android.com/details?id=book-nggnmAEACAAJ',
  'id': 'nggnmAEACAAJ',
  'shelf': 'currentlyReading'
}, {
  'title': 'The Linux Command Line',
  'subtitle': 'A Complete Introduction',
  'authors': [
    'William E. Shotts, Jr.'
  ],
  'publisher': 'No Starch Press',
  'publishedDate': '2012',
  'description': "You've experienced the shiny, point-and-click surface of your Linux computer—now dive below and explore its depths with the power of the command line. The Linux Command Line takes you from your very first terminal keystrokes to writing full programs in Bash, the most popular Linux shell. Along the way you'll learn the timeless skills handed down by generations of gray-bearded, mouse-shunning gurus: file navigation, environment configuration, command chaining, pattern matching with regular expressions, and more. In addition to that practical knowledge, author William Shotts reveals the philosophy behind these tools and the rich heritage that your desktop Linux machine has inherited from Unix supercomputers of yore. As you make your way through the book's short, easily-digestible chapters, you'll learn how to: * Create and delete files, directories, and symlinks * Administer your system, including networking, package installation, and process management * Use standard input and output, redirection, and pipelines * Edit files with Vi, the world’s most popular text editor * Write shell scripts to automate common or boring tasks * Slice and dice text files with cut, paste, grep, patch, and sed Once you overcome your initial \"shell shock,\" you'll find that the command line is a natural and expressive way to communicate with your computer. Just don't be surprised if your mouse starts to gather dust. A featured resource in the Linux Foundation's \"Evolution of a SysAdmin\"",
  'industryIdentifiers': [
    {
      'type': 'ISBN_13',
      'identifier': '9781593273897'
    },
    {
      'type': 'ISBN_10',
      'identifier': '1593273894'
    }
  ],
  'readingModes': {
    'text': true,
    'image': false
  },
  'pageCount': 480,
  'printType': 'BOOK',
  'categories': [
    'COMPUTERS'
  ],
  'averageRating': 4,
  'ratingsCount': 2,
  'maturityRating': 'NOT_MATURE',
  'allowAnonLogging': true,
  'contentVersion': '1.2.2.0.preview.2',
  'panelizationSummary': {
    'containsEpubBubbles': false,
    'containsImageBubbles': false
  },
  'imageLinks': {
    'smallThumbnail': 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
    'thumbnail': 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
  },
  'language': 'en',
  'previewLink': 'http://books.google.com/books?id=nggnmAEACAAJ&dq=linux&hl=&cd=3&source=gbs_api',
  'infoLink': 'https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api',
  'canonicalVolumeLink': 'https://market.android.com/details?id=book-nggnmAEACAAJ',
  'id': 'nggnmAEACAAJ',
  'shelf': 'currentlyReading'
}]

// BooksShelf is a branch component, it will have local state which is the contents of the book shelf
class BookShelf extends React.Component {
  constructor (props) {
    super(props)
    // this.state = { shelfContents: this.props.shelfContents }
    this.state = { shelfContents: mockBooksArray }
  }

  render () {
    const bookElements = mockBooksArray.map((book) => (
      <li>
        <Book bookData={book} />
      </li>
    ))

    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>Currently Reading</h2>
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
  // shelfContents: PropTypes.array.isRequired
}