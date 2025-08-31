import React from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ onGenerateArray, arraySize, onArraySizeChange, speed, onSpeedChange, onSort, onStopSorting, isSorting }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <button 
          onClick={onGenerateArray} 
          className={styles.button}
          disabled={isSorting}
        >
          Generate New Array
        </button>
        {isSorting && (
          <button 
            onClick={onStopSorting} 
            className={`${styles.button} ${styles.stopButton}`}
          >
            Stop Sorting
          </button>
        )}
      </div>
      <div className={styles.center}>
        <label>Array Size: {arraySize}
          <input
            type="range"
            min="5"
            max="100"
            value={arraySize}
            onChange={e => onArraySizeChange(Number(e.target.value))}
            className={styles.slider}
            disabled={isSorting}
          />
        </label>
        <label>Speed: {speed}ms
          <input
            type="range"
            min="1"
            max="100"
            value={speed}
            onChange={e => onSpeedChange(Number(e.target.value))}
            className={styles.slider}
          />
        </label>
      </div>
      <div className={styles.right}>
        <button 
          className={styles.button}
          onClick={() => onSort('bubble')}
          disabled={isSorting}
        >
          Bubble Sort
        </button>
        <button 
          className={styles.button}
          onClick={() => onSort('insertion')}
          disabled={isSorting}
        >
          Insertion Sort
        </button>
        <button 
          className={styles.button}
          onClick={() => onSort('merge')}
          disabled={isSorting}
        >
          Merge Sort
        </button>
        <button 
          className={styles.button}
          onClick={() => onSort('quick')}
          disabled={isSorting}
        >
          Quick Sort
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
