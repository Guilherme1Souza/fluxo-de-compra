export class Boleto {
    private _razaoSocial: string;
    private _codigoDeBarras: number;
    private _dataDeVencimento: Date;
    private _dataAtual: Date;

    constructor(razaoSocial: string, codigoDeBarras: number, dataDeVencimento: Date, dataAtual: Date) {
        this._razaoSocial = razaoSocial;
        this._codigoDeBarras = codigoDeBarras;
        this._dataDeVencimento = dataDeVencimento;
        this._dataAtual = dataAtual;
    }

    get razaoSocial() {
        return this._razaoSocial;
    }

    set razaoSocial(value: string) {
        if (!value) {
            console.log("Razão social inválida.");
        } else {
            this._razaoSocial = value;
        }
    }

    get codigoDeBarras() {
        return this._codigoDeBarras;
    }

    set codigoDeBarras(value: number) {
        if (value.toString().length !== 18) {
            console.log("Código de barras inválido.");
        } else {
            this._codigoDeBarras = value;
        }
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

    get dataAtual() {
        return this._dataAtual;
    }

    set dataAtual(value: Date) {
        if (value > new Date()) {
            console.log("Data atual não pode ser futura.");
        } else {
            this._dataAtual = value;
        }
    }

    // Método de validação
    validarDataDeVencimento(): boolean {
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

    processarPagamento() {
        if (this.validarDataDeVencimento()) {
            console.log("Pagamento processado com sucesso.");
        } else {
            console.log("Falha ao processar o pagamento.");
        }
    }
}


const boleto1 = new Boleto("ADA TECH", 23456789012345678, new Date("2025-10-01"), new Date("2024-05-02"));
console.log(boleto1);
boleto1.validarDataDeVencimento();
