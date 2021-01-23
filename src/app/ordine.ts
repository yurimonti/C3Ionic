import { Prodotto } from './prodotto';
import { Locker } from './locker';
import { Negozio } from './negozio';
export class Ordine{
    private _id: number;
    private _numeroOrdine: number;
    private _emittente: Negozio;
    private _destinazione: Locker;
    private _prodotti: Array<Prodotto>;
    private _soldi: number;
    private _statoOrdine: any;
    private _destinazioneStringa: string;
    constructor(){}
    
    public getProdottiStringa():string{
        let fun = function prod(product:Prodotto) {
            return "codice : "+product.serialCode+"; nome: "+product.nome+"; prezzo al singolo: "+product.prezzo+
            "quantità: "+product.numero+";";
        }
        let s = "";
        this.prodotti.forEach(function(p){
            s = s +fun(p)+"\n";
        })
        return s;
    }

    public get statoOrdine(): any {
        return this._statoOrdine;
    }
    public set statoOrdine(value: any) {
        this._statoOrdine = value;
    }
    public get destinazioneStringa(): string {
        return this._destinazioneStringa;
    }
    public set destinazioneStringa(value: string) {
        this._destinazioneStringa = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get numeroOrdine(): number {
        return this._numeroOrdine;
    }
    public set numeroOrdine(value: number) {
        this._numeroOrdine = value;
    }
    public get emittente(): Negozio {
        return this._emittente;
    }
    public set emittente(value: Negozio) {
        this._emittente = value;
    }
    public get destinazione(): Locker {
        return this._destinazione;
    }
    public set destinazione(value: Locker) {
        this._destinazione = value;
    }
    public get prodotti(): Array<Prodotto> {
        return this._prodotti;
    }
    public set prodotti(value: Array<Prodotto>) {
        this._prodotti = value;
    }
    public get soldi(): number {
        return this._soldi;
    }
    public set soldi(value: number) {
        this._soldi = value;
    }
}