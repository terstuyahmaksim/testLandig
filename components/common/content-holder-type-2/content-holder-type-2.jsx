import styles from "./styles.module.scss";

const ContentBlockTypeTwo = () => {
  const item = "/images/products/STCG/4.png";
  return (
    <div className={styles.wrapper}>
      <div className={styles.mediaBlock}>
        <img
          src={item}
          alt="Main image media content 2"
          className={styles.media}
        />
      </div>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>Playing Storyteller's Card Game</h2>
        <p className={styles.text}>
          Playing Storyteller’s Card Game is simple: players take turns to be
          the Master Storyteller. The Master Storyteller takes a Words For… card
          and reads it aloud. The other players each pick the word card in their
          hand that they think best fits the scenario. The Master Storyteller
          decides which word card is the best - whether it's the funniest,
          scariest, or simply the most disgusting. Whoever put down the winning
          card gets to keep the story card. The first person to collect five
          story cards wins!
        </p>
        <a className="button button--long" target="_blank" href="#">
          Download instruction
        </a>
      </div>
    </div>
  );
};

export default ContentBlockTypeTwo;
