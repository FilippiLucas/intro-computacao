export default class Produto {
    private descricao: string;
    private valor: number;

    public constructor() {
        this.descricao = "Descricao de exemplo";
        this.valor = 0;
    }

    public getDescricao(): string {
        return this.descricao;
    }
    
    public getValor(): number {
        return this.valor;
    }
}