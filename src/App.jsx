import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [bookList, setBookList] = useState([]);
  const [searchBook, setSearchBook] = useState("");

  const findBook = async (text) => {
    try {
      const books = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${text}`
      );
      console.log(books.data.items);
      setBookList(books.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    findBook(searchBook);
  }, [searchBook]);

  const handleSearch = (event) => {
    setSearchBook(event.target.value);
  };

  return (
    <div className="App">
      {/* start coding here */}
      <h1>Find a Book</h1>
      <input
        type="text"
        placeholder="Search your book"
        value={searchBook}
        onChange={handleSearch}
      />
      {bookList
        .filter((items) => {
          if (searchBook === "") {
            return "";
          } else {
            return items.volumeInfo.title.includes(searchBook);
          }
        })
        .map((items) => {
          return (
            <div className="Text">
              <h6>{items.volumeInfo.title}</h6>
            </div>
          );
        })}
    </div>
  );
}

export default App;
