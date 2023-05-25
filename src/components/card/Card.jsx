import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  return (
    <div className={styles.card}>
      <button
        className={styles.btn}
        onClick={() => {
          onClose(id);
        }}
      >
        ❌
      </button>
      <div className={styles.wrapperText}>
        <Link to={`/detail/${id}`}>
          <h1 className={styles.name}>{name}</h1>
        </Link>
        <div className={styles.details}>
          <h2>{status}</h2>
          <h2>{species}</h2>
          <h2>{gender}</h2>
        </div>
      </div>
      <img className={styles.img} src={image} alt="" />
    </div>
  );
}
