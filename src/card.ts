class CartaoDeCredito {
    nome: string;
    numeroCartao: number;
    dataDeVencimento: Date;
    cvv: number;
    bandeiraCartao: string;
    
    constructor(nome: string, numeroCartao: number, dataDeVencimento: Date, cvv: number, bandeiraCartao: string) {
        this.nome = nome;
        this.numeroCartao = numeroCartao;
        this.dataDeVencimento = dataDeVencimento;
        this.cvv = cvv;
        this.bandeiraCartao = bandeiraCartao;
    }

    validarCartao() {
        const dataAtual = new Date();

        if (!this.nome || !this.numeroCartao || !this.dataDeVencimento || !this.cvv || !this.bandeiraCartao) {
            console.log("Dados incompletos.");
            return false;
        }

        if (this.numeroCartao.toString().length !== 16) {
            console.log("Número de cartão inválido.");
            return false;
        }

        if (this.cvv.toString().length < 3 || this.cvv.toString().length > 4) {
            console.log("CVV inválido.");
            return false;
        }

        if (this.dataDeVencimento <= dataAtual) {
            console.log("Cartão vencido.");
            return false;
        }

        console.log("Cartão válido com sucesso.");
        return true;
    }
}

const formasdepagamento2 = new CartaoDeCredito("Guilherme", 5159891955651234, new Date("2025-10-05"), 250, "VISA");
console.log(formasdepagamento2);
formasdepagamento2.validarCartao();
