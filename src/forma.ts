class FormaDePagamento {
    valor: number;
    status: string;
    dataDePagamento: Date;


    constructor(valor: number, status: string, dataDePagamento: Date) {
        this.valor = valor;
        this.status = status;
        this.dataDePagamento = dataDePagamento;
    }

    pagar(){
        console.log("Pagamento efetuado com sucesso");
    }
}

const pagamento = new FormaDePagamento(100, "Aprovado", new Date("2022-10-05"));
console.log(pagamento)
pagamento.pagar();


