var agora = new Date() //variavel agora = new date serve para pegar a hora, dia, etc... do PC
var hora = agora.getHours()//variavel hora = variavel agora, get de pegar e hours de hora, tem outros get
console.log(`Agora são exatamente ${hora} horas.`)//escreve no console isso ae
if(hora < 12 && hora >= 6){//se hora for menor que 12 e maior ou igual a 6
    console.log('Bom dia!')//Bom día :D
}else if(hora <= 18 && hora >= 12){//ou se hora for menor ou igual a 18 e, maior ou igual a 12
    console.log('Boa tarde!')//Boa tarde :)
}else if(hora >= 0 && hora < 6){//ou se hora for maior ou igual a 0 e, menor que 6
    console.log('Boa madrugada!')//Boa madrugada? :|
}else{//ou se tudo der errado ai tem isso ai
    console.log('Boa noite!')//Noitchê
}