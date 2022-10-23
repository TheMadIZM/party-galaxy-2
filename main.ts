function TitleScreen () {
    effects.confetti.startScreenEffect()
    game.splash("WELCOME TO", "PARTY GALAXY")
    game.showLongText("CONTROLS: W,A,S,D/ARROWS - DIRECRIONS, Z/SPACE - SHOOT", DialogLayout.Bottom)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`myImage0`, ship, 0, -140)
    projectile.startEffect(effects.trail, 2000)
    animation.runImageAnimation(
    projectile,
    [img`
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . 2 4 2 . . . . . . 
        . . . . . . 2 2 4 2 2 . . . . . 
        . . . . . . 2 4 4 4 2 . . . . . 
        . . . . . 2 2 4 5 4 2 2 . . . . 
        . . . . . 2 4 4 5 4 4 2 . . . . 
        . . . . . 2 4 5 5 5 4 2 . . . . 
        . . . . . 2 4 5 1 5 4 2 . . . . 
        . . . . . 2 4 5 1 5 4 2 . . . . 
        . . . . . 2 4 5 5 5 4 2 . . . . 
        . . . . . 2 4 4 5 4 4 2 . . . . 
        . . . . . 2 2 4 5 4 2 2 . . . . 
        . . . . . . 2 4 4 4 2 . . . . . 
        . . . . . . 2 2 4 2 2 . . . . . 
        . . . . . . . 2 4 2 . . . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        `,img`
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . . 4 5 4 . . . . . . 
        . . . . . . 4 4 5 4 4 . . . . . 
        . . . . . . 4 5 5 5 4 . . . . . 
        . . . . . 4 4 5 1 5 4 4 . . . . 
        . . . . . 4 5 5 1 5 5 4 . . . . 
        . . . . . 4 5 1 1 1 5 4 . . . . 
        . . . . . 4 5 1 2 1 5 4 . . . . 
        . . . . . 4 5 1 2 1 5 4 . . . . 
        . . . . . 4 5 1 1 1 5 4 . . . . 
        . . . . . 4 5 5 1 5 5 4 . . . . 
        . . . . . 4 4 5 1 5 4 4 . . . . 
        . . . . . . 4 5 5 5 4 . . . . . 
        . . . . . . 4 4 5 4 4 . . . . . 
        . . . . . . . 4 5 4 . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        `,img`
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 1 5 . . . . . . 
        . . . . . . 5 5 1 5 5 . . . . . 
        . . . . . . 5 1 1 1 5 . . . . . 
        . . . . . 5 5 1 2 1 5 5 . . . . 
        . . . . . 5 1 1 2 1 1 5 . . . . 
        . . . . . 5 1 2 2 2 1 5 . . . . 
        . . . . . 5 1 2 4 2 1 5 . . . . 
        . . . . . 5 1 2 4 2 1 5 . . . . 
        . . . . . 5 1 2 4 2 1 5 . . . . 
        . . . . . 5 1 2 2 2 1 5 . . . . 
        . . . . . 5 1 1 2 1 1 5 . . . . 
        . . . . . 5 5 1 1 1 5 5 . . . . 
        . . . . . . 5 5 1 5 5 . . . . . 
        . . . . . . . 5 1 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        `,img`
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . 1 2 1 . . . . . . 
        . . . . . . . 1 2 1 . . . . . . 
        . . . . . . 1 2 2 2 1 . . . . . 
        . . . . . . 1 2 4 2 1 . . . . . 
        . . . . . 1 2 2 4 2 2 1 . . . . 
        . . . . . 1 2 4 4 4 2 1 . . . . 
        . . . . . 1 2 4 5 4 2 1 . . . . 
        . . . . . 1 2 4 5 4 2 1 . . . . 
        . . . . . 1 2 4 4 4 2 1 . . . . 
        . . . . . 1 2 2 4 2 2 1 . . . . 
        . . . . . 1 1 2 4 2 1 1 . . . . 
        . . . . . 1 1 2 2 2 1 1 . . . . 
        . . . . . . 1 1 2 1 1 . . . . . 
        . . . . . . . 1 2 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite2, otherSprite2) {
    scene.cameraShake(8, 1500)
    otherSprite2.destroy(effects.halo)
    sprite2.startEffect(effects.fire, 200)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.disintegrate)
    info.changeScoreBy(1)
})
let projectile: Sprite = null
let ship: Sprite = null
TitleScreen()
let asteroids = [
assets.image`myImage4`,
assets.image`myImage3`,
assets.image`myImage2`,
assets.image`myImage5`,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f 7 1 3 3 f . . . . . 
    . . . . f 7 7 1 3 3 3 f . . . . 
    . . . . f 7 7 1 3 3 3 f . . . . 
    . . . f 7 7 1 1 3 3 1 1 f . . . 
    . . . f 7 1 1 1 1 1 1 2 f . . . 
    . . f 7 1 1 5 1 1 1 2 2 2 f . . 
    . . f 1 1 5 5 5 1 2 2 2 2 f . . 
    . . f 1 1 1 5 1 1 2 2 2 2 f . . 
    . . f 4 4 1 1 1 1 1 2 2 2 f . . 
    . . f 4 4 4 1 1 1 1 1 2 2 f . . 
    . . f 4 4 4 4 1 1 a 1 1 1 f . . 
    . . . f 4 4 4 1 a a a 1 f . . . 
    . . . . f f 4 1 a a f f . . . . 
    . . . . . . f f f f . . . . . . 
    `
]
ship = sprites.create(assets.image`myImage`, SpriteKind.Player)
animation.runImageAnimation(
ship,
[img`
    .........ffffffffffffff.........
    ........fccccccccccccccf........
    ........8888888888888888........
    ........2222222222222222........
    ......ff8888888888888888ff......
    ......fcfccccccccccccccfcf......
    ......fcfcffffffffffffcfcf......
    ......fcfcbbbbbbbbbbbbcfcf......
    ......fcfcddddddddddddcfcf......
    ......fcfcccccfccfcccccfcf......
    ......fcfcccccfccfcccccfcf......
    ......fcfcccccfccfcccccfcf......
    ......fcfcccccfccfcccccfcf......
    ......fcfcccccfccfcccccfcf......
    ......fffccccffccffccccfff......
    ........fcccfcfccfcfcccf........
    ........fcccfccccccfcccf........
    ........fccccfccccfccccf........
    ........fcccccffffcccccf........
    ........fccccccccccccccf........
    .........fccccccccccccf.........
    ..........fcccffffcccf..........
    ...........fccccccccf...........
    .........ffcfccccccfcff.........
    .......ff55ccffffffcc55ff.......
    ......fccc55cccccccc55cccf......
    ......fcccc55cccccc55ccccf......
    .....fcccccc555cc555ccccccf.....
    .....fcccccccc5555ccccccccf.....
    ....fccccccccccccccccccccccf....
    ....fccccccccccccccccccccccf....
    ....ffffffffffffffffffffffff....
    `,img`
    .........ffffffffffffff.........
    ........fccccccccccccccf........
    ........8888888888888888........
    ........2222222222222222........
    ........88888888888ff888........
    ........fcccccccccfccfcf........
    ........fffffffffcfccfcf........
    .........fbbbbbbbcfccfcf........
    ..........fddddddcfccfcf........
    ..........fcccccccfccfcf........
    ..........fcccccccfccfcf........
    ..........fcccccccfccfcf........
    ..........fcccccccfccfcf........
    .........ffcccccccfccfcf........
    ........fccccfcccccffccf........
    ........fccccfcccccccccf........
    .........fffffcccccccccf........
    ...........fcccccccccccf........
    ..........fccccccccccccf........
    ..........fccccccccccccf........
    ..........ffffccccccccff........
    ..........fccccccccccff.........
    ..........fccccccccffff.........
    ..........ffcccccffcc5ff........
    ...........ffffffccc555ff.......
    ............fccccc555cccff......
    ..........fffcc55555cccccff.....
    .........ff5555555ccccccccf.....
    ........ff555cccccccccccccff....
    .......ffccccccccccccccccccf....
    .......fcccccccccccccccccccf....
    .......fffffffffffffffffffff....
    `,img`
    .........ffffffffffffff.........
    ........fccccccccccccccf........
    ........8888888888888888........
    ........2222222222222222........
    ........8888888ff888888f........
    ........fcccccfccfcccccf........
    ........fcccccfccfcccccf........
    .........fccccfccfcccccf........
    ..........fcccfccfcccccf........
    ..........fcccfccfcccccf........
    .........ffcccfccfcccccf........
    .........fccccfccfcccccf........
    ........ffccccfccfcccccf........
    ........fcccccfccfcccccf........
    .......ffccccccffccccccf........
    ......fccccccccccccccccf........
    ......fcccfccccccccccccf........
    .......fffcccccccccccccf........
    .........fccccccccccccff........
    ........ffcccccccccccff.........
    ........fcccccccccccff..........
    ........fffccccccccff...........
    ........fccccccccffffff.........
    ........fccccccfffcc55ff........
    ........ffcccfffccc555cff.......
    .........fffffccc555ccccff......
    ............fcc5555ccccccff.....
    ..........ff55555cccccccccf.....
    .........f5555ccccccccccccff....
    ........ffcccccccccccccccccf....
    ........fccccccccccccccccccf....
    ........ffffffffffffffffffff....
    `,img`
    .........ffffffffffffff.........
    ........fccccccccccccccf........
    ........8888888888888888........
    ........2222222222222222........
    ........88888ff888888888........
    ........fcccfccfcccccccf........
    ........ffccfccfcccccccf........
    .........fccfccfcccccccf........
    ..........fcfccfcccccccf........
    ..........fcfccfcccccccf........
    ..........fcfccfcccccccf........
    ..........fcfccfcccccccf........
    ..........fcfccfcccccccf........
    ..........fcfccfcccccccf........
    .........fcccffccccccccf........
    ........fccccccccccccccf........
    ........fccccccccccccccf........
    .........ffccccccccccccf........
    ..........fccccccccccccf........
    ..........fccccccccccccf........
    ..........ffcccccccccccf........
    ..........fccccccccccccf........
    ...........fccccccccccf.........
    ...........fffcccffcccff........
    .............ffffcc5555ff.......
    ...........fffccc5555cccff......
    ..........ff5555555ccccccff.....
    .........f55555cccccccccccf.....
    ........ffccccccccccccccccff....
    ........fccccccccccccccccccf....
    ........fccccccccccccccccccf....
    ........ffffffffffffffffffff....
    `,img`
    .........ffffffffffffff.........
    ........fccccccccccccccf........
    ........8888888888888888........
    ........2222222222222222........
    ......ff8888888888888888ff......
    ......fcfccccccccccccccfcf......
    ......fcfccccccccccccccfcf......
    ......fcfccccccccccccccfcf......
    ......fcfccccccccccccccfcf......
    ......fcfccccccccccccccfcf......
    ......fcfccccccccccccccfcf......
    ......fcfccccccccccccccfcf......
    ......fcfccccccccccccccfcf......
    ......fcfccccccccccccccfcf......
    ......fffccccccccccccccfff......
    ........fccccccccccccccf........
    ........fccccccccccccccf........
    ........fccccccccccccccf........
    ........fccccccccccccccf........
    ........fccccccccccccccf........
    .........fccccccccccccf.........
    ..........fccccccccccf..........
    ...........fccccccccf...........
    .........ffccccccccccff.........
    .......ff555cccccccc555ff.......
    ......fccc555555555555cccf......
    ......fccccccccccccccccccf......
    .....fccccccccccccccccccccf.....
    .....fccccccccccccccccccccf.....
    ....fccccccccccccccccccccccf....
    ....fccccccccccccccccccccccf....
    ....ffffffffffffffffffffffff....
    `,img`
    .........ffffffffffffff.........
    ........fccccccccccccccf........
    ........8888888888888888........
    ........2222222222222222........
    ........888888888ff88888........
    ........fcccccccfccfcccf........
    ........fcccccccfccfccff........
    ........fcccccccfccfccf.........
    ........fcccccccfccfcf..........
    ........fcccccccfccfcf..........
    ........fcccccccfccfcf..........
    ........fcccccccfccfcf..........
    ........fcccccccfccfcf..........
    ........fcccccccfccfcf..........
    ........fccccccccffcccf.........
    ........fccccccccccccccf........
    ........fccccccccccccccf........
    ........fccccccccccccff.........
    ........fccccccccccccf..........
    ........fccccccccccccf..........
    ........fcccccccccccff..........
    ........fccccccccccccf..........
    .........fccccccccccf...........
    ........ffcccffcccfff...........
    .......ff5555ccffff.............
    ......ffccc5555cccfff...........
    .....ffcccccc5555555ff..........
    .....fccccccccccc55555f.........
    ....ffccccccccccccccccff........
    ....fccccccccccccccccccf........
    ....fccccccccccccccccccf........
    ....ffffffffffffffffffff........
    `,img`
    .........ffffffffffffff.........
    ........fccccccccccccccf........
    ........8888888888888888........
    ........2222222222222222........
    ........f888888ff8888888........
    ........fcccccfccfcccccf........
    ........fcccccfccfcccccf........
    ........fcccccfccfccccf.........
    ........fcccccfccfcccf..........
    ........fcccccfccfcccf..........
    ........fcccccfccfcccff.........
    ........fcccccfccfccccf.........
    ........fcccccfccfccccff........
    ........fcccccfccfcccccf........
    ........fccccccffccccccff.......
    ........fccccccccccccccccf......
    ........fccccccccccccfcccf......
    ........fcccccccccccccfff.......
    ........ffccccccccccccf.........
    .........ffcccccccccccff........
    ..........ffcccccccccccf........
    ...........ffccccccccfff........
    .........ffffffccccccccf........
    ........ff55ccfffccccccf........
    .......ffc555cccfffcccff........
    ......ffcccc555cccfffff.........
    .....ffcccccc5555ccf............
    .....fccccccccc55555ff..........
    ....ffcccccccccccc5555f.........
    ....fcccccccccccccccccff........
    ....fccccccccccccccccccf........
    ....ffffffffffffffffffff........
    `,img`
    .........ffffffffffffff.........
    ........fccccccccccccccf........
    ........8888888888888888........
    ........2222222222222222........
    ........888ff88888888888........
    ........fcfccfcccccccccf........
    ........fcfccfcfffffffff........
    ........fcfccfcbbbbbbbf.........
    ........fcfccfcddddddf..........
    ........fcfccfcccccccf..........
    ........fcfccfcccccccf..........
    ........fcfccfcccccccf..........
    ........fcfccfcccccccf..........
    ........fcfccfcccccccff.........
    ........fccffcccccfccccf........
    ........fcccccccccfccccf........
    ........fcccccccccfffff.........
    ........fcccccccccccf...........
    ........fccccccccccccf..........
    ........fccccccccccccf..........
    ........ffccccccccffff..........
    .........ffccccccccccf..........
    .........ffffccccccccf..........
    ........ff5ccffcccccff..........
    .......ff555cccffffff...........
    ......ffccc555cccccf............
    .....ffccccc55555ccfff..........
    .....fcccccccc5555555ff.........
    ....ffccccccccccccc555ff........
    ....fccccccccccccccccccff.......
    ....fcccccccccccccccccccf.......
    ....fffffffffffffffffffff.......
    `],
100,
true
)
ship.setStayInScreen(true)
ship.bottom = 120
controller.moveSprite(ship, 100, 100)
info.setLife(3)
effects.blizzard.startScreenEffect()
game.onUpdateInterval(20, function () {
    projectile = sprites.createProjectileFromSide(asteroids[randint(0, asteroids.length - 1)], 0, 75)
    projectile.setKind(SpriteKind.Enemy)
    projectile.x = randint(10, 150)
})
