let np: neopixel.Strip = null
input.onGesture(Gesture.EightG, () => {
    serial.writeLine("stage3")
    radio.sendString("shake")
    basic.showNumber(3)
    np.clear()
    np.showColor(neopixel.colors(NeoPixelColors.Red))
    np.show()
    while (true) {
        music.playTone(Note.FSharp, music.beat(BeatFraction.Whole))
        basic.pause(25)
        music.playTone(Note.G, music.beat(BeatFraction.Whole))
        basic.pause(25)
    }
})
input.onGesture(Gesture.ThreeG, () => {
    serial.writeLine("stage1")
    radio.sendString("shake")
    basic.showNumber(1)
    np.clear()
    np.showColor(neopixel.colors(NeoPixelColors.Red))
    np.show()
    while (true) {
        music.playTone(Note.C, music.beat(BeatFraction.Whole))
        basic.pause(100)
        music.playTone(Note.B5, music.beat(BeatFraction.Whole))
        basic.pause(100)
    }
})
input.onGesture(Gesture.SixG, () => {
    serial.writeLine("stage2")
    radio.sendString("shake")
    basic.showNumber(1)
    np.clear()
    np.showColor(neopixel.colors(NeoPixelColors.Red))
    np.show()
    while (true) {
        music.playTone(Note.A, music.beat(BeatFraction.Whole))
        basic.pause(50)
        music.playTone(Note.Bb, music.beat(BeatFraction.Whole))
        basic.pause(50)
    }
})
radio.onDataPacketReceived(({receivedString}) => {
    basic.showIcon(IconNames.Sad)
    np.clear()
    np.showColor(neopixel.colors(NeoPixelColors.Red))
    np.show()
    while (true) {
        music.playTone(Note.C, music.beat(BeatFraction.Whole))
        basic.pause(100)
        music.playTone(Note.B5, music.beat(BeatFraction.Whole))
        basic.pause(100)
    }
})
np = neopixel.create(DigitalPin.P1, 17, NeoPixelMode.RGB)
np.clear()
basic.showIcon(IconNames.Happy)
np.clear()
np.showColor(neopixel.colors(NeoPixelColors.Green))
np.show()
