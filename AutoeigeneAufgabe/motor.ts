export class Motor {
    private _ps: number;
    private _kraftstoff: string;

    constructor(ps: number, kraftstoff: string = "Benzin") {
        this._ps = ps;
        this._kraftstoff = kraftstoff;
    }

    get ps(): number {
        return this._ps;
    }

    set ps(value: number) {
        this._ps = value;
    }

    get kraftstoff(): string {
        return this._kraftstoff;
    }

    set kraftstoff(value: string) {
        this._kraftstoff = value;
    }
}