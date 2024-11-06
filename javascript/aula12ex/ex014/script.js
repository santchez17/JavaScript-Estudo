function carregar(){

    var msg = window.document.getElementById('msg')
    var bao = window.document.getElementById('bom')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //bomdia
        foto.src = 'manha.jpg'
        bao.innerHTML = 'Bom día!'
    }else if(hora >= 12 && hora < 18){
        //boatarde
        foto.src = 'tarde.jpg'
        bao.innerHTML = 'Boa tarde!'
        document.body.style.background = '#ee7300'
    }else{
        //boanoite
        foto.src = 'noite.jpg'
        bao.innerHTML = 'Boa noite!'
        document.body.style.background = '#0c0c33'
    }
}
