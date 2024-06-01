// components/Header.tsx
import { useState, useEffect } from 'react';
import NextLink from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${scrollY > 0 ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <NextLink href="#" passHref legacyBehavior>
          <a className={styles.link}>HOME</a>
        </NextLink>
        <NextLink href="#" passHref legacyBehavior>
          <a className={styles.link}>SERVICES</a>
        </NextLink>
        <NextLink href="#" passHref legacyBehavior>
          <a className={styles.link}>PORTFOLIO</a>
        </NextLink>
        <NextLink href="#" passHref legacyBehavior>
          <a className={styles.link}>PROCESS</a>
        </NextLink>
        <NextLink href="#" passHref legacyBehavior>
          <a className={styles.link}>ABOUT</a>
        </NextLink>
        <NextLink href="#" passHref legacyBehavior>
          <a className={styles.link}>AI ART BY XINUDESIGN</a>
        </NextLink>
        <NextLink href="#" passHref legacyBehavior>
          <a className={styles.link}>BLOG</a>
        </NextLink>
        <NextLink href="#" passHref legacyBehavior>
          <a className={styles.link}>CONTACT</a>
        </NextLink>
      </nav>
    </header>
  );
};

export default Header;
