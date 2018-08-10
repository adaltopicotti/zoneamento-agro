const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const fs = require('fs')

const path = __dirname + '/pr.json'

// const data = fs.readFileSync(path, 'utf-8')
// console.log(data)

fs.readFile(path, 'utf-8', (err, conteudo) => {
    data = JSON.parse(conteudo)
    return data
})



//http://beautifytools.com/excel-to-json-converter.php Conversor
app.use(bodyParser.urlencoded({ extended: true }))



app.post('/cultivar', (req, resp) => {
    const macro = data => data.value == req.body.municipio
    fs.readFile(path, 'utf-8', (err, conteudo) => {
        data = JSON.parse(conteudo)
        console.log(data.filter(macro))
        return data.filter(macro)
    })
    //const doc = document.querySelector('[zon-result]')
    // const conteudo = document.getElementById('conteudo')
    // conteudo.innerHTML = 'teste'
    // console.log(req.query) --> para method GET

    resp.send(conteudo)
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Alterado!</h1>')
})


app.get('/', function (req, res) {
    res.send('Hello World');
 })
 
app.listen(3003)