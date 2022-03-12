let y = 0
let x = 0
radio.setGroup(1)
basic.showIcon(IconNames.Sword)
basic.forever(function () {
    x = Math.map(pins.analogReadPin(AnalogPin.P0), 1023, 0, -100, 100)
    y = Math.map(pins.analogReadPin(AnalogPin.P1), 1023, 0, -100, 100)
    radio.sendValue("x", x)
    basic.pause(100)
    radio.sendValue("y", y)
    basic.pause(100)
})
