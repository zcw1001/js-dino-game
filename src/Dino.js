import GameObject from './GameObject'
import {throttle} from './utilities'

class Dino extends GameObject {
    constructor() {
        super()
        this.ele = document.querySelector('#dino')

        this.jumpDuration = 600
    }
    jump() {
        this.ele.classList.add('dinoJump')
        this.ele.classList.remove('dinoRun')
    }
    run() {
        this.ele.classList.remove('dinoJump')
        this.ele.classList.add('dinoRun')
    }
    clearAnimations() {
        this.ele.classList.remove('dinoJump')
        this.ele.classList.remove('dinoRun')
    }
    addAnimations() {
        this.ele.classList.add('dinoRun')
    }
    detectKeyDown(e) {
        (throttle((e) => {
            if (e.keyCode == 32 || e.keyCode == 38) {
                this.jump()
            }
            this.jumpTimer = setTimeout(() => {
                this.run()
            }, this.jumpDuration)
        }, this.jumpDuration))(e)
    }
    init() {
        this.keyDownListener = this.detectKeyDown.bind(this)
        document.addEventListener('keydown', this.keyDownListener)
    }
    disable() {
        clearTimeout(this.jumpTimer)
        document.removeEventListener('keydown', this.keyDownListener)
    }
}

export default Dino