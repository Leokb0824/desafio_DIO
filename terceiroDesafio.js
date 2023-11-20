class heroi{
    constructor(nomeHeroi, idadeHeroi, tipoHeroi, atackHeroi){
        this.nomeHeroi = nomeHeroi
        this.idadeHeroi = idadeHeroi
        this.tipoHeroi = tipoHeroi   
        this.atackHeroi = atackHeroi
    }

    apresentacao(){
        console.log(`Este é o heroi ${this.nomeHeroi} com idade de ${this.idadeHeroi} anos do tipo ${this.tipoHeroi}`)
    }

    atack() {
        switch (this.tipoHeroi) {
            case "guerreiro":
                this.atackHeroi = "uso espada";
                break;

            case "mago":
                this.atackHeroi = "uso magia";
                break;

            case "monge":
                this.atackHeroi = "uso artes marciais";
                break;

            case "ninja":
                this.atackHeroi = "uso shuriken";
                break;
        }
        console.log(`o ${this.tipoHeroi} atacou com ${this.atackHeroi}`)
    }

}

let primeiroHeroi = new heroi("Merlin", "60", "mago")
let segundoHeroi = new heroi("Luke", "21", "guerreiro")

primeiroHeroi.apresentacao()
primeiroHeroi.atack()

segundoHeroi.apresentacao()
segundoHeroi.atack()