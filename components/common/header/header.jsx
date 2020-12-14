import styles from './styles.module.scss';

export default function Header() {
  const logo = '/images/header/logo.png';
  return (
    <div className='container'>
      <header className={styles.header}>
        <div className={styles.logo}><img src={logo} alt="Mrs Wordsmith"/></div>
      </header>
    </div>
  )
}
