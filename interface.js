document.addEventListener("DOMContentLoaded", ()=>{

    let blocos = document.querySelectorAll('.bloco')

    blocos.forEach((pecas)=>{
        pecas.addEventListener('click', selecionar)

    })

})

let ml = 0
let cv = 0

function selecionar(event){

    let bl = document.querySelectorAll('.bloco')
    let identificadores = event.target.id

    if(movimentacao(identificadores)){
        let ven = posicoes[identificadores]
        let pl = document.querySelector('#placar')

    
        if(ven == "x"){
            Swal.fire(
                'Jogo Finalizado!',
                'O Couve é o Vencedor!'
            )
            
            setTimeout(()=>{
                bl.forEach((event)=>{
                    event.innerHTML = ""
                })
                
                posicoes = ["","","","","","","","",""]
                jogadores = 0
                gameOver = false

                pl.innerHTML = `Couve ( ${ml+1} ) X ( ${cv} ) Melancia`
                ml+=1

            },1000)

        }else{
            
            Swal.fire(
                'Jogo Finalizado!',
                'A Melancia é a Vencedora!'
            )
            
            setTimeout(()=>{
                bl.forEach((event)=>{
                    event.innerHTML = ""
                })
                
                posicoes = ["","","","","","","","",""]
                jogadores = 0
                gameOver = false

                pl.innerHTML = `Couve ( ${ml} ) X ( ${cv+1} ) Melancia`
                cv+=1
            },1000)
        }
    }

    bl.forEach((event)=>{
        let position = event.id
        let simbol = posicoes[position]

        if(simbol != ""){
            event.innerHTML = `<div class="${simbol}"></div>`

        }

    })
}

