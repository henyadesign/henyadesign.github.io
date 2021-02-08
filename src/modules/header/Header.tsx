import React from 'react';
import { useMediaQuery } from 'react-responsive';

import {
  homeHref,
  cvHref,
  graphicDesignHref,
  uxUiDesignHref,
  linkedinHref,
  facebookHref,
  mailHref,
} from '../../config/constants';

import styles from './header.module.scss';

import logo from '../../logo.svg';

import BurgerMenu from '../burger_menu/BurgerMenu';

import LinkedinIcon from '../../assets/icons/LinkedinIcon';
import FacebookIcon from '../../assets/icons/FacebookIcon';
import MailIcon from '../../assets/icons/MailIcon';

const Header: React.FC = () => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 767px)',
  });

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleGoHome = (): void => {
    scrollToTop();
  };

  return (
    <header className={styles.header}>
      <img
        src={logo}
        alt="Henya Design"
        className={styles.logo}
        role="presentation"
        onClick={handleGoHome}
      />
      {!isMobile && (
        <>
          <nav className={styles.navigation}>
            <a href={homeHref} onClick={handleGoHome} className={styles.link}>
              Home
            </a>
            <a
              href={cvHref}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
            <a href={graphicDesignHref} className={styles.link}>
              Graphic design
            </a>
            <a href={uxUiDesignHref} className={styles.link}>
              UX/UI design
            </a>
          </nav>
          <nav className={styles.social_links}>
            <a
              href={linkedinHref}
              className={styles.social_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className={styles.social_icon} />
            </a>
            <a
              href={facebookHref}
              className={styles.social_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className={styles.social_icon} />
            </a>
            <a
              href={mailHref}
              className={styles.social_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MailIcon className={styles.social_icon} />
            </a>
          </nav>
        </>
      )}
      {isMobile && <BurgerMenu />}
    </header>
  );
};

export default Header;
