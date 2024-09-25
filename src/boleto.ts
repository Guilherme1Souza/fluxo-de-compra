import { FormaDePagamento } from "./forma";

export class Boleto extends FormaDePagamento {
    private _razaoSocial: string;
    private _codigoDeBarras: number;
    private _dataDeVencimento: Date;

    constructor(valor: number, status: string, dataDePagamento: Date, razaoSocial: string, codigoDeBarras: number, dataDeVencimento: Date) {
        super(valor, status, dataDePagamento);
        this._razaoSocial = razaoSocial;
        this._codigoDeBarras = codigoDeBarras;
        this._dataDeVencimento = dataDeVencimento;
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

    validarBoleto(): boolean {
        const dataAtual = new Date();
        if (this._dataDeVencimento <= dataAtual) {
            console.log("Boleto vencido.");
            return false;
        }
        return true;
    }

    processarPagamento() {
        if (this.validarBoleto()) {
        } else {
            console.log("Falha ao processar o pagamento.");
        }
    }
}

const boleto = new Boleto(150, "pendente", new Date("24-05-2001"), "ADA TECH", 123456789012345678, new Date("2025-09-01"));
boleto.processarPagamento();
