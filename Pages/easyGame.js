import React, { useState, useEffect } from 'react';
import { View, Button, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import Styles from './styles'; // Adjusts the import path based on your file structure

const Tile = ({ isMine, onPress }) => {
  return (
    <TouchableOpacity style={Styles.tile} onPress={onPress}>
      {/* Tile visuals can be enhanced to indicate mines or safe spots */}
    </TouchableOpacity>
  );
};

export default function MinesweeperGame() {
  const gridSize = 5; // Defines a 5x5 grid
  const [score, setScore] = useState(0);
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    // Initialize the game grid when the component mounts
    setGrid(generateInitialGrid(gridSize));
  }, []);

  function generateInitialGrid(size) {
    let initialGrid = [];
    for (let i = 0; i < size * size; i++) {
      initialGrid.push({ isMine: false, revealed: false });
    }
    // Place mines randomly
    for (let i = 0; i < size; i++) { // Simple mine placement; consider improving for actual gameplay
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * size * size);
      } while (initialGrid[randomIndex].isMine); // Ensure unique positions for mines
      initialGrid[randomIndex] = { ...initialGrid[randomIndex], isMine: true };
    }
    return initialGrid;
  }

  const handleTilePress = (index) => {
    if (grid[index].isMine) {
      Alert.alert("Game Over", `Your score: ${score}`);
      setScore(0); // Reset score
      setGrid(generateInitialGrid(gridSize)); // Reset grid
    } else {
      setScore(currentScore => currentScore + 100); // Increase score for safe tiles
    }
  };

  return (
    <View style={Styles.container}>
      {Array.from({ length: gridSize }).map((_, rowIndex) => (
        <View key={rowIndex} style={Styles.row}>
          {Array.from({ length: gridSize }).map((_, colIndex) => {
            const index = rowIndex * gridSize + colIndex;
            return (
              <Tile key={`${rowIndex}-${colIndex}`} onPress={() => handleTilePress(index)} isMine={grid[index].isMine} />
            );
          })}
        </View>
      ))}
      <Button title="Reset Game" onPress={() => setGrid(generateInitialGrid(gridSize))} />
    </View>
  );
}
