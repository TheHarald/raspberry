const express = require('express')
const app = express()
const port = 3000
const ip = require('ip');
const address = ip.address()

app.get('/', (req, res) => {
    res.send('Hello World!')
    console.log(address)
    console.log('open page')
})

app.listen(port, address, () => {
    console.log(`Example app listening on ${address}:${port}`)
})