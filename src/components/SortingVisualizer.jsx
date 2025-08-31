import React, { useState, useEffect, useRef } from 'react';
import styles from './SortingVisualizer.module.css';

const SortingVisualizer = ({ array, setArray, speed, isSorting, setIsSorting }) => {
  const [comparing, setComparing] = useState([]);
  const [swapping, setSwapping] = useState([]);
  const animationRef = useRef(null);

  const stopSorting = () => {
    if (animationRef.current) {
      clearTimeout(animationRef.current);
      animationRef.current = null;
    }
    setIsSorting(false);
    setComparing([]);
    setSwapping([]);
    window.stopAnimation = true;
  };

  const animateSorting = async (animations) => {
    let tempArray = [...array];
    window.stopAnimation = false;

    for (let i = 0; i < animations.length; i++) {
      if (window.stopAnimation) {
        setComparing([]);
        setSwapping([]);
        return;
      }

      const { type, indices, index, value } = animations[i];
      
      if (type === 'compare') {
        setComparing(indices);
        await new Promise(resolve => {
          animationRef.current = setTimeout(resolve, 101 - speed);
        });
        if (window.stopAnimation) return;
        setComparing([]);
      } else if (type === 'swap') {
        setSwapping(indices);
        const [idx1, idx2] = indices;
        [tempArray[idx1], tempArray[idx2]] = [tempArray[idx2], tempArray[idx1]];
        setArray([...tempArray]);
        await new Promise(resolve => {
          animationRef.current = setTimeout(resolve, 101 - speed);
        });
        if (window.stopAnimation) return;
        setSwapping([]);
      } else if (type === 'overwrite') {
        tempArray[index] = value;
        setArray([...tempArray]);
        await new Promise(resolve => {
          animationRef.current = setTimeout(resolve, 101 - speed);
        });
        if (window.stopAnimation) return;
      }
    }
    setIsSorting(false);
  };

  useEffect(() => {
    if (isSorting && window.sortAnimations) {
      animateSorting(window.sortAnimations);
      window.sortAnimations = null;
    }
  }, [isSorting]);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.visualizer}>
      {array.map((value, idx) => {
        const maxValue = Math.max(...array);
        const containerHeight = window.innerHeight * 0.6; // 60% of viewport height
        const barHeight = (value / maxValue) * (containerHeight - 80); // Leave space for labels
        
        return (
          <div
            className={styles.barContainer}
            key={idx}
            style={{
              width: `${Math.max(25, 800 / array.length)}px`,
            }}
          >
            <div
              className={styles.valueLabel}
              style={{
                bottom: `${Math.max(20, barHeight) + 5}px`,
              }}
            >
              {value}
            </div>
            <div
              className={`${styles.bar} ${
                comparing.includes(idx) ? styles.comparing : ''
              } ${swapping.includes(idx) ? styles.swapping : ''}`}
              style={{
                height: `${Math.max(20, barHeight)}px`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SortingVisualizer;
