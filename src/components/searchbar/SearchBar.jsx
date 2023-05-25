import styles from "./SearchBar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar(props) {
  const { onSearch } = props;
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };
  function clearImput() {
    setId("");
  }
  function randomCard(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  return (
    <div className={styles.contenedor}>
      <div></div>
      <div></div>
      <div></div>
      <div>
        <Link to="/home" className={styles.link}>
          Home
        </Link>
      </div>
      <div>
        <Link to="/about" className={styles.link}>
          About
        </Link>
      </div>
      <div></div>
      <div className={styles.wapperSearch}>
        <input
          className={styles.input}
          type="search"
          onChange={handleChange}
          value={id}
        />
        <button
          className={styles.btn}
          onClick={() => {
            onSearch(id);
            clearImput();
          }}
        >
          🔍
        </button>
      </div>
      <button
        className={styles.random}
        onClick={() => {
          onSearch(randomCard(826));
          clearImput();
        }}
      >
        Random
      </button>
    </div>
  );
}
