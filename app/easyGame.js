import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Button } from 'react-native';


const GRID_SIZE = 5;
const CELL_SIZE = 40;
const NUM_BOMBS = 2; // Total number of bombs
const GAME_DURATION = 60; // Game duration in seconds

const Minesweeper = () => {
  const [grid, setGrid] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [gameActive, setGameActive] = useState(true);


  useEffect(() => {
    initializeGame();
    // Start the timer
    const timerId = gameActive && setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [gameActive]);

  useEffect(() => {
    if (timeLeft === 0) {
      endGame("Time's up! Game over.");
    }
  }, [timeLeft]);

  const initializeGame = () => {
    let newGrid = [];
    let bombPositions = generateBombPositions(NUM_BOMBS, GRID_SIZE);
    for (let row = 0; row < GRID_SIZE; row++) {
      newGrid[row] = [];
      for (let col = 0; col < GRID_SIZE; col++) {
        newGrid[row][col] = {
          isBomb: bombPositions.some(position => position.row === row && position.col === col),
          revealed: false,
        };
      }
    }
    setGrid(newGrid);
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setGameActive(true);
  };

  const generateBombPositions = (numBombs, gridSize) => {
    let positions = [];
    while (positions.length < numBombs) {
      let position = {
        row: Math.floor(Math.random() * gridSize),
        col: Math.floor(Math.random() * gridSize),
      };
      if (!positions.some(pos => pos.row === position.row && pos.col === position.col)) {
        positions.push(position);
      }
    }
    return positions;
  };

  const handlePress = (row, col) => {
    if (!gameActive) return; // Ignore clicks if the game is not active

    if (grid[row][col].isBomb) {
      endGame("You clicked on a bomb! Game over.");
    } else {
      let newScore = score + 100;
      setScore(newScore);
      let newGrid = [...grid];
      newGrid[row][col].revealed = true;
      setGrid(newGrid);
    }
  };

  const endGame = (message) => {
    Alert.alert("Game Over", message, [{ text: "Restart", onPress: () => initializeGame() }]);
    setGameActive(false);
  };

  const leaveGame = () => {
    Alert.alert("LEAVE GAME", "YOU HAVE LEFT THE GAME", [{ text: "CONFIRM" }]);
    setGameActive(false);
    // Optionally reset the game here or navigate away
  };

  const renderCell = (row, col) => {
    const cell = grid[row][col];
    return (
      <TouchableOpacity
        key={`${row}-${col}`}
        style={[styles.cell, cell.revealed ? styles.revealed : {}]}
        onPress={() => handlePress(row, col)}
        disabled={!gameActive || cell.revealed}
      >
        <Text>{cell.revealed && !cell.isBomb ? "100" : ""}</Text>
      </TouchableOpacity>
    );
  };

  const renderGrid = () => {
    return grid.map((row, rowIndex) => (
      <View key={rowIndex} style={styles.row}>
        {row.map((_, colIndex) => renderCell(rowIndex, colIndex))}
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <Text>EASY MODE 2 BOMBS</Text>
      <Text style={styles.score}>Score: {score}</Text>
      <Text>Time Left: {timeLeft}s</Text>
      {renderGrid()}
      <View style={{ marginVertical: 10 }}>
        {gameActive && <Button title="Reset Game" onPress={initializeGame} color="#841584" />}
        {!gameActive && <Button title="Restart Game" onPress={initializeGame} color="#841584" />}
        <Button title="Leave Game" onPress={leaveGame} color="red" />
      </View>
    </View>
  );  
};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
    },
    row: {
      flexDirection: 'row',
    },
    cell: {
      width: CELL_SIZE,
      height: CELL_SIZE,
      borderWidth: 1,
      borderColor: '#999',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ddd',
    },
    revealed: {
      backgroundColor: '#bbb',
    },
    score: {
      fontSize: 24,
      margin: 20,
    },
  }); 

export default Minesweeper;
