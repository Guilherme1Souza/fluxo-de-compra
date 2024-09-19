
class Boleto {
    razaoSocial: string;
    codigoDeBarras: number;
    dataDeVencimento: Date;
    dataAtual: Date;
    
    ValidarDataDeVencimento() {

        if (!this.razaoSocial || !this.codigoDeBarras || !this.dataDeVencimento) {
            console.log("Dados incompletos.");
            return false;
        }

        if (this.dataDeVencimento <= this.dataAtual) {
            console.log("Boleto vencido.");
            return false;
        }

        console.log("Boleto válido com sucesso.");
        return true;
    }

    constructor(razaoSocial: string, codigoDeBarras: number, dataDeVencimento: Date, dataAtual: Date) {
        this.razaoSocial = razaoSocial;
        this.codigoDeBarras = codigoDeBarras;
        this.dataDeVencimento = dataDeVencimento;
        this.dataAtual = dataAtual
    }
}

const formasdepagamento3 = new Boleto("ADA TECH", 5159805610654092195565, new Date("2024-10-01"), new Date("2024-10-04"));
console.log(formasdepagamento3)
formasdepagamento3.ValidarDataDeVencimento();