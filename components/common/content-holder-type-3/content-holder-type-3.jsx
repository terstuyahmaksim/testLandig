import styles from "./styles.module.scss";

const ContentBlockTypeThree = () => {
  const item = "/images/products/STCG/4.png";
  return (
    <div className={styles.wrapper}>
      <div className={styles.textBlock}>
        <h3 className={styles.title}>What are storytelling words?</h3>
        <p className={styles.text}>The words in this game were chosen to help children write brilliant stories, excel at school and in life. Storyteller’s Card Game features 300 storytelling words, carefully curated into six themes - Character, Settings, Taste and Smell, Action, Emotion, and Weather. It was developed with childhood literacy experts and with word selection informed by cutting-edge machine learning.</p>
      </div>
      <div className={styles.mediaBlock}>
        <img
          src={item}
          alt="Main image media content 2"
          className={styles.media}
        />
      </div>
    </div>
  );
};

export default ContentBlockTypeThree;
