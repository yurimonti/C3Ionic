import { Ordine } from './ordine';
export class Locker{
    private _id:number;
    private _nome:string;
    private _indirizzo:string;
    private _orario:string;
    private _ordini:Array<Ordine>;

    constructor(){}

    public get ordini() : Array<Ordine> {
        return this._ordini;
    }
    
    public set ordini(v : Array<Ordine>) {
        this._ordini = v;
    }

    public get id() : number {
        return this._id;
    }
    
    public get nome() : string {
        return this._nome;
    }
    
    public set nome(v : string) {
        this._nome = v;
    }
    
    public get indirizzo() : string {
        return this._indirizzo;
    }
    
    public set indirizzo(v : string) {
        this._indirizzo = v;
    }
    
    public get orario() : string {
        return this._orario;
    }
    
    public set orario(v : string) {
        this._orario = v;
    }
}