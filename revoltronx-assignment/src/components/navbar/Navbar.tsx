// Navbar.tsx
import { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}><Link to='/' className='link'>News App</Link></div>
      <button
        className={styles.toggle}
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      >
        ☰
      </button>
      <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
        <li className={styles.item}><Link to="/">Home</Link></li>
        <li className={styles.item}><Link to="/news">News</Link></li>
        <li className={styles.item}><Link to="/news">TestLink1</Link></li>
        <li className={styles.item}><Link to="/news">TestLink2</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
