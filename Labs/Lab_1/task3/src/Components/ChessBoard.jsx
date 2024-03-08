import React from "react";
import "./ChessBoardStyle.css";

const ChessBoard = () => {
    const renderCell = (row, col) => {
        const isBlack = (row + col) % 2 === 1;
        const cellColor = isBlack ? "black" : "white";

        return (
            <td className={`cell ${cellColor}`}>
            </td>
        );
    };

    const renderRow = (row) => {
        const cells = [];

        cells.push(<th className={`notation`}>{row + 1}</th>);
        for (let col = 0; col < 8; col++) {
            cells.push(renderCell(row, col));
        }
        cells.push(<th className={`notation`}>{row + 1}</th>);
        return <tr className="row">{cells}</tr>;
    };

    const renderNotation = () => {
        const letters = [" ", "A", "B", "C", "D", "E", "F", "G", "H", " "];
        const cells = [];
        for (let col = 0; col < 10; col++) {
            cells.push(<th className={`notation`}>{letters[col]}
            </th>);
        }
        return <tr className="row-notatian">{cells}</tr>;
    }

    const renderChessboard = () => {
        const rows = [];

        rows.push(renderNotation());
        for (let row = 0; row < 8; row++) {
            rows.push(renderRow(row));
        }
        rows.push(renderNotation());
        return rows;
    };

    return (
        <div>
            <table className="chessboard">
                {renderChessboard()}
            </table>
        </div>
    );
};

export default ChessBoard;