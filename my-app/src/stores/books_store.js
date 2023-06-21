import booksData from "../core/data/books_data";

export function BooksActions() {

    const getBook = (id) => {
        const book = booksData.find((book) => book.id === id);
        console.log(book);
    }

    const getSingleBook = (id, getBook) => {
        getBook(id)
    }

    const handleButtonCLick = () => {
        alert('Book added to cart');
    }

    const handleFormInput = (e) => {
        console.log(e.target);
        console.log(e.target.value);
        console.log(e.target.name);

    }
    const handleFormSubmitted = (e) => {
        e.preventDefault();
        console.log('test');
    }

    const displayValue = () => {
        console.log('test');
    }


    return {
        handleButtonCLick, handleFormInput, handleFormSubmitted, displayValue, getBook, getSingleBook
    }
}

export default BooksActions
