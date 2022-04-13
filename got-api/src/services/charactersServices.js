import axios from "axios";

const fetchAndSetLocalStorageCharacters = async ({ setCharactersList }) => {
  const savedCharactersList = localStorage.getItem("charactersList");
  const savedCharactersListAsArray = JSON.parse(savedCharactersList);

  if (savedCharactersListAsArray) {
    return savedCharactersListAsArray;
  } else {
    let charactersListTotal = [];
    for (let i = 1; i < 44; i++) {
      const response2 = await axios.get(
        `https://www.anapioficeandfire.com/api/characters?page=${i}&pageSize=50`
      );
      charactersListTotal = charactersListTotal.concat(response2.data);
      localStorage.setItem(
        "charactersList",
        JSON.stringify(charactersListTotal)
      );
      setCharactersList(charactersListTotal);
    }
    return;
  }
};

export { fetchAndSetLocalStorageCharacters };
