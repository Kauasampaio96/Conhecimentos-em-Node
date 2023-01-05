const express = require('express')
const app = express()
const path = require('path')
const port = 5000

const basePath = path.join(__dirname, 'templates')

const pages = require('./paginas')

app.use(express.static('public'))

app.use('/paginas', pages)

app.get('/', (req,res) => {
    res.sendFile(`${basePath}/index.html`)
})


app.use(function(req,res,next) {
    res.status(404).sendFile(`${basePath}/404.html`)
})


app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})