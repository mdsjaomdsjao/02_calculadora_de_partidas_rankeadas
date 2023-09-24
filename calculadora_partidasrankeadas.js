// DESAFIO CALCULANDO PARTIDAS RANKEADAS

function calculo_ranqueadas(vitorias,derrotas){
    let saldo = (vitorias-derrotas)
    let resultado = ' '
    if (saldo <= 10){
        resultado = 'Ferro'
    } else if (saldo > 11 && saldo <=20){
        resultado = 'Bronze'
    } else if (saldo > 21 && saldo <=50){
        resultado = 'Prata'
    } else if (saldo > 51 && saldo <=80){
        resultado = 'Ouro'
    } else if (saldo > 81 && saldo <=90){
        resultado = 'Diamante'
    } else if (saldo > 91 && saldo <=100){
        resultado = 'Lendário'
    } else {
        resultado = 'Imortal'
    }
    console.log(`O herói tem de saldo de **${saldo}** vitórias e está no nível **${resultado}**`)
}
calculo_ranqueadas(20,5)