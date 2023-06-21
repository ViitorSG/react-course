import React from "react";

const Book = ({title, author, img, id, getBook}) => {
    const getSingleBook = () => {
        getBook(id);
    }
    return (
        <article className='book'>
            <img src={img} alt={title}/>
            <h2>{title}</h2>
            <h4>{author.toUpperCase()}</h4>
            <button className='buyButton' onClick={getSingleBook}>Comprar</button>
        </article>
    )
}

export default Book;