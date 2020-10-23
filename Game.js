import Score from './Score.js'
import Board from './Board.js'
import Cell from './Cell.js'

export default class Game {
    constructor() {
        this.gameStarted = false
        this.score = new Score(document.getElementById('score'))
        this.record = new Score(document.getElementById('record'))
        this.board = new Board()
        this.colorSequence = [0 , 0, 1, 2, 3]
        this.getGameStarted
        this.setGameStarted
        this.startGame
        this.restartGame
        this.getScore
        this.setScore
        this.getRecord
        this.setRecord 
        this.getBoard
        this.showSequence
    }

    getGameStarted() {
        return this.gameStarted
    }

    setGameStarted(bool) {
        this.gameStarted = bool
    }

    startGame() {
        this.setGameStarted(true)
        this.getBoard().activateCells(true)
    }

    restartGame() {
        this.setGameStarted(false)
        this.getBoard().activateCells(false)
    }

    getScore() {
        return this.score
    }

    setScore(n) {
        this.score.setPoints(n)
    }

    getRecord() {
        return this.record
    }

    setRecord(n) {
        this.record.setPoints(n)
    }

    getBoard() {
        return this.board
    }

    showSequence() {
        this.getBoard().illuminateSequence(this.colorSequence)
    }
}