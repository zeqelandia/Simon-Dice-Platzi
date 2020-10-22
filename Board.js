import Cell from './Cell.js'

export default class Board {
    constructor() {
        this.cells = [
            new Cell('blue', document.getElementById('blue')),
            new Cell('red', document.getElementById('red')),
            new Cell('yellow', document.getElementById('yellow')),
            new Cell('green', document.getElementById('green'))
        ]
        this.getCells
        this.getCell
        this.getCellColor
        this.getCellId
        this.activateCells
        this.illuminateSequence
    }

    getCells() {
        return this.cells
    }

    getCell(index) {
        return this.getCells()[index]
    }

    getCellColor(index) {
        return this.getCells()[index].getColor()
    }

    getCellId(index) {
        return this.getCells()[index].getId()
    }

    activateCells(bool) {
        for(let cell of this.getCells()) {
            cell.setActive(bool)
        }
    }

    illuminateSequence(arr) {
        console.log(this.getCell(1).illuminateCell())
        
        for(let i = 0;i<arr.length;i++) {
            this.getCell(arr[i]).illuminateCell()
        }
    }
}