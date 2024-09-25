import { FormaDePagamento } from "./forma";

export class Pix extends FormaDePagamento {
    private _chavePix: string;
    private _nomeBanco: string;

    constructor(valor: number, status: string, dataDePagamento: Date, chavePix: string, nomeBanco: string) {
        super(valor, status, dataDePagamento);
        this._chavePix = chavePix;
        this._nomeBanco = nomeBanco;
    }

    get chavePix(): string {
        return this._chavePix;
    }

    set chavePix(value: string) {
        if (!value) {
            console.log("Chave Pix inválida.");
        } else {
            this._chavePix = value;
        }
    }

    get nomeBanco(): string {
        return this._nomeBanco;
    }

    set nomeBanco(value: string) {
        if (!value) {
            console.log("Nome do banco inválido.");
        } else {
            this._nomeBanco = value;
        }
    }

    validarPix(): boolean {
        if (!this._chavePix) {
            console.log("Chave Pix inválida.");
            return false;
        }
        return true;
    }

    processarPagamento() {
        if (this.validarPix()){
        } else {
            console.log("Falha ao processar o pagamento.");
        }
    }
}

const pix = new Pix(100, "pendente", new Date("24-05-2024"), "gs25@gmail.com", "Banco Nu");
pix.processarPagamento();