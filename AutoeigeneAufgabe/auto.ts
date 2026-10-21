import { Motor } from "./motor.ts";  // ➕ .ts
import { Rad } from "./rad.ts";       // ➕ .ts

export class Auto {
    private _marke: string = "";
    private _ps: number = 0;
    private _farbe: string = "";
    private _motor: Motor;
    private _raeder: Rad[];

    constructor(make: string = "", ps: number, farbe: string = "") {
        this._marke = make;
        this._ps = ps;
        this._farbe = farbe;
        this._motor = new Motor(ps);
        this._raeder = [
            new Rad(),
            new Rad(),
            new Rad(),
            new Rad()
        ];
    }

    get farbe(): string { return this._farbe; }
    set farbe(value: string) { this._farbe = value; }

    get marke(): string { return this._marke; }
    set marke(value: string) { this._marke = value; }

    get ps(): number { return this._ps; }
    set ps(value: number) { this._ps = value; }

    fahren() {
        console.log("Auto data Marke: " + this._marke + ", Ps: " + this._ps + ", Farbe: " + this._farbe + " fährt.");
    }

    tanken() {
        console.log("Auto data Marke: " + this._marke + ", Ps: " + this._ps + ", Farbe: " + this._farbe + " wird getankt.");
    }

    printdata() {
        console.log("Auto data Marke: " + this._marke + ", Ps: " + this._ps + ", Farbe: " + this._farbe);
    }
}