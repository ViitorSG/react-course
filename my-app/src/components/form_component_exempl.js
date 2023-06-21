import React from "react";
import BooksActions from "../stores/books_store";

function FormsExamples() {
    const actions = BooksActions();

    return (
        <section>
            <form>
                <h2>Form Example</h2>
                <input type="text"
                       name="Exemple"
                       onChange={actions.handleFormInput}
                />
                <button className='button' type={"submit"} onClick={actions.handleFormSubmitted}>submit</button>
                <div>
                    <button className='button' type={"button"} onClick={actions.handleButtonCLick}>Click me</button>
                </div>
            </form>
        </section>
    )
}

export default FormsExamples;