export default class PainelContador {

    private limiteInferior:number;
    private limiteSuperior:number;
    private temp:number;

    public constructor(limiteInferior:number, limiteSuperior:number) {
        this.limiteInferior = limiteInferior;
        this.limiteSuperior = limiteSuperior;

        this.validarLimites(limiteInferior, limiteSuperior);
    }

    public setLimiteInferior(limiteInferior:number): void {
        this.validarLimites(limiteInferior, this.limiteSuperior);
    }

    public setLimiteSuperior(limiteSuperior:number): void {
        this.validarLimites(this.limiteInferior, limiteSuperior);
    }

    public getLimites(): string {
        return "Limite Inferior:" + this.limiteInferior + " Limite Superior: " + this.limiteSuperior;
    }

    public getLimiteInferior(): number {
        return this.limiteInferior;
    }
    public getLimiteSuperior(): number {
        return this.limiteSuperior;
    }

    private validarLimites(limiteInferior:number, limiteSuperior:number): void {
        if(limiteInferior > limiteSuperior) {
            this.temp = limiteSuperior;
            this.limiteSuperior = limiteInferior;
            this.limiteInferior = this.temp;
            return;
        }
    }

    public contagem(): void {

        let temp:number = this.limiteInferior;

        while(temp <= this.limiteSuperior) {
            console.log(temp);
            temp++;
        }

    }

    public contagemDecrescente(): void {

        let temp:number = this.limiteSuperior;

        while(this.limiteInferior <= temp) {
            console.log(temp);
            temp--;
        }

    }

    public contagemPares(): void {

        for(let i = this.limiteSuperior; i >= 0; i--) {
            if(i % 2 == 0) {
                console.log(i);
            }
        }

    }

    public contagemPasso(passo:number): void {

        let i :number = this.limiteInferior

        while(i < this.limiteSuperior) {
            console.log(i);
            i += passo;
        }
        
    }

    public contagemOmitindo(n:number) {

        let i:number = this.limiteInferior;

        while(i < this.limiteSuperior) {

            if(i % n == 0) {
                console.log("*");
                i++;
            }
            console.log(i);
            i++;

        }
    }

}
