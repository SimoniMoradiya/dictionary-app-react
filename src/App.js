import React, { useState } from "react";
import Axios from "axios";
import "./App.css";
import Search from "./SearchBar";
import Definition from "./Definition";

function App() {
  const [data, setData] = useState("");
  const [searchWord, setSearchWord] = useState("");

  function getMeaning() {
    Axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`
    ).then((response) => {
      setData(response.data[0]);
    });
  }

  

  return (
    <div className="App">
      <h1>Free Dictionary</h1>
      <Search
        setSearchWord={setSearchWord}
        getMeaning={getMeaning}
      />
      {data && (
        <Definition
          data={data}
        />
      )}
    </div>
  );
}

export default App;
