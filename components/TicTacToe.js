import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return; // Ignore clicks if there's already a move or a winner
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#26c6da",
        padding: 2,
      }}
    >
      <Typography variant="h4" sx={{ color: "#fff", mb: 2 }}>
        Tic Tac Toe
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 100px)",
          gridTemplateRows: "repeat(3, 100px)",
          gap: 1,
        }}
      >
        {board.map((value, index) => (
          <Box
            key={index}
            onClick={() => handleClick(index)}
            sx={{
              width: 100,
              height: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#0097a7",
              backgroundColor: "#e0f7fa",
              border: "2px solid #0097a7",
              cursor: "pointer",
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "#b2ebf2",
              },
            }}
          >
            {value}
          </Box>
        ))}
      </Box>
      {winner && (
        <Typography variant="h6" sx={{ color: "#fff", mt: 2 }}>
          🎉 Winner: {winner}
        </Typography>
      )}
      {!winner && !board.includes(null) && (
        <Typography variant="h6" sx={{ color: "#fff", mt: 2 }}>
          🤝 It's a draw!
        </Typography>
      )}
      <Button
        onClick={resetGame}
        variant="contained"
        sx={{ mt: 3, backgroundColor: "#0097a7", "&:hover": { backgroundColor: "#007c91" } }}
      >
        Reset Game
      </Button>
    </Box>
  );
};

// Helper function to check for winner
function calculateWinner(squares) {
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;
