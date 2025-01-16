const Book = require('./book.model')

const postBook = async (req, res) => {
    try {
        const newBook = await Book({...req.body});
        await newBook.save();
        res.status(200).send({message: "Book created", book: newBook});
    } catch (error) {
        console.error("Error creating book", error)
        res.status(500).send({message: "Failed to create book"});
    }
}

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().sort({createdAt: -1});
        res.status(200).send(books);
    } catch (error) {
        console.error("Error creating book", error)
        res.status(500).send({message: "Failed to create book"});
    }
}


const getBookById = async (req, res) => {
    try {
        const {id} = req.params;
        const book = await Book.findById(id);
        if(!book) {
            res.status(404).send({message: "Book not Found"})
        }
        res.status(200).send(book);
    } catch (error) {
        console.error("Error to find book", error)
        res.status(500).send({message: "Failed to fetch book"});
    }
}

const updateBook = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, {new: true});
        if(!updatedBook) {
            res.status(404).send({message: "Book not Found"})
        }
        res.status(200).send({
            message: "Book updated successfully",
            book: updatedBook
        });
    } catch (error) {
        console.error("Error update a book", error)
        res.status(500).send({message: "Failed to fetch book"});
    }
}

const deleteBook = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if(!deletedBook) {
            res.status(404).send({message: "Book not Found"})
        }
        res.status(200).send({
            message: "Book deleted successfully",
        });
    } catch (error) {
        console.error("Error update a book", error)
        res.status(500).send({message: "Failed to delete book"});
    }
}

module.exports = {
    postBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
}