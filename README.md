# 🎯 Sorting Visualizer

A beautiful and interactive **React-based Sorting Visualizer** that brings sorting algorithms to life with smooth animations and clean design.

![Sorting Visualizer Demo](https://img.shields.io/badge/Demo-Live-brightgreen) ![React](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-4.4.5-purple) ![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features

- 🎮 **Interactive Controls**: Generate new arrays, adjust size (5-100 elements), and control animation speed
- 🔄 **Multiple Algorithms**: Visualize Bubble Sort, Insertion Sort, Merge Sort, and Quick Sort
- 🎨 **Clean Design**: Modern dark-themed UI with smooth animations
- 📊 **Dynamic Values**: Numbers displayed above each bar that move with the sorting process
- ⏸️ **Stop/Start Control**: Stop current sorting and switch to different algorithms instantly
- 📱 **Responsive**: Works perfectly on different screen sizes

## 🚀 Live Demo

Experience the visualizer live: [Sorting Visualizer Demo](https://your-demo-link.com)

## 🛠️ Technologies Used

- **React 18** - Modern React with functional components and hooks
- **Vite** - Fast build tool and development server
- **CSS Modules** - Scoped styling for components
- **JavaScript ES6+** - Modern JavaScript features

## 📸 Screenshots

### Main Interface
![Main Interface](./screenshots/main-interface.png)

### Sorting in Action
![Sorting Animation](./screenshots/sorting-animation.png)

## 🎯 Algorithms Implemented

| Algorithm | Time Complexity | Space Complexity | Description |
|-----------|----------------|------------------|-------------|
| **Bubble Sort** | O(n²) | O(1) | Compares adjacent elements and swaps them |
| **Insertion Sort** | O(n²) | O(1) | Builds sorted array one element at a time |
| **Merge Sort** | O(n log n) | O(n) | Divide and conquer approach |
| **Quick Sort** | O(n log n) | O(log n) | Partitioning-based sorting |

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/iwanturequity/Sorting-Visualizer.git
   cd Sorting-Visualizer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

## 📁 Project Structure

```
Sorting-Visualizer/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Navigation and controls
│   │   ├── Navbar.module.css       # Navbar styling
│   │   ├── SortingVisualizer.jsx   # Main visualization component
│   │   └── SortingVisualizer.module.css # Visualizer styling
│   ├── algorithms/
│   │   ├── bubbleSort.js           # Bubble sort implementation
│   │   ├── insertionSort.js        # Insertion sort implementation
│   │   ├── mergeSort.js            # Merge sort implementation
│   │   └── quickSort.js            # Quick sort implementation
│   ├── App.jsx                     # Main app component
│   ├── App.module.css              # App styling
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Global styles
├── index.html                      # HTML template
├── package.json                    # Dependencies and scripts
├── vite.config.js                  # Vite configuration
└── README.md                       # This file
```

## 🎮 How to Use

1. **Generate Array**: Click "Generate New Array" to create a random array
2. **Adjust Settings**: 
   - Use the "Array Size" slider to change the number of elements (5-100)
   - Use the "Speed" slider to control animation speed (1-100ms)
3. **Choose Algorithm**: Click any of the four sorting algorithm buttons
4. **Watch Magic**: Observe the sorting process with smooth animations
5. **Stop/Switch**: Use "Stop Sorting" to halt and try different algorithms

## 🎨 Features in Detail

### Dynamic Value Display
- Numbers are displayed above each bar
- Values move dynamically with their bars during sorting
- Smooth transitions with proper positioning

### Interactive Controls
- **Generate New Array**: Creates fresh random data
- **Array Size Slider**: Adjusts from 5 to 100 elements
- **Speed Control**: Fine-tune animation speed
- **Stop Button**: Appears during sorting for instant control

### Visual Feedback
- Bars grow upward from bottom baseline
- Consistent blue color scheme (#6366f1)
- Smooth height transitions during sorting
- Responsive design adapting to array size

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create your feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

## 🐛 Issues

Found a bug? Have a suggestion? Please [open an issue](https://github.com/iwanturequity/Sorting-Visualizer/issues) with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments

- Inspired by the need to visualize sorting algorithms
- Built with modern React best practices
- Designed for educational and demonstration purposes

## 📊 Performance

- ⚡ Fast rendering with optimized React components
- 🎯 Smooth 60fps animations
- 💾 Minimal memory footprint
- 📱 Mobile-friendly responsive design

---

### 💡 Fun Fact
This visualizer was built to make sorting algorithms more intuitive and engaging for learners and developers alike!

**⭐ Star this repository if you found it helpful!**

---

<p align="center">Made with ❤️ by Rajiv<a href="https://github.com/iwanturequity">iwanturequity</a></p>
