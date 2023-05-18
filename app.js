// index.js
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const solveSudoku = require('./solveSudoku');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.post('/solve', (req, res) => {
 let originalBoard = req.body.board;
 let solvedStatus = solveSudoku.solveSudoku(originalBoard);

 if (solvedStatus === false) {
  res.status(200).json({ status: solvedStatus });
 } else {
  res.status(200).json({ sudoku: originalBoard, status: solvedStatus });
 }
});

app.listen(8080, () => console.log(`Started server at http://localhost:8080!`));
