import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);
  useEffect(() => {
    console.log(character);
  }, [character]);
  return (
    <div>
      <h2>{character.name}</h2>
      <h2>{character.status}</h2>
      <h2>{character.species}</h2>
      <h2>{character.gender}</h2>
      <h2>{character.origin?.name}</h2>
      <img src={character.image} alt="" />
    </div>
  );
}
