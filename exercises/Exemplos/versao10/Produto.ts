export default class Produto {
    private descricao: string;
    private valor: number;

    public constructor(descricao: string, valor: number) {
        this.descricao = descricao;
        this.valor = valor;
    }

    public getDescricao(): string {
        return this.descricao;
    }
    
    public getValor(): number {
        return this.valor;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }
    
    public setValor(valor: number): void {
        this.valor = Math.abs(valor);
    }
    
    public calculaDesconto(): number {
        return this.valor * 0.95;
    }

    public calculaParcela(parcela: number): number {
        if (parcela < 1) return 0;

        return this.valor / parcela;
    }
}