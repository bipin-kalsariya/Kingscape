import React from 'react';
import { Chessboard } from 'react-chessboard';

export default function ChessboardUI({ position, onMove }) {
  return (
    <div style={{ maxWidth: 500, margin: 'auto' }}>
      <Chessboard
        position={position}
        onPieceDrop={(sourceSquare, targetSquare) =>
          onMove(sourceSquare, targetSquare)
        }
        boardWidth={500}
      />
    </div>
  );
}
