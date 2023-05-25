import "./App.css";
// import Card from './components/Card.jsx';//no usar
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav";
import { useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";

function App() {
  const [characters, setCharacters] = useState([]);

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
  };

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
