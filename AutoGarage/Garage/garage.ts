import {Auto} from "./Auto/auto.ts";

export class Garage {
    private _name: string;
    private _anzahlPlaetze: BigInt;
    private _autos: Auto[];
    constructor(name: string, anzahlPlaetze: BigInt) {
        this._name = name;
        this._anzahlPlaetze = anzahlPlaetze;
        this._autos = [];
    }
}