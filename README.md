## How to run this app
`$ npm install`    
`$ npm start`

## Backend Server - notes
To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results. 

## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## a Book JSON
A book example JSON object    
```
{
    "title": "The Linux Command Line",
    "subtitle": "A Complete Introduction",
    "authors": [
        "William E. Shotts, Jr."
    ],
    "publisher": "No Starch Press",
    "publishedDate": "2012",
    "description": "You've experienced the shiny, point-and-click surface of your Linux computer—now dive below and explore its depths with the power of the command line. The Linux Command Line takes you from your very first terminal keystrokes to writing full ... you overcome your initial \"shell shock,\" you'll find that the command line is a natural and expressive way to communicate with your computer. Just don't be surprised if your mouse starts to gather dust. A featured resource in the Linux Foundation's \"Evolution of a SysAdmin\"",
    "industryIdentifiers": [
        {
            "type": "ISBN_13",
            "identifier": "9781593273897"
        },
        {
            "type": "ISBN_10",
            "identifier": "1593273894"
        }
    ],
    "readingModes": {
        "text": true,
        "image": false
    },
    "pageCount": 480,
    "printType": "BOOK",
    "categories": [
        "COMPUTERS"
    ],
    "averageRating": 4,
    "ratingsCount": 2,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": true,
    "contentVersion": "1.2.2.0.preview.2",
    "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
    },
    "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=nggnmAEACAAJ&dq=linux&hl=&cd=3&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api",
    "canonicalVolumeLink": "https://market.android.com/details?id=book-nggnmAEACAAJ",
    "id": "nggnmAEACAAJ",
    "shelf": "currentlyReading"
  }
```

### ideas for extras
book animations
book details page
if a book is already on a shelf, then when it comes up in search results, it should show a status icon on it.
a bug: The Linux Command Line - Book is in the DB 3 times, this could be checked for
