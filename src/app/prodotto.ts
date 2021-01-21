export class Prodotto{
    private _id:number;
    private _nome:string;
    private _descrizione:string;
    private _prezzo:number;
    private _serialCode:number;
    private _numero:number;
    constructor(){}
    
    public get id() : number {
        return this._id;
    }
    
    public set id(v : number) {
        this._id = v;
    }
    
    public get prezzo() : number {
        return this._prezzo;
    }
    
    public set prezzo(v : number) {
        this._prezzo = v;
    }
    
    public get nome() : string {
        return this._nome;
    }
    
    public set nome(v : string) {
        this._nome = v;
    }
    
    public set descrizione(v : string) {
        this._descrizione = v;
    }
    
    public set serialCode(v : number) {
        this._serialCode = v;
    }
    
    public set numero(v : number) {
        this._numero = v;
    }
    
    
    public get descrizione() : string {
        return this._descrizione;
    }
    
    public get serialCode() : number {
        return this._serialCode;
    }
    
    public get numero() : number {
        return this._numero;
    }
    
}