class GameObject {
    getRect() {
        let {top, bottom, left, right} = this.ele.getBoundingClientRect()
        return {
            topLeft: { x: left, y: top },
            bottomRight: { x: right, y: bottom }
        }
    }
}

export default GameObject