export default class Cell {
    constructor(color, id) {
        this.color = color
        this.id = id
        this.getColor
        this.getId 
        this.turnLightOn
        this.turnLightOff
    }

    getColor() {
        return this.color
    }

    getId() {
        return this.id
    }

    turnLightOn() {
        console.log(this.getColor())
        this.getId().classList.replace('lightOff', 'lightOn')
    }

    turnLightOff() {
        this.getId().classList.replace('lightOn', 'lightOff')
    }
}