import Cactus from './Cactus'
import GameInitial from './GameInitial'
import GameOver from './GameOver'
import Track from './Track'
import Score from './Score'
import Dino from './Dino'
import {randomNumber, detectCollision} from './utilities'

class DinoGame {
    constructor() {
        this.ele = document.querySelector('#game')
        this.cactuses = []
        this.gameInital = new GameInitial()
        this.gameOver = new GameOver()
        this.dino = new Dino()
        this.score = new Score(() => {
            this.updateAnimationDuration()
        })
        this.track = new Track()

        this.initial = true
    }
    start() {
        if (this.initial) {
            this.gameInital.hide()
            this.initial = false
        } else {
            this.gameOver.hide()
        }
        document.removeEventListener('keydown', this.startGameListener)
        
        this.animationDuration = '2s'
        this.addAnimations()
        this.setWatchers()

        this.dino.init()
        this.score.init()
    }
    stop() {
        this.clearWatchers()
        this.clearAnimations()
        this.removeCactuses()

        this.dino.disable()
        this.wait()
    }
    wait() {
        if (this.initial) {
            this.gameInital.show()
        } else {
            this.gameOver.show()
        }
        this.startGameListener = (e) => {
            if (e.keyCode == 32) {
                this.start()
            }
        }
        document.addEventListener('keydown', this.startGameListener)
    }
    setWatchers() {
        this.scoreWatcher = setInterval(() => {
            this.score.updateScore()
        }, 100)
        this.collisionWatcher = setInterval(() => {
            for (let cactus of this.cactuses) {
                if (detectCollision(this.dino.getRect(), cactus.getRect())) {
                    this.stop()
                }
            }
        }, 10)
        this.obstacleWatcher = setInterval(() => {
            if (this.cactuses.length == 0) {
                this.createCactus()
            } else if (this.cactuses.length == 1) {
                if (this.cactuses[0].getRect().topLeft.x < this.track.getRect().topLeft.x + randomNumber(200)) {
                    this.createCactus()
                }
            } else {
                if (this.cactuses[0].getRect().bottomRight.x < this.track.getRect().topLeft.x - 50) {
                    this.removeCactus()
                }
            }
        }, 10)
    }
    clearWatchers() {
        clearInterval(this.collisionWatcher)
        clearInterval(this.scoreWatcher)
        clearInterval(this.obstacleWatcher)
    }
    createCactus() {
        let cactus = new Cactus()
        this.ele.appendChild(cactus.ele)
        cactus.ele.style.animationDuration = this.animationDuration
        cactus.addAnimations()
        this.cactuses.push(cactus)
    }
    removeCactus() {
        let cactus = this.cactuses.shift()
        this.ele.removeChild(cactus.ele)
    }
    removeCactuses() {
        let n = this.cactuses.length
        for (let i = 0; i < n; i++) {
            this.removeCactus()
        }
    }
    clearAnimations() {
        this.dino.clearAnimations()
        this.track.clearAnimations()
        for (let cactus of this.cactuses) {
            cactus.clearAnimations()
        }
    }
    addAnimations() {
        this.dino.addAnimations()
        this.track.addAnimations()
        for (let cactus of this.cactuses) {
            cactus.addAnimations()
        }
    }
    updateAnimationDuration() {
        this.animationDuration = `${parseFloat(this.cactuses[0].ele.style.animationDuration) - 0.1}s`
    }
    
}

export default DinoGame