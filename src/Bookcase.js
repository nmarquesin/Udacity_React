import React, { Component } from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

class Bookcase extends Component {
  state = {};

  shelves = [
    { code: "currentlyReading", name: "Currently Reading" },
    { code: "wantToRead", name: "Want to Read" },
    { code: "read", name: "Read" },
  ];

  render() {
    const { library, updateLibrary } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.shelves.map((shelf) => (
              <Shelf
                shelfName={shelf.name}
                shelfCode={shelf.code}
                library={library}
                onUpdateLibrary={updateLibrary}
              />
            ))}
          </div>
          <div className="open-search">
            <Link to="/search">
              <button>Add a book</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Bookcase;
