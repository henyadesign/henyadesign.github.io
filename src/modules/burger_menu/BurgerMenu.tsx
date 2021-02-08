import React, { useState } from 'react';
import { Fade as Hamburger } from 'hamburger-react';

import {
  portfolioHref,
  cvHref,
  linkedinHref,
  facebookHref,
  whatsAppHref,
  mailHref,
} from '../../config/constants';

import LinkedinIcon from '../../assets/icons/LinkedinIcon';
import FacebookIcon from '../../assets/icons/FacebookIcon';
import MailIcon from '../../assets/icons/MailIcon';
import WhatsAppIcon from '../../assets/icons/WhatsAppIcon';

import styles from './burger_menu.module.scss';

const BurgerMenu: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  const blockScroll = (): void => {
    document.body.style.overflow = 'hidden';
  };

  const unblockScroll = (): void => {
    document.body.style.overflow = 'scroll';
  };

  const handleOpenMenu = (): void => {
    blockScroll();
    setOpen(true);
  };

  const handleCloseMenu = (): void => {
    unblockScroll();
    setOpen(false);
  };

  const toggleMenu = (): void => {
    if (!isOpen) handleOpenMenu();
    else handleCloseMenu();
  };

  return (
    <div className={styles.container}>
      <Hamburger
        toggled={isOpen}
        toggle={toggleMenu}
        distance="sm"
        size={48}
        label="Show menu"
        color="#414040"
        rounded
      />
      {isOpen && (
        <nav className={styles.navigation}>
          <div className={styles.text_links}>
            <a
              href={portfolioHref}
              className={styles.text_link}
              onClick={handleCloseMenu}
            >
              Portfolio
            </a>
            <a
              href={cvHref}
              className={styles.text_link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCloseMenu}
            >
              CV
            </a>
          </div>
          <div className={styles.social_links}>
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
            <a
              href={whatsAppHref}
              className={styles.social_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className={styles.social_icon} />
            </a>
          </div>
        </nav>
      )}
    </div>
  );
};

export default BurgerMenu;
