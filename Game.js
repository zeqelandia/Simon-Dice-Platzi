import Score from './Score.js'
import Board from './Board.js'
import Cell from './Cell.js'

export default class Game {
    constructor() {
        this.gameStarted = false
        this.score = new Score(document.getElementById('score'))
        this.record = new Score(document.getElementById('record'))
        this.board = new Board()
        this.colorSequence = []
        this.getGameStarted
        this.setGameStarted
        this.startGame
        this.restartGame
        this.getScore
        this.setScore
        this.getRecord
        this.setRecord 
        this.getBoard
        this.getColorSequence
        this.addColorToSequence
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
        let isGameStarted = this.getGameStarted()
        let playerFinishedPlaying = false

        while(isGameStarted) {
            this.addColorToSequence()
            this.showSequence()
            this.getBoard().activateCells(true)
            isGameStarted = false
        }
        
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

    getColorSequence() {
        return this.colorSequence
    }

    addColorToSequence() {
        const maxColor = 4
        const n = Math.floor(Math.random() * maxColor) 
        this.getColorSequence().push(n)
    }

    showSequence() {
        const colors = this.getColorSequence()
        this.getBoard().illuminateSequence(colors)
    }
}