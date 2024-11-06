function verificar(){
    let data = new Date() // pega a Data/horario do pc
    let ano = data.getFullYear() //Pega o ano inteiro do pc (2024 no caso)
    let fano = document.getElementById('txtano')//pega o valor html que for digitado
    let res = document.getElementById('res')//pega o valor html da div res
    
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        let fsex = document.getElementsByName('radsex')//vai pegar o valor html da bolinha se ta em 0(masculino) ou 1(feminino)
        let idade = ano - Number(fano.value)//variavel idade, sera a variavel ano la em cima que pega o ano do pc menos a variavel fano que é o ano digitado pela pessoa
        let genero = '' // variavel genero em branco para ser declarado aqui em baixo
        var img = document.createElement('img') //mesma coisa que fazer no HTML <img id='foto'> só que feito por JS
        img.setAttribute('id', 'foto')//colocando o id foto na img
        
        if(fsex[0].checked){//se o que estiver marcado no sexo for 0(masculino)(se fosse feminino era 1), checked é para checar
            genero = 'Homem'//variavel genero recebe homem
            
            if (idade >=0 && idade < 3){
                //bebe
                img.setAttribute('src', 'bebem.jpg')//imagem src(procura), criancam.jpg(nome da foto)
            }else if(idade <13){
                //criança
                img.setAttribute('src', 'criancam.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','jovemm.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','adultom.jpg')
            }else{
                //velho
                img.setAttribute('src','velhom.jpg')
            }
        }else if(fsex[1].checked){//se o que estiver marcado no sexo for 1 será mulher
            genero = 'Mulher'//variavel genero recebe mulher
            
            if(idade >=0 && idade < 3){
                //bebe
                img.setAttribute('src','bebef.jpg')
            }else if(idade <10){
                //criança
                img.setAttribute('src', 'criancaf.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovemf.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adultof.jpg')
            }else{
                //velho
                img.setAttribute('src', 'velhof.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)//appendchild adiciona um elemento(img) chamado img
        
    }
}