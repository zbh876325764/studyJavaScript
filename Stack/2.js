const a = {
    b: {
        c: {
            d: 123,
            e: 456
        }
    },
    f: {
        g: 789,
        h: {
            i: 'a'
        }
    }
}
const json = JSON.stringify(a) //{"b":{"c":{"d":123,"e":456}},"f":{"g":789,"h":{"i":"a"}}}



