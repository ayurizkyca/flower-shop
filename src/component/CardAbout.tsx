import React from 'react';
import styles from './CardAbout.module.css';

interface Props {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const CardAbout: React.FC<Props> = ({ title, description, image, reverse = false }) => {
  return (
    <div className={`${styles.card} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardAbout;
