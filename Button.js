export default class Button {
    constructor(id) {
        this.id = id
        this.getId
        this.setActive
    }

    getId() {
        return this.id
    }

    setActive(bool, fn) {
        if(bool) {
            this.getId().addEventListener('click', fn, true)
        }else {
            this.getId().removeEventListener('click', fn, true)
        }
    }
}