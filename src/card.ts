import { FormaDePagamento } from "./forma";

export class CartaoDeCredito extends FormaDePagamento {
    private _numeroCartao: number;
    private _cvv: number;
    private _dataDeVencimento: Date;
    private _bandeira: string;

    constructor(valor: number, status: string, dataDePagamento: Date, numeroCartao: number, cvv: number, dataDeVencimento: Date, bandeira: string) {
        super(valor, status, dataDePagamento);
        this._numeroCartao = numeroCartao;
        this._cvv = cvv;
        this._dataDeVencimento = dataDeVencimento;
        this._bandeira = bandeira;
    }

    get numeroCartao(): number {
        return this._numeroCartao;
    }

    set numeroCartao(value: number) {
        if (value.toString().length !== 16) {
            console.log("Número de cartão inválido.");
        } else {
            this._numeroCartao = value;
        }
    }

    get cvv(): number {
        return this._cvv;
    }

    set cvv(value: number) {
        if (value.toString().length < 3 || value.toString().length > 4) {
            console.log("CVV inválido.");
        } else {
            this._cvv = value;
        }
    }

    get dataDeVencimento(): Date {
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

    get bandeira(): string {
        return this._bandeira;
    }

    set bandeira(value: string) {
        if (!value) {
            console.log("Bandeira do cartão inválida.");
        } else {
            this._bandeira = value;
        }
    }

    validarCartao(): boolean {
        const dataAtual = new Date();
        if (this._dataDeVencimento <= dataAtual) {
            console.log("Cartão vencido.");
            return false;
        }
        return true;
    }

    processarPagamento() {
        if (this.validarCartao()) {
        } else {
            console.log("Falha ao processar o pagamento.");
        }
    }
}

const cartao = new CartaoDeCredito(200, "pendente", new Date("2025-13-02"), 1234567812345678, 123, new Date("2025-12-01"), "Visa");
cartao.processarPagamento();
