const fs = require('fs')

function read(path) {
    const text = fs.readFileSync(path, { encoding: 'utf8'}, (err, text) => {
        if (err) throw Error(err)
        console.log(text)
    })
    console.log(text)
}
read('./read.txt')

function append(path) {
    fs.open(path,  'r+', (err, data) => {
        if (err) throw Error(err)
        console.log('opened')

        fs.appendFile(path, 'Name: Anar, Surname: Balsarina, Date of birth: 16.11.1994', 'utf8', (err) => {
            console.log('done')
        })
    })
}

append('./read.txt')