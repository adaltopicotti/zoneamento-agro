const express = require('express')
const app = express()
const bodyParser = require('body-parser')
//http://beautifytools.com/excel-to-json-converter.php Conversor
app.use(bodyParser.urlencoded({ extended: true }))



app.post('/cultivar', (req, resp) => {
    console.log(req.body)
    // console.log(req.query) --> para method GET
    resp.send(req.body)
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Alterado!</h1>')
})

app.listen(3003)