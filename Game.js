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
        this.playerSelectedColors = []
        this.lastCheckedColor = -1
        this.getGameStarted
        this.setGameStarted
        this.startGame
        this.restartGame
        this.activateInputs
        this.colorToNumber
        this.checkPlayerSelection
        this.getScore
        this.setScore
        this.getRecord
        this.setRecord 
        this.getBoard
        this.getPlayerSelectedColors
        this.setPlayerSelectedColors
        this.getColorSequence
        this.resetColorSequence
        this.addColorToSequence
        this.showSequence
        this.getLastCheckedColor
        this.setLastCheckedColor
    }

    getGameStarted() {
        return this.gameStarted
    }

    setGameStarted(bool) {
        this.gameStarted = bool
    }

    startGame() {
        this.setGameStarted(true)
        this.addColorToSequence()
        this.showSequence()
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
                    //aux.getPlayerSelectedColors().push(aux.colorToNumber(cell.getColor()))
                    aux.checkPlayerSelection(aux.colorToNumber(cell.getColor()))
                })
                cell.getId().addEventListener('mouseup', function() {
                    cell.turnLightOff()
                })
                /*cell.getId().addEventListener('mouseout', function() {
                    cell.turnLightOff()
                })*/
            }else {
                cell.getId().removeEventListener('mousedown', function() {
                    cell.turnLightOn()
                })
                cell.getId().removeEventListener('mouseup', function() {
                    cell.turnLightOff()
                })
                /*cell.getId().removeEventListener('mouseout', function() {
                    cell.turnLightOff()
                })*/
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

    checkPlayerSelection(selection) {
        this.setLastCheckedColor(this.getLastCheckedColor() + 1)
        if(selection === this.getColorSequence()[this.getLastCheckedColor()]) {
            if(this.getLastCheckedColor() === (this.getColorSequence().length - 1)) {
                console.log(`Selection = ${selection}`)
                console.log(`LastCheckedColor = ${this.getLastCheckedColor()}`)
                console.log(`Sequence color = ${this.getColorSequence()[this.getLastCheckedColor()]}`)
                this.setLastCheckedColor(-1)
                this.activateInputs(false)
                this.setScore(this.getScore().getPoints() + 1)
                this.addColorToSequence()
                this.showSequence()
                this.activateInputs(true)
            }
        }else {
            console.log(selection === this.getColorSequence()[this.getLastCheckedColor()])
            this.setLastCheckedColor(-1)
            this.setScore(0)
            this.activateInputs(false)
            this.resetColorSequence()
            this.addColorToSequence()
            this.showSequence()
            this.activateInputs(true)
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

    resetColorSequence() {
        this.colorSequence = []
    }

    addColorToSequence() {
        const maxColor = 4
        const n = Math.floor(Math.random() * maxColor) 
        this.getColorSequence().push(n)
    }

    showSequence() {
        this.getBoard().illuminateSequence(this.getColorSequence())
    }

    getLastCheckedColor() {
        return this.lastCheckedColor
    }

    setLastCheckedColor(n) {
        this.lastCheckedColor = n
    }
}