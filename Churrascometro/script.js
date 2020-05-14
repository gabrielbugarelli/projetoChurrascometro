// Carne - 400 gramas por pessoa + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000ml
//Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500 ml
//Crianças valem por 0.5

let inputAdultos = document.querySelector("#adultos")
let inputCriancas = document.querySelector("#criancas")
let inputDuracao = document.querySelector("#duracao")

let resultado = document.querySelector("#resultado")

function calcular() {

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let totalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)
    let totalCerveja = cervejaPP(duracao) * adultos
    let totalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas)

    resultado.innerHTML = `<p style="font-weight: bolder;">${totalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p style="font-weight: bolder;">${Math.ceil(totalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p style="font-weight: bolder;">${Math.ceil(totalBebidas / 2000)} Pet's 2L de Bebida (Água e Refrigerante)</p>`

}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 400
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500
    } else {
        return 1000
    }
}

