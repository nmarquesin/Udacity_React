import React from "react";
import { Route } from "react-router-dom";
import Bookcase from "./Bookcase";
import Search from "./Search";
import * as BooksAPI from "./BooksAPI";

import "./App.css";

class BooksApp extends React.Component {
  state = {
    library: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((allBooks) => {
      return this.setState(() => ({
        library: allBooks,
      }));
    });
  }

  updateLibrary = (newLib) => {
    this.setState(() => ({
      library: newLib,
    }));
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <Bookcase
              library={this.state.library}
              updateLibrary={this.updateLibrary}
            />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <Search
              library={this.state.library}
              updateLibrary={this.updateLibrary}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
