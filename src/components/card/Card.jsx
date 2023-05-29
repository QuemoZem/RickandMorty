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
      </div>
      <img className={styles.img} src={image} alt="" />
    </div>
  );
}
