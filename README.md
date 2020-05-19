# MyReads Project

This is the final assessment project for Udacity's React Fundamentals course.

## Install

To install the project:

- Install the project by typing `npm install` on your console from inside the project folder.
- Start the server with `npm start`.
- On your browser, go to http://localhost:3000/ - this is a development build of the project, not a production optimized one.

## Navigation

The app consists of two pages: Bookcase and Search.

The root page is a bookcase with books organised in three different shelfs.

- To move a book between shelfs select a different boolkshelf on a book's green button.
- Selecting "none" will remove the book from the bookcase.

The search page can be reached by clicking on the "+" button on the bookcase page or by typing http://localhost:3000/ on your browser. It consists of an input field for searches and search result will show underneath. It's possible to add a book to your bookcase by selecting a shelf on the book's green button.

## What You're Getting

The project template had the following files originaly:

```bash
├── CONTRIBUTING.md
├── README.md
├── SEARCH_TERMS.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── BooksAPI.js
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css
    └── index.js
```

The following files were either edited or included:

```bash
├── README.md - This file.
├── package.json
└── src
    ├── App.js
    └── Book.js
    └── Bookcase.js
    └── index.js
    └── Search.js
    └── Shelf.js
```
