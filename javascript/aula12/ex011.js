var idade = 67 //variavel idade
if (idade < 16) { //se idade for menor que 16
    console.log('Não vota') //escrever no console 'nao vota'
}else if(idade <18 || idade > 65){ //ou se a idade for menor que 18 ou idade for maior que 65
    console.log('Voto opcional')//escrever no console 'voto opcional'
}else{//se não
    console.log('Vota')//escrever no console 'vota'
}