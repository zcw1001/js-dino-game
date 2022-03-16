import DinoGame from './src/DinoGame'
import './index.css'

window.onload = function() {
    const game = new DinoGame()
    game.wait()
}