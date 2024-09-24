export class Pix {
    private _nome: string;
    private _chave: string;
    private _dataDeAgendamento: Date;
    private _nomeDoBanco: string;
    private _status: string;

    constructor(nome: string, chave: string, dataDeAgendamento: Date, nomeDoBanco: string, status: string) {
        this._nome = nome;
        this._chave = chave;
        this._dataDeAgendamento = dataDeAgendamento;
        this._nomeDoBanco = nomeDoBanco;
        this._status = status;
    }

    // Getters e Setters
    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        if (!value) {
            console.log("Nome inválido.");
        } else {
            this._nome = value;
        }
    }

    get chave(): string {
        return this._chave;
    }

    set chave(value: string) {
        if (!value) {
            console.log("Chave inválida.");
        } else {
            this._chave = value;
        }
    }

    get dataDeAgendamento(): Date {
        return this._dataDeAgendamento;
    }

    set dataDeAgendamento(value: Date) {
        const dataAtual = new Date();
        if (value < dataAtual) {
            console.log("Data de agendamento inválida.");
        } else {
            this._dataDeAgendamento = value;
        }
    }

    get nomeDoBanco(): string {
        return this._nomeDoBanco;
    }

    set nomeDoBanco(value: string) {
        if (!value) {
            console.log("Nome do banco inválido.");
        } else {
            this._nomeDoBanco = value;
        }
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        if (!value) {
            console.log("Status inválido.");
        } else {
            this._status = value;
        }
    }

    // Método de validação
    ValidarPix(): boolean {
        if (!this._nome || !this._chave || !this._dataDeAgendamento || !this._nomeDoBanco || !this._status) {
            console.log("Dados incompletos.");
            return false;
        }

        console.log("Pix válido com sucesso.");
        return true;
    }

    // Método para processar o pagamento
   public processarPagamento() {
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
