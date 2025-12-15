import { Book } from '../models/book.js'

function index(req, res) {
  Book.find({})
  .then(books => { // books represents the result of the query, in this case ALL books
    res.render('books/index', {
      books: books,
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}

export {
  index,
}