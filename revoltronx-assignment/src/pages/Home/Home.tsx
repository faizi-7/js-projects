import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>News Today</h1>
        <p className={styles.subtitle}>Stay updated with the latest news from around the world</p>
        <button className={styles.ctaButton}>
          <Link to='/news' className='link'>Go to Headlines</Link>
        </button>
      </header>
    </div>
  );
};

export default Home;
