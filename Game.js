import Score from './Score.js'
import Board from './Board.js'
import Cell from './Cell.js'
import Button from './Button.js'

export default class Game {
    constructor() {
        this.score = new Score(document.getElementById('score'))
        this.record = new Score(document.getElementById('record'))
        this.board = new Board()
        this.btnStart = new Button(document.getElementById('btnStart'))
        this.btnStart.setActive(true, this.startGame.bind(this))
        this.colorSequence = []
        this.lastCheckedColor = -1
        this.storage = window.localStorage
        this.getBtnStart
        this.startGame
        this.restartGame
        this.activateInputs
        this.activateInputs()
        this.colorToNumber
        this.checkPlayerSelection
        this.getScore
        this.setScore
        this.getRecord
        this.setRecord 
        this.setNewRecord
        this.getBoard
        this.getColorSequence
        this.resetColorSequence
        this.addColorToSequence
        this.showSequence
        this.getLastCheckedColor
        this.setLastCheckedColor
        this.getStorage
        this.loadRecord
        this.loadRecord()
    }

    getBtnStart() {
        return this.btnStart
    }

    startGame() {
        this.loadRecord()
        this.getBtnStart().setActive(false, this.startGame)
        this.setScore(0)
        this.setLastCheckedColor(-1)
        this.resetColorSequence()
        this.addColorToSequence()
        this.showSequence()
    }

    restartGame() {
        this.getBtnStart().setActive(true, this.startGame)
    }

    activateInputs() {
        const aux = this
        for(let cell of this.getBoard().getCells()) {
            cell.getId().addEventListener('mousedown', function() {
                cell.turnLightOn()
            })
            cell.getId().addEventListener('mouseup', function() {
                cell.turnLightOff()
                setTimeout(() => {
                    aux.checkPlayerSelection(aux.colorToNumber(cell.getColor()))
                }, 300);
            })
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
                this.setScore(this.getScore().getPoints() + 1)
                this.setNewRecord()
                this.getStorage().setItem('record', this.getRecord().getPoints())
                this.setLastCheckedColor(-1)
                this.addColorToSequence()
                this.showSequence()
            }
        }else {
            this.restartGame()
        }
    }

    getScore() {
        return this.score
    }

    setScore(n) {
        this.score.setPoints(n, 'Puntaje')
    }

    getRecord() {
        return this.record
    }

    setRecord(n) {
        this.record.setPoints(n, 'Record')
    }

    setNewRecord() {
        if(this.getScore().getPoints() > this.getRecord().getPoints()) {
            this.setRecord(this.getScore().getPoints())
        }
    }

    getBoard() {
        return this.board
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

    getStorage() {
        return this.storage
    }

    loadRecord() {
        const aux = this.getStorage().getItem('record')
        if(aux) {
            this.setRecord(aux)
        }else {
            this.getStorage().setItem('record', 0)
            this.setRecord(0)
        }
    }
}