import React from 'react';



const books = (props) => {
    return (
        <div>
            <h1 onClick={props.deleteItem} > Name:{props.bookName}</h1>
            <input onChange={props.changeName} />
        </div>

    )
}



export default books;