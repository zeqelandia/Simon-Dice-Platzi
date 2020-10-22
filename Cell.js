export default class Cell {
    constructor(color, id) {
        this.color = color
        this.id = id
        this.getColor
        this.getId 
        this.setActive
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

    setActive(bool) {
        if(bool) {
            this.getId().addEventListener('mousedown', this.turnLightOn)
            this.getId().addEventListener('mouseup', this.turnLightOff)
        }else {
            this.getId().removeEventListener('mousedown', this.turnLightOn)
            this.getId().removeEventListener('mouseup', this.turnLightOff)
        }
    }

    illuminateCell() {
        setTimeout(() => {
            this.getId().classList.replace('lightOff', 'lightOn')
        }, 200);
        setTimeout(() => {
            this.getId().classList.replace('lightOn', 'lightOff')
        }, 300);
    }

    turnLightOn() {
        this.classList.replace('lightOff', 'lightOn')
    }

    turnLightOff() {
        this.classList.replace('lightOn', 'lightOff')
    }
}