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
        this.activateCells
        this.illuminateSequence
    }

    getCells() {
        return this.cells
    }

    getCell(index) {
        return this.getCells()[index]
    }

    activateCells(bool) {
        for(let cell of this.getCells()) {
            cell.setActive(bool)
        }
    }

    illuminateSequence(arr) {        
        let contLightOn = 0
        let contLightOff = 0

        const lightOnTimer = 1500
        const lightOffTimer = 1000

        for(let i = 0;i<arr.length;i++) {
            contLightOn = i * lightOnTimer
            contLightOff = contLightOn + lightOffTimer
            setTimeout(() => {
                this.getCell(arr[i]).turnLightOn()
            }, contLightOn);
            setTimeout(() => {
                this.getCell(arr[i]).turnLightOff()
            }, contLightOff);
        }
    }
}