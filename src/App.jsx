import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${data}`
      );
      setBooks(response.data.items);
    } catch (error) {
      console.error("Error data not found", error);
      setBooks([]);
    }
  };

  const handleInputChange = (e) => {
    setData(e.target.value);
    if (e.target.value === "") {
      setBooks([]);
    }
  };

  return (
    <div className="App">
      <h1>Search The Books</h1>
      <div>
        <input
          type="text"
          value={data}
          onChange={handleInputChange}
          placeholder="Enter a word here!"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {books.length > 0 && (
          <ul>
            {books.map((book) => (
              <li key={book.id}>
                <h3>📕{book.volumeInfo.title}</h3>
                <p>🖋️{book.volumeInfo.authors}</p>
                <p>🌍{book.volumeInfo.publishedDate}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
