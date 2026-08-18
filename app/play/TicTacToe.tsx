"use client";

import { RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

type Cell = "X" | "O" | null;

const WIN_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function findWinner(board: Cell[]): { winner: Cell; line: number[] } | null {
  for (const line of WIN_LINES) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line };
    }
  }
  return null;
}

// Perfect-play minimax so "Gunal" (O) never loses — the best a player can do is draw.
function minimax(board: Cell[], isMaximising: boolean): number {
  const result = findWinner(board);
  if (result?.winner === "O") return 1;
  if (result?.winner === "X") return -1;
  if (board.every((cell) => cell !== null)) return 0;

  const scores = board.map((cell, index) => {
    if (cell !== null) return isMaximising ? -Infinity : Infinity;
    const next = [...board];
    next[index] = isMaximising ? "O" : "X";
    return minimax(next, !isMaximising);
  });

  return isMaximising ? Math.max(...scores) : Math.min(...scores);
}

function bestMove(board: Cell[]): number {
  let move = -1;
  let bestScore = -Infinity;

  board.forEach((cell, index) => {
    if (cell !== null) return;
    const next = [...board];
    next[index] = "O";
    const score = minimax(next, false);
    if (score > bestScore) {
      bestScore = score;
      move = index;
    }
  });

  return move;
}

const emptyBoard: Cell[] = Array(9).fill(null);

export default function TicTacToe() {
  const [board, setBoard] = useState<Cell[]>(emptyBoard);

  const result = findWinner(board);
  const isDraw = !result && board.every((cell) => cell !== null);
  const isOver = Boolean(result) || isDraw;

  // X always moves first, so an odd number of filled cells means O still owes a move.
  const isGunalsTurn =
    !isOver && board.filter((cell) => cell !== null).length % 2 === 1;

  // Let the move land a beat later so it reads as someone thinking, not a script firing.
  useEffect(() => {
    if (!isGunalsTurn) return;

    const timer = setTimeout(() => {
      setBoard((current) => {
        if (findWinner(current) || current.every((cell) => cell !== null)) return current;
        const move = bestMove(current);
        if (move === -1) return current;
        const next = [...current];
        next[move] = "O";
        return next;
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [isGunalsTurn]);

  const status = result
    ? result.winner === "X"
      ? "You win. Genuinely impressive."
      : "Gunal wins this one."
    : isDraw
      ? "Draw. Friction removed on both sides."
      : isGunalsTurn
        ? "Gunal is thinking…"
        : "Your turn (X)";

  const handlePlay = (index: number) => {
    if (board[index] || isOver || isGunalsTurn) return;

    setBoard((current) => {
      const next = [...current];
      next[index] = "X";
      return next;
    });
  };

  return (
    <div className="flex flex-col items-center">
      <p className="font-mono text-sm text-[#181510]/70">{status}</p>

      <div className="mt-6 grid w-full max-w-[min(100%,24rem)] grid-cols-3 overflow-hidden rounded-3xl border-2 border-[#181510] bg-[#181510]/15 gap-px">
        {board.map((cell, index) => {
          const isWinning = result?.line.includes(index) ?? false;

          return (
            <button
              key={index}
              type="button"
              onClick={() => handlePlay(index)}
              disabled={Boolean(cell) || isOver || isGunalsTurn}
              aria-label={cell ? `Cell ${index + 1}, ${cell}` : `Play cell ${index + 1}`}
              className={`flex aspect-square w-full items-center justify-center text-4xl font-extrabold transition-colors sm:text-5xl ${
                isWinning ? "bg-[#FBBF24]" : "bg-[#FAF8F1] enabled:hover:bg-[#F2EEE3]"
              } ${cell === "X" ? "text-[#ed254e]" : "text-[#2F5DFF]"} ${
                cell || isOver || isGunalsTurn ? "cursor-default" : "cursor-pointer"
              }`}
            >
              {cell}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => setBoard(emptyBoard)}
        className="mt-8 flex h-12 cursor-pointer items-center gap-2 rounded-full border border-[#181510] px-6 font-mono text-sm font-bold text-[#181510] transition-colors hover:bg-[#181510] hover:text-[#F2EEE3]"
      >
        Reset board
        <RotateCcw size={16} />
      </button>
    </div>
  );
}
