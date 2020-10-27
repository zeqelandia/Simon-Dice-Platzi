export default class Score {
    constructor(id) {
        this.id = id
        this.points = 0
        this.getId
        this.getPoints
        this.setPoints
        this.increasePoints
    }

    getId() {
        return this.id
    }

    getPoints() {
        return this.points
    }

    setPoints(n, str) {
        this.points = n
        this.id.innerHTML = `${str}: ${this.points}`
    }

    increasePoints() {
        this.setPoints(this.getPoints()+1)
    }
}