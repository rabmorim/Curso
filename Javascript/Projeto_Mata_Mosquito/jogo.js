var largura = 0
var altura = 0
var vidas = 1
var tempo = 15
var nivel = window.location.search // recuperou o valor apos o ponto de interrogação no link ou seja o valor passado
var criaMosquitoTempo = 1500

nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    //1500 milisegundos
    criaMosquitoTempo = 1500
}else if( nivel === 'dificil'){
    //1000 milisegundos
    criaMosquitoTempo = 1000
}else if( nivel === 'chucknorris'){
    //750 milisegundos
    criaMosquitoTempo = 750
}

var cronometro = setInterval( function(){
    tempo -= 1
    if( tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo 
    }
},1000)

function ajustaTamanhoPalcoJogo(){
     altura = window.innerHeight
     largura = window.innerWidth
     //console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()


function posicaoRandomica(){
    // remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if(vidas > 3){
            //game over
            window.location.href = 'fim_de_jogo.html'
        } else{
            document.getElementById('v'+ vidas).src = 'imagens/coracao_vazio.png'

            vidas++
        }
    }
    
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
    //console.log(posicaoX, posicaoY)
    posicaoX = posicaoX < 0 ? 0 : posicaoX // se a posição x for menor que 0, ela recebe 0, caso contrario recebe ela mesma
    posicaoY = posicaoY < 0 ? 0 : posicaoY// se a posição y for menor que 0, ela recebe 0, caso contrario recebe ela mesma

    //criar o elemento html

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }
    document.body.appendChild(mosquito)

}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3) // possibilidade de valores 0, 1 e 2
    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'

    }
}