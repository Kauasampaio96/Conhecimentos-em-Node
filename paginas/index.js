const express = require('express')
const router = express.Router()

const path = require('path')
const basePath = path.join(__dirname, '../templates')

router.get('/pagina1', (req,res) => {
    res.sendFile(`${basePath}/pagina1.html`)
})

router.get('/pagina2', (req,res) => {
    res.sendFile(`${basePath}/pagina2.html`)
})

module.exports = router