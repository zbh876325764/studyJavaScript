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

const jsonFormat = () => {
    const stack = []
    let res = ''
    for (let i = 0; i < json.length; i++) {
        let char = json[i]
        if (char === '{') {
            stack.push(char)
            char += '\n'
            for (let j = 0; j < stack.length; j++) {
                char += '    '
            }
        }
        if (char === '}') {
            stack.pop()
            for (let j = 0; j < stack.length; j++) {
                char = `    ${char}`
            }
            char = `\n${char}`
        }
        if(char === ','){
            char +='\n'
            for (let j = 0; j < stack.length; j++) {
                char += `    `
            }
        }
        if(char === ':'){
            char +=' '
        }
        res += char
    }
    return res
}


console.log(jsonFormat(json))
