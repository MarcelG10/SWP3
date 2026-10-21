export class Rad {
    private _marke: string;
    private _groesse: number;

    constructor(marke: string = "Michelin", groesse: number = 15) {
        this._marke = marke;
        this._groesse = groesse;
    }

    get marke(): string {
        return this._marke;
    }

    set marke(value: string) {
        this._marke = value;
    }

    get groesse(): number {
        return this._groesse;
    }

    set groesse(value: number) {
        this._groesse = value;
    }
}