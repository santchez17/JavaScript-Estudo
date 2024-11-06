var agora = new Date() // para conseguir a data do PC
var diaSem = agora.getDay() //get day pega o dia da semana do PC

switch(diaSem){ //switch cria como se fosse uma capsula que executa a CASE correspondente ao numero que a var() resultar
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')        
        break
    case 3:
        console.log('Quarta')    
        break
    case 4:
        console.log('Quinta')    
        break
    case 5:
        console.log('Sexta')    
        break
    case 6:
        console.log('Sábado')
        break
}