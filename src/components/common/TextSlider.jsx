import { useEffect, useState } from 'react';
import styles from './TextSlider.module.scss';

const TextSlider = ({ message }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % message.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [message.length]);

  return (
    <div className={styles.textSlider}>
      <div key={currentIndex} className={styles.text}>
        {message[currentIndex]}
      </div>
    </div>
  );
};

export default TextSlider;
