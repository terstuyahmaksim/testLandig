import SlickSlider from "../../common/slick-slider";
import ReactStars from "../../common/star-rating";

import styles from "./styles.module.scss";

const imgMock = [
  "/images/products/STCG/1.png",
  "/images/products/STCG/2.png",
  "/images/products/STCG/3.png",
];

const PageContent = () => {
  return (
    <header className={styles.intro}>
      <div className={styles.mainSection}>
        <div className={styles.slickWrapper}>
          <SlickSlider imgCollection={imgMock} />
        </div>
        <div className={styles.description}>
          <h2 className={styles.title}>Storyteller’s Card Game</h2>
          <div className={styles.star_rating_holder}>
            <ReactStars />
            <p className={styles.starReview}>10 Reviews</p>
          </div>
          <p className={styles.price}>$29</p>
          <p className={styles.textBold}>
            Who's the best storyteller in your family? Boost kids' vocabulary
            and creative storytelling at home with this hilarious card game that
            everyone will love.
          </p>
          <ul className={styles.listHolder}>
            <li className={styles.features}>
              Features words that appear on State Assessments, Lexile Reading
              Assessment, SSAT, SAT, TOEFL
            </li>
            <li className={styles.features}>
              Includes 300 word cards, 200 story cards
            </li>
            <li className={styles.features}>
              Developed with childhood literacy experts to ensure vocabulary
              sticks
            </li>
            <li className={styles.features}>Ages 7+</li>
            <li className={styles.features}>
              Ships worldwide! See here for details
            </li>
          </ul>
          <a className="button">Add to bag</a>
        </div>
      </div>
      <svg
        className={styles.waveBottom}
        viewBox="0 0 1280 107.37"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1280,107H0V0H1280ZM0,95C515.58,149.08,706.26,7,1280,26V0H0Z"
          fill="#fff"
        />
      </svg>
    </header>
  );
};

export default PageContent;
