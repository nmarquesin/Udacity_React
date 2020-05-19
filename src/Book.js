import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";

class Book extends Component {
  changeShelf = (event) => {
    BooksAPI.update(this.props.book, event.target.value).then((updateLib) => {
      BooksAPI.getAll().then((newLib) => {
        this.props.onUpdateLibrary(newLib);
      });
    });
  };

  render() {
    const { book, shelf } = this.props;
    if (book === []) return <li />;
    else {
      return (
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage:
                    book.imageLinks !== undefined
                      ? 'url("' + book.imageLinks.thumbnail + '")'
                      : "",
                }}
              />
              <div className="book-shelf-changer">
                <select onChange={this.changeShelf}>
                  <option value="move" disabled>
                    Move to...
                  </option>

                  {shelf === "currentlyReading" ? (
                    <option value="currentlyReading" selected>
                      Currently Reading
                    </option>
                  ) : (
                    <option value="currentlyReading">Currently Reading</option>
                  )}

                  {shelf === "wantToRead" ? (
                    <option value="wantToRead" selected>
                      Want to Read
                    </option>
                  ) : (
                    <option value="wantToRead">Want to Read</option>
                  )}

                  {shelf === "read" ? (
                    <option value="read" selected>
                      Read
                    </option>
                  ) : (
                    <option value="read">Read</option>
                  )}

                  {shelf === "none" ? (
                    <option value="none" selected>
                      None
                    </option>
                  ) : (
                    <option value="none">None</option>
                  )}
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            {book.authors ? (
              book.authors.map((author) => (
                <div className="book-authors">{author}</div>
              ))
            ) : (
              <div className="book-authors">No author info</div>
            )}
          </div>
        </li>
      );
    }
  }
}

export default Book;
