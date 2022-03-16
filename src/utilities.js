export function throttle(fn, wait) {
    let runnable = true
    return function () {
        if (!runnable) {
            return
        }
        runnable = false
        fn.apply(this, arguments)
        setTimeout(() => {
            runnable = true
        }, wait)
    }
}

export function randomNumber(n) {
    return Math.floor(Math.random() * n) + 1
}

export function detectCollision(rect1, rect2) {
    if (rect1.topLeft.x >= rect2.bottomRight.x ||
        rect2.topLeft.x >= rect1.bottomRight.x
    ) {
        return false
    }
    if (rect1.bottomRight.y <= rect2.topLeft.y ||
        rect2.bottomRight.y <= rect1.topLeft.y
    ) {
        return false
    }
    return true
}