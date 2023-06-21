import React from "react";
import ReactDom from "react-dom/client";
import './style/index.css';
import BooksActions from "./stores/books_store";
import Book from "./components/book_component";
import booksData from "./core/data/books_data";

const actions = BooksActions();

function BookList() {
    return (
        <section className='bookList'>
        {booksData.map((book) => {
            return <Book {...book} key={book.id} getBook={actions.getBook}/>;
        })}
        </section>);
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<BookList/>)