const numbers = require('../utils/numbers');

const animales = [
    "Panda",
    "Gato",
    "Perro",
    "Oso",
    "Hormiga",
    "Loro",
    "Bufalo",
    "Lobo",
    "Leon",
    "Nyu",
    "Aguila",
    "Halcon",
    "PezAngel",
    "Delfin",
    "Tiburon"
]

const adjetivos = [
    "Salton",
    "Torpe",
    "Flojo",
    "Cenutrio",
    "AllanaBarroncas",
    "Entusiasta",
    "Lloron",
    "ChupaLimones",
    "MuerdePiedras",
    "Afortunado",
    "Cotilla",
    "AranyaPuertas",
    "Cornudo",
    "Vago",
    "Bocazas"
]

function generateShortCode() {
    let randOne = numbers.randomIntRange(0, animales.length - 1)
    let randTwo = numbers.randomIntRange(0, adjetivos.length - 1)
    return {
        objectStored : `${animales[randOne].toLowerCase()}${adjetivos[randTwo].toLowerCase()}`,
        objectToShow : `${animales[randOne]}${adjetivos[randTwo]}`
    }
}

module.exports = { generateShortCode }