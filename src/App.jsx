import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SortingVisualizer from './components/SortingVisualizer';
import { bubbleSort } from './algorithms/bubbleSort';
import { insertionSort } from './algorithms/insertionSort';
import { mergeSort } from './algorithms/mergeSort';
import { quickSort } from './algorithms/quickSort';
import styles from './App.module.css';

const MIN_SIZE = 5;
const MAX_SIZE = 999;

function getRandomArray(size) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 500) + 5);
}

function App() {
  const [array, setArray] = useState(getRandomArray(50));
  const [arraySize, setArraySize] = useState(50);
  const [speed, setSpeed] = useState(50);
  const [isSorting, setIsSorting] = useState(false);

  const handleGenerateArray = () => {
    if (!isSorting) {
      setArray(getRandomArray(arraySize));
    }
  };

  const handleArraySizeChange = (size) => {
    if (!isSorting) {
      setArraySize(size);
      setArray(getRandomArray(size));
    }
  };

  const handleStopSorting = () => {
    window.stopAnimation = true;
    setIsSorting(false);
  };

  const handleSort = async (algorithm) => {
    if (isSorting) return;
    
    setIsSorting(true);
    let animations = [];
    
    switch(algorithm) {
      case 'bubble':
        animations = bubbleSort(array);
        break;
      case 'insertion':
        animations = insertionSort(array);
        break;
      case 'merge':
        animations = mergeSort(array);
        break;
      case 'quick':
        animations = quickSort(array);
        break;
      default:
        break;
    }
    
    // Store animations globally for the visualizer to access
    window.sortAnimations = animations;
  };

  return (
    <div className={styles.app}>
      <Navbar
        onGenerateArray={handleGenerateArray}
        arraySize={arraySize}
        onArraySizeChange={handleArraySizeChange}
        speed={speed}
        onSpeedChange={setSpeed}
        onSort={handleSort}
        onStopSorting={handleStopSorting}
        isSorting={isSorting}
      />
      <SortingVisualizer 
        array={array} 
        setArray={setArray}
        speed={speed}
        isSorting={isSorting}
        setIsSorting={setIsSorting}
      />
    </div>
  );
}

export default App;
