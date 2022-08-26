class SituacaoFinanceira{
    
    valorCreditos: number = 0 
    valorDebitos: number = 0 


    saldo(): number{
        return this.valorCreditos- this.valorDebitos
    }

}

let situacafinanceira : SituacaoFinanceira;
situacafinanceira = new SituacaoFinanceira();

situacafinanceira.valorCreditos = 100;
situacafinanceira.valorDebitos = 90;

console.log(situacafinanceira.saldo());