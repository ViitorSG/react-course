export function BooksActions() {

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

    return {
        handleButtonCLick, handleFormInput, handleFormSubmitted
    }
}

export default BooksActions
