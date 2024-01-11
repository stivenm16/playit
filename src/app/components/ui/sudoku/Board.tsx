'use client'

import { playableBoard, sumColumn, sumRow } from '@/app/logic/sudoku'
import React, { useEffect } from 'react'
import { Cell } from '.'

interface Props {
  // size: number
}

const Board: React.FC<Props> = () => {
  const [board, setBoard] = React.useState<number[][]>([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ])

  const handleCellValue = (
    value: number,
    rowIndex: number,
    columnIndex: number,
  ) => {
    const updatedBoard = [...board]

    updatedBoard[rowIndex][columnIndex] = value
    setBoard(updatedBoard)
  }

  useEffect(() => {
    const { completedBoard, puzzleBoard } = playableBoard()
    setBoard(puzzleBoard)
  }, [])

  // useEffect(() => {
  // }, [board])

  return (
    <div className="grid-cols-9 gap-0">
      {board.map((row, rowIndex) => (
        <div className="flex md:grid-rows-9" key={rowIndex}>
          {row.map((cellValue: number, columnIndex: number) => (
            <Cell
              key={columnIndex}
              value={cellValue}
              onChange={handleCellValue}
              rowIndex={rowIndex}
              columnIndex={columnIndex}
            />
          ))}
          <span className="mt-3">{sumRow(row)}</span>
        </div>
      ))}
      <div className="flex w-auto justify-around">
        {board[0].map((_, columnIndex) => (
          <span key={columnIndex} className="mr-4">
            {sumColumn(board, columnIndex)}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Board
