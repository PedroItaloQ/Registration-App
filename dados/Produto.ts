export class Produto{
    codigo: number;
    nome: string;
    quantidade: number;
    constructor(codigo: number, nome: string, quantidade: number){
        this.codigo = codigo;
        this.nome = nome;
        this.quantidade = quantidade;
    }
}