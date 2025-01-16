const express = require('express')
const Book = require('./book.model')
const { 
    postBook, 
    getAllBooks, 
    getBookById, 
    updateBook,
    deleteBook
} = require('./book.controller')
const verifyAdminToken = require('../middleware/verifyAdminToken')
const router = express.Router()

//post = 'who'
//get
//put/patch
//delete
router.post("/create-book", verifyAdminToken, postBook)

// get all books
router.get("/", getAllBooks)

// get book by id
router.get('/:id', getBookById)

// edit book by id
router.get('/edit/:id', verifyAdminToken, updateBook)

// delete book by id
router.delete('/:id', verifyAdminToken, deleteBook)

module.exports = router;