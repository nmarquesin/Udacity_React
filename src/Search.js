import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import { Link } from "react-router-dom";

class Search extends Component {
  state = {
    search: "",
    books: [],
  };

  updateState = (searchText) => {
    this.setState(() => ({
      search: searchText,
    }));
    this.updateStateBooks(searchText);
  };

  async updateStateBooks(searchText) {
    try {
      let result = await BooksAPI.search(searchText);
      if (result.error) {
        this.setState(() => ({
          books: [],
        }));
      } else {
        this.setState(() => ({
          books: result,
        }));
      }
    } catch (e) {
      this.setState(() => ({
        books: [],
      }));
    }
  }

  cleanSearch = () => {
    this.updateState("");
  };

  checkShelf = (book) => {
    const hasShelf = this.props.library.filter((item) => item.id === book.id);
    const bookShelf = hasShelf.length !== 0 ? hasShelf[0].shelf : "none";

    return bookShelf;
  };

  render() {
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                placeholder="Search by title or author"
                type="text"
                value={this.state.search}
                onChange={(event) => this.updateState(event.target.value)}
              />
            </div>
          </div>
          <div style={{ paddingTop: "100px" }}>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <ol className="books-grid">
                {this.state.books.map((book) => (
                  <Book
                    book={book}
                    shelf={this.checkShelf(book)}
                    library={this.props.library}
                    onUpdateLibrary={this.props.updateLibrary}
                  />
                ))}
              </ol>
            </div>
            {this.state.books.length === 0 &&
              this.state.search.length !== 0 && <p>No books were found.</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
