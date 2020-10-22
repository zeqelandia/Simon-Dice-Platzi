export default class Score {
    constructor(id) {
        this.id = id
        this.points = 0
        this.getId
        this.getPoints
        this.setPoints
        this.increasePoints
        this.resetPoints
    }

    getId() {
        return this.id
    }

    getPoints() {
        return this.points
    }

    setPoints(n) {
        this.points = n
        this.id.innerHTML = `Puntaje ${this.points}`
    }

    increasePoints() {
        this.setPoints(this.getPoints()+1)
    }

    resetPoints() {
        this.setPoints(0)
    }
}