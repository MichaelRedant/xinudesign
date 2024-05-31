import SeoHead from '../components/SeoHead';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <SeoHead title="Xinudesign - Home" description="Minimalistic design and innovation" />
      <main className={styles.main}>
        <h1 className={styles.title}>Welkom bij Xinudesign</h1>
        <p>Uw bron voor minimalistisch ontwerp en innovatie.</p>
      </main>
    </div>
  );
};

export default Home; 
