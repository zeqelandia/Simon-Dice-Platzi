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
        const aux = this
        if(bool) {
            this.getId().addEventListener('mousedown', function() {
                aux.turnLightOn()
            })
            this.getId().addEventListener('mouseup', function() {
                aux.turnLightOff()
            })
            this.getId().addEventListener('mouseout', function() {
                aux.turnLightOff()
            })
        }else {
            this.getId().removeEventListener('mousedown', function() {
                aux.turnLightOn()
            })
            this.getId().removeEventListener('mouseup', function() {
                aux.turnLightOff()
            })
            this.getId().removeEventListener('mouseout', function() {
                aux.turnLightOff()
            })
        }
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