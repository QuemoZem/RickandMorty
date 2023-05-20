import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import { useState } from 'react';
import axios from "axios"

function App() {
  const [characters, setCharacters] = useState([]);
  
  const onClose = (id) => {
    setCharacters(characters.filter((char) => {
      return char.id !== parseInt(id)
   }))
  }
 const onSearch =  (id)=> {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}
  return (
    <div className='App'>
      <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
