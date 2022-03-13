const express = require('express')
const app = express()
const port = 3000
const path = '192.168.0.107'

app.get('/', (req, res) => {
    res.send('Hello World!')
    console.log('open page')
})

app.listen(port, path, () => {
    console.log(`Example app listening on ${path}:${port}`)
})