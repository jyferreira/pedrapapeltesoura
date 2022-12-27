let mao = 0
input.onGesture(Gesture.Shake, function () {
    mao = randint(0, 2)
    if (mao == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (mao == 1) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
