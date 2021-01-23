import { Ordine } from './ordine';
import { Prodotto } from "./prodotto";

export class Negozio{
    private _id:number;
    private _nome:string;
    private _descrizione:string;
    private _indirizzo:string;
    private _orario:string;
    private _prodotti:Array<Prodotto>;
    private _ordini:Array<Ordine>;
    
    constructor(){
    }
    

    public provaStampa(){
        let stringa= "";
        this.prodotti.forEach(function(item){  
            stringa.concat(item.toString());
          });
        return stringa;
    }

    
    public get ordini() : Array<Ordine> {
        return this._ordini;
    }
    
    public set ordini(v : Array<Ordine>) {
        this._ordini = v;
    }
    
    public get prodotti() : Array<Prodotto> {
        return this._prodotti;
    }
    
    public set prodotti(v : Array<Prodotto>) {
        this._prodotti = v;
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
    
    public get descrizione() : string {
        return this._descrizione;
    }
    
    public set descrizione(v : string) {
        this._descrizione = v;
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
    
    public toString(){
        return this.nome;
    }
    

}