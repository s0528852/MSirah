//AUTHOR IRAH LORETO
//DATE 2024 - 02 - 10
//medGame.js
//This will Display the Game Pages



import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, Button } from 'react-native';
import Styles from '../styles/page_styles'; 
import { Link } from 'expo-router'; 

const GRID_SIZE = 5;
const CELL_SIZE = 40;
const NUM_BOMBS = 5;
const GAME_DURATION = 60;

const Minesweeper = () => {
    const [grid, setGrid] = useState([]);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
    const [gameActive, setGameActive] = useState(true);

    useEffect(() => {
        initializeGame();
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
        if (!gameActive) return;
        let newGrid = [...grid];
        if (grid[row][col].isBomb) {
            endGame("You clicked on a bomb! Game over.");
        } else {
            newGrid[row][col].revealed = true;
            let allCellsRevealed = checkAllCellsRevealed(newGrid);
            if(allCellsRevealed) {
                Alert.alert("Congrats", "You won Meme Sweeper", [{ text: "Restart", onPress: () => initializeGame() }]);
                return;
            }
            setGrid(newGrid);
        }
    };

    const checkAllCellsRevealed = (grid) => {
        for (let row of grid) {
            for (let cell of row) {
                if (!cell.isBomb && !cell.revealed) {
                    return false;
                }
            }
        }
        return true;
    };

    const endGame = (message) => {
        Alert.alert("Game Over", message, [{ text: "Restart", onPress: initializeGame }]);
        setGameActive(false);
    };

    const leaveGame = () => {
        Alert.alert("LEAVE GAME", "YOU HAVE LEFT THE GAME", [{ text: "CONFIRM" }]);
        setGameActive(false);
    };

    const renderCell = (row, col) => {
        const cell = grid[row][col];
        return (
            <TouchableOpacity
                key={`${row}-${col}`}
                style={[Styles.cell, cell.revealed ? Styles.revealed : {}]}
                onPress={() => handlePress(row, col)}
                disabled={!gameActive || cell.revealed}
            >
                <Text>{cell.revealed && !cell.isBomb ? "100" : ""}</Text>
            </TouchableOpacity>
        );
    };

    const renderGrid = () => {
        return grid.map((row, rowIndex) => (
            <View key={rowIndex} style={Styles.row}>
                {row.map((_, colIndex) => renderCell(rowIndex, colIndex))}
            </View>
        ));
    };

    return (
        <View style={Styles.container}>
            <Text>MEDIUM MODE 5 BOMBS</Text>
            <Text style={Styles.score}>Score
: {score}</Text>
            <Text>Time Left: {timeLeft}s</Text>
            {renderGrid()}

            <View style={{ marginVertical: 10 }}>
              {gameActive && <Button title="Restart Game" onPress={initializeGame} color="red" />}
              <Button title="Leave Game" onPress={leaveGame} color="red" />
          
            <Link href="/" asChild>
              <TouchableOpacity style={Styles.backButton}>
                <Text>... Return Home ...</Text>
              </TouchableOpacity>
            </Link>

      </View>
      </View>
  );
};

export default Minesweeper;
