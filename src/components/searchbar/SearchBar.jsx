import styles from "./SearchBar.module.css"
import { useState } from "react";


export default function SearchBar(props) {
  const { onSearch } = props;
  const [ id, setId]  = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  }
  return (
    
    <div className={styles.contenedor}>
    <div className={styles.wapperSearch} >
        <input className={styles.input} type="search" onChange={handleChange} value={id} />
        <button className={styles.btn} onClick={() => { onSearch(id) }}>🔍</button>
    </div>
        
    </div>
  );
}
   