import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [
                ...prevGameBoard.map((innerArray) => [...innerArray]),
            ];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });
    }
    function handleSelectSquareStructuredClone(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const board = structuredClone(prevGameBoard);
            board[rowIndex][colIndex] = activePlayerSymbol;
            return board;
        });

        onSelectSquare();
    }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button
                                    onClick={() =>
                                        handleSelectSquareStructuredClone(
                                            rowIndex,
                                            colIndex,
                                        )
                                    }
                                >
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
