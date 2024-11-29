import React, { useState } from 'react';
import { Button, Grid, Typography, Box } from '@mui/material';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) return;
    const newSquares = [...squares];
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Tic Tac Toe
      </Typography>
      <Typography variant="h6" gutterBottom>
        {status}
      </Typography>
      <Grid container spacing={1} justifyContent="center">
        {squares.map((value, index) => (
          <Grid item key={index} xs={4}>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                height: 100,
                fontSize: 24,
                textTransform: 'none',
              }}
              onClick={() => handleClick(index)}
            >
              {value}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={resetGame}>
        Reset Game
      </Button>
    </Box>
  );
};

export default Board;
