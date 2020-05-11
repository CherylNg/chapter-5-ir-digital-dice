basic.forever(function () {
    while (edubitIrBit.isIrSensorTriggered()) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    basic.showNumber(randint(1, 6))
    while (!(edubitIrBit.isIrSensorTriggered())) {
    	
    }
})
