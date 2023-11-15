let nomeHeroi = "Kobe";
let nivelXp = 101500;
let classeHeroi = "";
let frazeClasse = "Seu herói está na classe ";

switch (true) {
    case nivelXp <= 1000:
        console.log(frazeClasse + "Ferro");
        classeHeroi = "Ferro";
        break;
    case nivelXp <= 2000:
        console.log(frazeClasse + "Bronze");
        classeHeroi = "Bronze";
        break;
    case nivelXp <= 5000:
        console.log(frazeClasse + "Prata");
        classeHeroi = "Prata";
        break;
    case nivelXp <= 7000:
        console.log(frazeClasse + "Ouro");
        classeHeroi = "Ouro";
        break;
    case nivelXp <= 8000:
        console.log(frazeClasse + "Platina");
        classeHeroi = "Platina";
        break;
    case nivelXp <= 9000:
        console.log(frazeClasse + "Ascendente");
        classeHeroi = "Ascendente";
        break;
    case nivelXp <= 10000:
        console.log(frazeClasse + "Imortal");
        classeHeroi = "Imortal";
        break;
    default:
        console.log(frazeClasse + "Radiante");
        classeHeroi = "Radiante";
        break;
}

console.log("O Herói de nome " + nomeHeroi + " está na classe " + classeHeroi)
