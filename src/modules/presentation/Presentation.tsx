import React from 'react';

import styles from './presentation.module.scss';

const Presentation: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>
        I&apos;m Henya Adler and I’m graphic designer and junior UX/UI designer
      </h1>
      <img src="/images/henya.png" alt="Henya Adler" className={styles.photo} />
    </section>
  );
};

export default Presentation;
