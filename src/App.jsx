import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // สร้าง HTML tag
  // สร้าง use state 2 อัน
  // มีกี่state
  // กี่ event
  // whats call back
  //define callback

  //data searching fetching
  // look at api, methd and end point

  //axios, exucute
  //create req in function nad update state
  // excute in useeffect [searchText]
  // bring info freom respond to render
  const [searchBook, setSearchBook] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getBook = async (text) => {
    try {
      const fetchBook = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${text}`
      );
      // console.log(fetchBook);
      setSearchBook(fetchBook.data.items);
      // console.log (searchBook)
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    if (searchText) {
      getBook(searchText);
    }
  }, [searchText]);

  return (
    <div className="App">
      {/* start coding here */}
      <h1> HEADER JA</h1>
      <input
        type="text"
        placeholder="INPUT JA"
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      />
      {/* map ja */}
      {searchBook.map((item, index) => {
        return (
          <ul key={index}>
            <li>{item.volumeInfo.title}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
