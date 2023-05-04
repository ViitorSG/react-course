import React from "react";
import ReactDom from "react-dom/client";

// function Welcome() {
//     return <div>
//         <h1>Bem vindo ao meu primeiro app</h1>
//     </div>
// }

// function Welcome() {
//     return React.createElement('h2', {} , 'Hello Word');
// }

// function Welcome()       {
//     return React.createElement(
//         'div',
//         {},
//     React.createElement('h2', {} , 'Hello Word')
//     );
// }

const Person = () => <h2>Victor rafael</h2>;
const Message = () => {
    return <p>Uma mensagem</p>
}

function NextComponent() {    return (
        <div>
            <Person/>
            <Message/>
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<NextComponent/>)