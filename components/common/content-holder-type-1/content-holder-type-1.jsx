import styles from './styles.module.scss';

const ContentBlockTypeOne = () => {
  return (
    <div className={styles.gridWrapper}>
      <div className={styles.gridColumnL}>
        {/* TODO unnecessary wrapper */}
        <div>
          <h3 className={styles.title}>“This game is hilarious, valuable, and endlessly replayable. I don't know who loves it more, me or my kids!” - Customer</h3>
          <p className={styles.descr}>Do you have the words to describe getting stuck in the fridge? An attention-seeking unicorn? A dangerously spicy sauce? Boost kids’ creative writing vocabulary with our hilarious Storyteller’s Card Game! Developed with childhood literacy experts, it teaches kids rich, descriptive vocabulary to help them write brilliant stories, and can be enjoyed by the whole family. Each box contains 300 word cards, hilariously illustrated by our team of Hollywood artists, along with 200 story prompts to fire kids' imaginations. It's guaranteed to make the whole family explode with laughter. May the best storyteller win!</p>
        </div>
      </div>
      {/* TODO need second block area */}
      <div className={styles.gridColumnR}>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/8VMED7YfCDc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default ContentBlockTypeOne;
