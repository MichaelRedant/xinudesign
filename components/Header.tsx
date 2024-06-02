// components/Header.tsx
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import styles from '../styles/Header.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`${styles.header} ${scrollY > 0 ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <ScrollLink to="home" smooth={true} duration={500}>
            {scrollY > 0 ? (
              <Image src="/logos/Xinu-white.png" alt="Logo" width={80} height={80} />
            ) : (
              <Image src="/logos/Xinu-black.png" alt="Logo" width={80} height={80} />
            )}
          </ScrollLink>
        </div>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <ScrollLink to="home" smooth={true} duration={500}>
              <a className={styles.link}>HOME</a>
            </ScrollLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <ScrollLink to="services" smooth={true} duration={500}>
              <a className={styles.link}>SERVICES</a>
            </ScrollLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <ScrollLink to="software" smooth={true} duration={500}>
              <a className={styles.link}>SOFTWARE</a>
            </ScrollLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <ScrollLink to="roadmap" smooth={true} duration={500}>
              <a className={styles.link}>ROADMAP</a>
            </ScrollLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <ScrollLink to="about" smooth={true} duration={500}>
              <a className={styles.link}>ABOUT</a>
            </ScrollLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <ScrollLink to="ai-art" smooth={true} duration={500}>
              <a className={styles.link}>AI ART BY XINUDESIGN</a>
            </ScrollLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <ScrollLink to="blog" smooth={true} duration={500}>
              <a className={styles.link}>BLOG</a>
            </ScrollLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <ScrollLink to="contact" smooth={true} duration={500}>
              <a className={styles.link}>CONTACT</a>
            </ScrollLink>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
