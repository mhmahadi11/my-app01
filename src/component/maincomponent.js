
import { Component } from "react";
import Book from "./book";


class MainComponent extends Component {

    state = {

        book: [
            { bookName: 'bela', writerName: 'Arif Azad' },
            { bookName: 'message', writerName: 'Azhari' },
            { bookName: 'message', writerName: 'Azhari' },
            { bookName: 'message', writerName: 'Azhari' },
            { bookName: 'message', writerName: 'Azhari' },
            { bookName: 'message', writerName: 'Azhari' },
            { bookName: 'message', writerName: 'Azhari' },


        ],

        showBooks: true,


    };

    deleteBlokItem = (index) => {
        const books = [...this.state.book];
        books.splice(index, 1);
        this.setState({
            book: books,
        })

    }

    onChangeName = (e, i) => {
        const books = {
            ...this.state.book[i] // copy book index object
        }
        books.bookName = e.target.value; //input value submit korlam

        const book = [...this.state.book]; /// duplicate book object
        book[i] = books;  /// duplicate book object index (books theke ene book a paste korlam)

        this.setState({
            book: book
        })

    }

    toggle = () => {
        this.setState({
            showBooks: !this.state.showBooks,
        })
    }

    render() {
        let book = null;
        if (this.state.showBooks) {

            book = this.state.book.map((item, index) => {
                return <Book bookName={item.bookName} deleteItem={() => this.deleteBlokItem(index)} changeName={(event) => this.onChangeName(event, index)} />

            })
        }


        console.log(book);
        return (
            <div className="App">
                {/* <button onClick={this.deleteBlokItem} > click here </button> */}

                <button onClick={this.toggle}>Toggle</button>
                {book}

            </div>
        );
    }



}

export default MainComponent;