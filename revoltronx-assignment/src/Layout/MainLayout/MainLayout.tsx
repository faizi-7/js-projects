import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import styles from './MainLayout.module.css'
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <main className={styles.outlet}>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default MainLayout;
