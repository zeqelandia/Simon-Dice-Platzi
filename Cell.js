export default class Cell {
    constructor(color, id) {
        this.color = color
        this.id = id
        this.getColor
        this.getId 
        this.illuminateCell
        this.turnLightOn
        this.turnLightOff
    }

    getColor() {
        return this.color
    }

    getId() {
        return this.id
    }

    illuminateCell() {
        setTimeout(() => {
            this.turnLightOn()
        }, 400);
        setTimeout(() => {
            this.turnLightOff()
        }, 5000);
    }

    turnLightOn() {
        this.getId().classList.replace('lightOff', 'lightOn')
    }

    turnLightOff() {
        this.getId().classList.replace('lightOn', 'lightOff')
    }
}