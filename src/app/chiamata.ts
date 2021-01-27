import { Ordine } from './ordine';
import { Negozio } from './negozio';
export class Chiamata{
    private _id:number;
    private _negozio:Negozio;
    private _ordine:Ordine;
    constructor(){}

    public get id() : number {
        return this._id;
    }
    
    public get negozio() : Negozio {
        return this._negozio;
    }

    public get ordine() : Ordine {
        return this._ordine;
    }
    
}