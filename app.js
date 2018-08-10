const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const fs = require('fs')
const ejs = require('ejs')
const jsonFile = __dirname + '/pr.json'

// const data = fs.readFileSync(jsonFile, 'utf-8')
// console.log(data)
app.use(express.static(path.join(__dirname + '/Script')))

ejs.open = '{{'
ejs.close = '}}'

fs.readFile(jsonFile, 'utf-8', (err, conteudo) => {
    data = JSON.parse(conteudo)
    return data
})



//http://beautifytools.com/excel-to-json-converter.php Conversor
app.use(bodyParser.urlencoded({ extended: true }))
app.engine('html', ejs.renderFile)
app.set('view engine', 'html')
app.set('views', __dirname)


const token = [{
    token: 'ksd123456',
    profile: {
            user: 'roncaefuca',
            pwd: 'ursoporco',
            ativo: false
        }
    },
    {
    token: 'lki654321',
    profile: {
        user: 'roncaefuca',
        pwd: 'ursoporco',
        token: 'ksd123546',
        ativo: false   
    }
 }]


app.get('/verify', (req, resp) => {
    const key = data => data.token == req.query.token
    const result = token.filter(key)
    // const result = JSON.stringify(token.filter(key))
    
    resp.send(result)
})

var municipio
var cultivar

app.post('/cultivar', (req, resp) => {
    const conteudo = fs.readFile(__dirname + '/cultivar.json', 'utf-8', (err, conteudo) => {
        data = JSON.parse(conteudo)
        console.log(data.filter(macro))

        //return data.filter(macro)
    })
    console.log(`Conteudo: ${conteudo}`)
    console.log(`Data ${data.filter(macro)}`)
    resp.send(data.filter(macro))
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Alterado!</h1>')
})

const teste = file => { fs.readFile(jsonFile, 'utf-8', (err, conteudo) => {
    return JSON.parse(conteudo)
})}

app.get('/', function (req, res) {

    fs.readFile(__dirname + '/pr.json', 'utf-8', (err, conteudo) => {
        municipio = JSON.parse(conteudo)
    })

    fs.readFile(__dirname + '/cultivar.json', 'utf-8', (err, conteudo) => {
        cultivar = JSON.parse(conteudo)
    })
    console.log(teste(__dirname + '/pr.json'))
    res.render( 'index', {subtitle: 'teste', data: {
        municipios: municipio, 
        cultivares: cultivar}
    })
   // console.log(req)
 })

 app.post('/', function (req, res) {
    const selCultivar = data => data.id == req.body.cultivar
    const selMunicipio = data => data.value == req.body.municipio
    console.log(req.body.cultivar)
    selectedCultivar = cultivar.filter(selCultivar)
    selectedMunicipio= municipio.filter(selMunicipio)
    console.log(selectedMunicipio[0].municipio)
    console.log(selectedCultivar)
    res.render( 'index', {subtitle: 'teste', data: {
        municipios: municipio, 
        cultivares: cultivar,
        result: {
            cultivar: selectedCultivar[0],
            municipio: selectedMunicipio[0]
        }
    }
    })
   // console.log(req)
 })



 var port = process.env.PORT || 3000

app.listen(port, function () {
    console.log(`Umbler listening on port ${port}`)
})

