import Card from "./Card";
import styles from "./Cards.module.css";


export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={styles.mainDiv}>
      {characters.map((char) => {
        return (
          <Card
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            onclose={() => window.alert("Emulamos que cierra la card")}
          />
        );
      })}
    </div>
  );
}
