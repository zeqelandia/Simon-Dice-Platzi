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

    activateCells(bool) {
        for(let cell of this.getCells()) {
            cell.setActive(bool)
        }
    }

    illuminateSequence(arr) {        
        let cont = 1000
        for(let i = 0;i<arr.length;i++) {
            /*setTimeout(() => {
                this.getCell(arr[i]).turnLightOn()
                setTimeout(() => {
                    this.getCell(arr[i]).turnLightOff()
                    if(i===0) {
                        cont = 1000
                    }else {
                        cont = i * 1500 + 1000
                    }
                    console.log(`c apaga ${cont}`)
                }, cont);
                console.log(`c prende ${i*1500}`)
            }, i*1500);*/
            setTimeout(() => {
                this.getCell(arr[i]).turnLightOn()
                console.log(`c prende ${i*1000}`)
            }, i*1000);
            setTimeout(() => {
                this.getCell(arr[i]).turnLightOff()
                if(i===0) {
                    cont = 1000
                }else {
                    cont = i * 1500 + 1000
                }
                console.log(`c apaga ${i*1500}`)
            }, i*1500);
        }
        /*setTimeout(() => {
            this.getCell(0).turnLightOn()
        }, 0);
        setTimeout(() => {
            this.getCell(0).turnLightOff()
        }, 1000);
        setTimeout(() => {
            this.getCell(1).turnLightOn()
        }, 1500);
        setTimeout(() => {
            this.getCell(1).turnLightOff()
        }, 2500);
        setTimeout(() => {
            this.getCell(2).turnLightOn()
        }, 3000);
        setTimeout(() => {
            this.getCell(2).turnLightOff()
        }, 4000);*/
    }
}