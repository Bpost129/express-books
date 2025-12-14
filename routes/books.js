import { Router } from 'express'

import * as booksCtrl from '../controllers/books.js'

const router = Router()

// GET localhost:3000/users
router.get('/', booksCtrl.index)

export { router }
