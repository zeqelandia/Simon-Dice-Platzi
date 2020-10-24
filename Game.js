import Score from './Score.js'
import Board from './Board.js'
import Cell from './Cell.js'

export default class Game {
    constructor() {
        this.gameStarted = false
        this.score = new Score(document.getElementById('score'))
        this.record = new Score(document.getElementById('record'))
        this.board = new Board()
        this.colorSequence = [0, 1]
        this.playerSelectedColors = []
        this.getGameStarted
        this.setGameStarted
        this.startGame
        this.restartGame
        this.activateInputs
        this.colorToNumber
        this.getScore
        this.setScore
        this.getRecord
        this.setRecord 
        this.getBoard
        this.getPlayerSelectedColors
        this.setPlayerSelectedColors
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
        this.activateInputs(true)
    }

    restartGame() {
        this.setGameStarted(false)
    }

    activateInputs(bool) {
        const aux = this
        for(let cell of this.getBoard().getCells()) {
            if(bool) {
                cell.getId().addEventListener('mousedown', function() {
                    cell.turnLightOn()
                    aux.getPlayerSelectedColors().push(aux.colorToNumber(cell.getColor()))
                })
                cell.getId().addEventListener('mouseup', function() {
                    cell.turnLightOff()
                })
                cell.getId().addEventListener('mouseout', function() {
                    cell.turnLightOff()
                })
            }else {
                cell.getId().removeEventListener('mousedown', function() {
                    cell.turnLightOn()
                })
                cell.getId().removeEventListener('mouseup', function() {
                    cell.turnLightOff()
                })
                cell.getId().removeEventListener('mouseout', function() {
                    cell.turnLightOff()
                })
            }
        }
    }

    colorToNumber(color) {
        switch(color) {
            case 'blue':
                return 0
            case 'red':
                return 1
            case 'yellow':
                return 2
            case 'green':
                return 3
        }
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

    getPlayerSelectedColors() {
        return this.playerSelectedColors
    }

    setPlayerSelectedColors(arr) {
        this.playerSelectedColors = arr
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
        this.getBoard().illuminateSequence(this.getColorSequence())
    }
}