import { Negozio } from './negozio';
export class Commerciante{
    private _nome:string;
    private _cognome:string;
    private _email: string;
    private _password: string;
    private _negozio: Negozio;
    
    
    constructor(){
        this.nome="";
        this.cognome="";
        this.email="";
        this.password="";
        this.negozio=null;
    }
    ngOnInit() {}

    public get nome() : string {
        return this._nome;
    }
    public set nome(v : string) {
        this._nome = v;
    }
    public get cognome() : string {
        return this._cognome;
    }
    
    public set cognome(v : string) {
        this._cognome = v;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
    public get negozio(): Negozio {
        return this._negozio;
    }
    public set negozio(value: Negozio) {
        this._negozio = value;
    }

}