import { Router } from 'express'

import { books } from '../data/book-data.js'

const router = Router()

// GET localhost:3000/users
router.get('/', function(req, res) {
  res.render('books/index', {
    books: books
  })
})

export { router }
