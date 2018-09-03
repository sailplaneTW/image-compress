const express = require('express')
const fs = require('fs');
const app = express()
const port = 3721

files = []

fs.readdir('./public/image', (err, _files) => {
    files = [..._files]
    console.log('!!!', JSON.stringify(files))
    /*
  files.forEach(file => {
    console.log(file);
  });
  */
})

app.get('/', (request, response) => {
    response.send(
        files.reduce((acc, v) => {
            return acc+`<img src='./image/${v}' />`
        }, '')
    )
})

app.use(express.static('public'));

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})
