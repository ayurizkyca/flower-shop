import React from 'react';
import styles from './CardCategory.module.css';

interface Props {
  image: string;
  title: string;
  reverse?: boolean;
}

const CardCategory: React.FC<Props> = ({ image, title, reverse }) => {
  return (
    <div className={`${styles.card} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <a href="#" className={styles.shopNow}>{reverse? "Shop now →" : "← Shop now"}</a>
      </div>
    </div>
  );
};

export default CardCategory;
