class gameOver {
    constructor() {
        this.ele = document.querySelector('#game-over')
    }
    show() {
        this.ele.classList.add('show')
    }
    hide() {
        this.ele.classList.remove('show')
    }
}

export default gameOver