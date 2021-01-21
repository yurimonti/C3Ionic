import { Negozio } from './negozio';
export class Commerciante{
    private _nome:string;
    private _cognome:string;
    private _email: string;
    private _password: string;
    private _negozio: Negozio;
    
    constructor(
        /* id:number, */
        nome:string,
        cognome:string,
        email:string,
        password:string/* ,
        negozio:Negozio */
        ){
            this._nome = nome;
            this._cognome=cognome;
            this._email = email;
            this._password = password;
/*             this._negozio = negozio; */
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