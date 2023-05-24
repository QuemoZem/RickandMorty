import styles from './Card.module.css'

export default function Card({id,name,status,species,gender,origin,image,onClose
}) {
  return (
    <div className={styles.card}>
      <button className={styles.btn} onClick={ ()=>{onClose(id)}}>[X]</button>
      <div className={styles.wrapperText} >
      <h1 className={styles.name}>{name}</h1>
      <div className={styles.details}>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin.name}</h2> 
      </div>
      </div>
      <img className={styles.img} src={image} alt="" />
    </div>
  );
}   
  