export class FormaDePagamento {
    private _valor: number;
    private _status: string;
    private _dataDePagamento: Date;

    constructor(valor: number, status: string, dataDePagamento: Date) {
        this._valor = valor;
        this._status = status;
        this._dataDePagamento = dataDePagamento;
    }


    get valor() {
        return this._valor;
    }

    set valor(value: number) {
        if (value <= 0) {
            console.log("O valor do pagamento deve ser positivo.");
        } else {
            this._valor = value;
        }
    }

    get status() {
        return this._status;
    }

    set status(value: string) {
        const statusValido = ["pendente", "pago", "cancelado"];
        if (!statusValido.includes(value.toLowerCase())) {
            console.log("Status inválido. Use: pendente, pago ou cancelado.");
        } else {
            this._status = value;
        }
    }

    get dataDePagamento() {
        return this._dataDePagamento;
    }

    set dataDePagamento(value: Date) {
        const dataAtual = new Date();
        if (value > dataAtual) {
            console.log("A data de pagamento não pode ser futura.");
        } else {
            this._dataDePagamento = value;
        }
    }

    realizarPagamento() {
        this.status = "pago"; 
        console.log("Pagamento efetuado!");
    }
}


const pagamento1 = new FormaDePagamento(150, "pendente", new Date("2024-09-30"));
console.log(pagamento1);
pagamento1.realizarPagamento();
