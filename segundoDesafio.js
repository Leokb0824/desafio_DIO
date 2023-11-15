let nomeHeroi = "Kobe"
let vitorias = 287
let derrotas = 206
let frazeMsg = "Seu ranking é "
let classeHeroi = ""
let resultado = resultadoPartidas()


function resultadoPartidas(){
    return vitorias - derrotas
}

switch (true){
    case resultado <= 10:
        console.log(frazeMsg + "Ferro")
        classeHeroi = "Ferro"
        break;

    case resultado <= 20:
        console.log(frazeMsg + "Bronze")
        classeHeroi = "Bronze"
        break;
    
    case resultado <= 50:
        console.log(frazeMsg + "Prata")
        classeHeroi = "Prata"
        break;
    
    case resultado <= 80:
        console.log(frazeMsg + "Ouro")
        classeHeroi = "Ouro"
        break;

    case resultado <= 90:
        console.log(frazeMsg + "Diamante")
        classeHeroi = "Diamante"
        break;
     
    case resultado <= 100:
        console.log(frazeMsg + "Lendario")
        classeHeroi = "Lendario"
        break;
    
    case resultado >= 101:
        console.log(frazeMsg + "Imortal")
        classeHeroi = "Imortal"
        break;    
}

console.log("o heroi " + nomeHeroi + " tem saldo de " + resultado + " e está no nível de " + classeHeroi)