var largura = 0
var altura = 0

function ajustaTamanhoPalcoJogo(){
     altura = window.innerHeight
     largura = window.innerWidth
     //console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()


function posicaoRandomica(){
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