class gameInital {
    constructor() {
        this.ele = document.querySelector('#game-initial')
    }
    show() {
        this.ele.classList.add('show')
    }
    hide() {
        this.ele.classList.remove('show')
    }
}

export default gameInital