export class CartaoDeCredito {
    private _nome: string;
    private _numeroCartao: number;
    private _dataDeVencimento: Date;
    private _cvv: number;
    private _bandeiraCartao: string;

    constructor(nome: string, numeroCartao: number, dataDeVencimento: Date, cvv: number, bandeiraCartao: string) {
        this._nome = nome;
        this._numeroCartao = numeroCartao;
        this._dataDeVencimento = dataDeVencimento;
        this._cvv = cvv;
        this._bandeiraCartao = bandeiraCartao;
    }

  
    get nome() {
        return this._nome;
    }

    set nome(val: string) {
        this._nome = val;
    }

    get numeroCartao() {
        return this._numeroCartao;
    }

    set numeroCartao(val: number) {
        this._numeroCartao = val;
    }

    get dataDeVencimento() {
        return this._dataDeVencimento;
    }

    set dataDeVencimento(value: Date) {
        const dataAtual = new Date();
        if (value <= dataAtual) {
            console.log("Data de vencimento inválida.");
        } else {
            this._dataDeVencimento = value;
        }
    }

    get cvv() {
        return this._cvv;
    }

    set cvv(value: number) {
        if (value.toString().length < 3 || value.toString().length > 4) {
            console.log("CVV inválido.");
        } else {
            this._cvv = value;
        }
    }

    get bandeiraCartao() {
        return this._bandeiraCartao;
    }

    set bandeiraCartao(value: string) {
        if (!value) {
            console.log("Bandeira do cartão inválida.");
        } else {
            this._bandeiraCartao = value;
        }
    }

    validarCartao(): boolean {
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

    processarPagamento() {
        if (this.validarCartao()) {
            console.log("Pagamento processado com sucesso.");
        } else {
            console.log("Falha ao processar o pagamento.");
        }
    }
}



const cartao1 = new CartaoDeCredito("Guilherme", 5159891955651234, new Date("2025-10-25"), 250, "VISA");
console.log(cartao1);
cartao1.validarCartao();
