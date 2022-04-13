import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Book from "./components/book";
import { fetchAndSetLocalStorageBooks } from "./services/booksServices";

function App() {
  const [booksList, setBooksList] = useState(null);
  const [charactersList, setCharactersList] = useState(null);

  // make the API requests and set the useStates and local Storage  
  const fetchBooks = async () => {
    const savedBooksListAsArray = await fetchAndSetLocalStorageBooks();
    setBooksList(savedBooksListAsArray);
  };
  const fetchCharacters = async () => {
    const savedCharactersList = localStorage.getItem("charactersList");
    const savedCharactersListAsArray = JSON.parse(savedCharactersList);
    if (savedCharactersListAsArray) {
      setCharactersList(savedCharactersListAsArray);
    } else {
      let charactersListTotal = [];
      for (let i = 1; i < 45; i++) {
        const response2 = await axios.get(
          `https://www.anapioficeandfire.com/api/characters?page=${i}&pageSize=50`
        );
        charactersListTotal = charactersListTotal.concat(response2.data);
        setCharactersList(charactersListTotal);
        localStorage.setItem(
          "charactersList",
          JSON.stringify(charactersListTotal)
        );
      }
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    if (booksList && booksList.length > 0) {
      fetchCharacters();
    }
  }, [booksList]);

  return (
    <div className="App">
      <h1>Infos on Game Of Thrones Books and Characters</h1>
      {booksList &&
        booksList.map((book, index) => {
          return (
            <Book
              key={index}
              book={book}
              index={index}
              charactersList={charactersList}
            />
          );
        })}
    </div>
  );
}

export default App;
