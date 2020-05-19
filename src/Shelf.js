import React, { Component } from "react";
import Book from "./Book";

class Shelf extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.shelfName}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.library.map((book) =>
                book.shelf === this.props.shelfCode ? (
                  <Book
                    book={book}
                    shelf={this.props.shelfCode}
                    onUpdateLibrary={this.props.onUpdateLibrary}
                  />
                ) : (
                  ""
                )
              )}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Shelf;
