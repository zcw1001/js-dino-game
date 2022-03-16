class Score {
    constructor(speedupCallback) {
        this.ele = document.querySelector('#score')

        this.score = 0
        this.lastScore = 0
        this.speed = 1
        this.speedupCallback = speedupCallback
    }
    increment() {
        this.score += this.speed
        if (this.score > this.lastScore + 150) {
            this.speedup()
        }
    }
    speedup() {
        this.speed += 1
        this.lastScore = this.score
        this.speedupCallback()
    }
    updateScore() {
        this.increment()
        this.ele.innerText = this.score
    }
    init() {
        this.score = 0
        this.speed = 1
        this.lastScore = 0
    }
}

export default Score