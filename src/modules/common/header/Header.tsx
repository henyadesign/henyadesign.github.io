import React from 'react';
import styles from './header.module.scss';
import logo from '../../../logo.svg';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Henya Design" className={styles.logo} />
    </header>
  );
};

export default Header;
