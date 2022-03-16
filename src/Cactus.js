import GameObject from './GameObject'
import {randomNumber} from './utilities'

class Cactus extends GameObject {
    constructor() {
        super()
        this.ele = document.createElement('div')
        this.ele.classList.add('cactus')
        let randomInt = randomNumber(6)
        this.ele.classList.add('cactus' + randomInt)
    }
    clearAnimations() {
        this.ele.classList.remove('cactusFlowing')
    }
    addAnimations() {
        this.ele.classList.add('cactusFlowing')
    }
}

export default Cactus