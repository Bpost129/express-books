import { books } from '../data/book-data.js'

function index(req, res) {
  res.render('books/index', {
    books: books
  })
}

export {
  index,
}