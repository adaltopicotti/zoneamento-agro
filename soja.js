const cultivares = {}
const lista_cultivares = []

function criarCultivar(cultivar, mantenedor, grupo) {
    this.cultivar = []
    this.cultivar.push(cultivar)
    return {
        grupo,
        mantenedor,
        cultivar    
    }
}


lista_cultivares.push(criarCultivar('AV AGILY RR', 'AVANTI SEEDS', 'GRUPO I'))
lista_cultivares.push(criarCultivar('AV GURIA RR', 'AVANTI SEEDS', 'GRUPO I'))



// const filterMantenedor = (cultivar, a) => cultivar.mantenedor == 'AVANTI SEEDS'
const cult = []

lista_cultivares.push(criarCultivar(cult[0], cult[1], cult[2]))