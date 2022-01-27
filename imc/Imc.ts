class Imc {
  private _peso: number;
      public get peso(): number {
            return this._peso;
      }
      public set peso(value: number) {
            this._peso = value;
      }
  private _altura: number;
      public get altura(): number {
            return this._altura;
      }
      public set altura(value: number) {
            this._altura = value;
      }
      
  constructor (peso:number,altura:number){
        this._peso=peso;
        this._altura=altura;
  }
  calculaImc() : number{
        return this.peso/(this.altura ** 2);
  }
}
class ImcGrafico {
   
}