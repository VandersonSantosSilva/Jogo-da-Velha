//formar as posições dos blocos
//criar os Jogadores
//adicionar os simbolos
//definir a sequencia vencedora
//definir o jogador vencedor

let posicoes = ["","","","","","","","",""]
let jogadores = 0
let simbolos = ["x","o"]
let gameOver = false
let vencedores = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
let blocos = document.querySelectorAll('.bloco')

function movimentacao(identidade){

    if(gameOver){
         return 
    }

    if(posicoes[identidade] == ""){
        posicoes[identidade] = simbolos[jogadores]

        gameOver = vencedor()

        if(gameOver == false){
            jogadores = (jogadores == 0)?1:0
        }
    }

    return gameOver

}


function vencedor(){

    for(let p = 0; p < vencedores.length; p++){
        let sequencia = vencedores[p]

        let posicao1 = sequencia[0]
        let posicao2 = sequencia[1]
        let posicao3 = sequencia[2]

        if(posicoes[posicao1] == posicoes[posicao2] 
            && posicoes[posicao1] == posicoes[posicao3] && posicoes[posicao1] != ""){
                return true
        }

        let x = posicoes.filter((empata)=> empata == "x")
        let o = posicoes.filter((empata)=> empata == "o")

        if(x.length >= 5 && o.length >= 4 || o.length >= 5 && x.length >= 4 ){
            Swal.fire(
                'Jogo Finalizado!',
                'Couve e Melancia empataram!'
            )
            setTimeout(()=>{
                posicoes = ["","","","","","","","",""]
                jogadores = 0
                gameOver = false

                blocos.forEach((limpar)=>{
                    limpar.innerHTML = ""
                })
            },2000)
        }
    }

    return false

}

function reset(){
    blocos.forEach((zero)=>{
        zero.innerHTML = ""

    })

    posicoes = ["","","","","","","","",""]
    jogadores = 0
    gameOver = false
}

function resetJG(){
    location.reload()

}