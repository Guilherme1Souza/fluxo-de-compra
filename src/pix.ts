class Pix {
    nome: string;
    chave: string;
    dataDeAgendamento: Date;
    nomeDoBanco: string;
    status: string;

    constructor(nome: string, chave: string, dataDeAgendamento: Date, nomeDoBanco: string, status: string) {
        this.nome = nome;
        this.chave = chave;
        this.dataDeAgendamento = dataDeAgendamento;
        this.nomeDoBanco = nomeDoBanco;
        this.status = status;
    }

    ValidarPix() {
        if (!this.nome || !this.chave || !this.dataDeAgendamento || !this.nomeDoBanco || !this.status) {
            console.log("Dados incompletos.");
            return false;
        }

        console.log("Pix válido com sucesso.");
        return true;
    }

    processarPagamento() {
        if (this.ValidarPix()) {
            console.log("Pagamento processado com sucesso.");
        } else {
            console.log("Falha ao processar o pagamento.");
        }
    }
}

const formasdepagamento = new Pix("Guilherme", "(15) 1515-5188", new Date("2024-10-05"), "Nunk", "Processando");
console.log(formasdepagamento);
formasdepagamento.processarPagamento();
