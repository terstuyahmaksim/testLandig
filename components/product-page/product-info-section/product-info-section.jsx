import style from "./styles.module.scss";

export default function PageContent() {
  return (
    <div className={style.container}>
      <h3 className={style.title}>Product Information</h3>
      <div className={style.tableWrapper}>
        <p className={style.label}>Full-colour card</p>
        <p className={style.value}>500 cards</p>
        <p className={style.label}>Age range</p>
        <p className={style.value}>7+</p>
        <p className={style.label}>Year of publication</p>
        <p className={style.value}>2019</p>
        <p className={style.label}>Product dimensions</p>
        <p className={style.value}>21.2 x 7.2 x 9.1cm</p>
        <p className={style.label}>Product code</p>
        <p className={style.value}>5060-695-4700-0-2</p>
        <p className={style.label}></p>
        <p className={style.value}></p>
      </div>
    </div>
  );
}
