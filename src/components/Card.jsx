import styles from './Card.module.css'

export default function Card({
  name,
  status,
  species,
  gender,
  origin,
  image,
  onclose,
}) {
  return (
    <div className= {styles.listItem}>
      <button onClick={onclose}>X</button>
      <img src={image} alt="" />
      <h2>{name}</h2>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin.name}</h2>
    </div>
  );
}
