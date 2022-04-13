import axios from "axios";

const fetchAndSetLocalStorageBooks = async () => {
  // get the local storage value ad parse it to access as array
  const savedBooksList = localStorage.getItem("booksList");
  const savedBooksListAsArray = JSON.parse(savedBooksList);

  // return the array if already stored in the local storage OR make the
  // api request then set the local storage and return the array
  if (savedBooksListAsArray) {
    return savedBooksListAsArray;
  } else {
    const response = await axios.get(
      "https://www.anapioficeandfire.com/api/books?pageSize=30"
    );
    localStorage.setItem("booksList", JSON.stringify(response.data));
    return response.data;
  }
};

export { fetchAndSetLocalStorageBooks };
