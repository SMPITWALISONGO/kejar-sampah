controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    let Hantu: Sprite = null
    info.changeScoreBy(1)
    Hantu.setPosition(randint(0, 150), randint(0, 120))
    info.startCountdown(10)
})
game.onUpdate(function () {
	
})
