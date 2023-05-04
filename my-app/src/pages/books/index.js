import React from "react";
import ReactDom from "react-dom/client";
import './stores/books_store';
import './style/index.css';
import BooksActions from "../../stores/books_store";

const actions = BooksActions();

const books = [{
    title: 'I Will Teach You to Be Rich',
    author: 'Ramit Sethi',
    img: "./assets/images/book-one.jpg",
    id: 1,
}, {
    title: 'Greenlights ',
    author: 'Matthew McConaughey',
    img: "https://images-na.ssl-images-amazon.com/images/I/61-Pt+1b+xL._AC_UL600_SR600,400_.jpg",
    id: 2,
},];

function BookList() {
    return (<section className='bookList'>
        {/*<FormsExamples/>*/}
        {books.map((book) => {
            return <Book {...book} key={book.id}/>;
        })}
    </section>);
}

// function FormsExamples() {
//     return (
//         <section>
//             <form>
//                 <h2>Form Example</h2>
//                 <input type="text"
//                        name="Exemple"
//                        onChange={actions.handleFormInput}
//                 />
//                 <button className='button' type={"submit"} onClick={actions.handleFormSubmitted}>submit</button>
//                 <div>
//                     <button className='button' type={"button"} onClick={actions.handleButtonCLick}>Click me</button>
//                 </div>
//             </form>
//         </section>
//     )
// }

function Book({title, author, img}) {
    return (
        <article className='book'>
            <img src={img} alt={title}/>
            <h2>{title}</h2>
            <h4>{author.toUpperCase()}</h4>
            <button className='buyButton' onClick={actions.handleButtonCLick}>Comprar</button>
        </article>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<BookList/>)