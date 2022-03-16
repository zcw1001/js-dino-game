import GameObject from './GameObject'

class Track extends GameObject {
    constructor() {
        super()
        this.ele = document.querySelector('#track')
    }
    clearAnimations() {
        this.ele.classList.remove('trackFlowing')
    }
    addAnimations() {
        this.ele.classList.add('trackFlowing')
    }
}

export default Track