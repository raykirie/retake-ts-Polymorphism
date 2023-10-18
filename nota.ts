class Nota {
    private _id: number;
    private _name: string;
    private _duration: number;
    private _hasSharp: boolean;
    private _hasFlat: boolean;

    constructor(id: number, name: string, duration: number, hasSharp: boolean, hasFlat: boolean) {
        this._id = id;
        this._name = name;
        this._duration = duration;
        this._hasSharp = hasSharp;
        this._hasFlat = hasFlat;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get duration(): number {
        return this._duration;
    }

    get hasSharp(): boolean {
        return this._hasSharp;
    }

    get hasFlat(): boolean {
        return this._hasFlat;
    }

    set id(id: number) {
        this._id = id;
    }

    set name(name: string) {
        this._name = name;
    }

    set duration(duration: number) {
        this._duration = duration;
    }

    set hasSharp(hasSharp: boolean) {
        this._hasSharp = hasSharp;
    }

    set hasFlat(hasFlat: boolean) {
        this._hasFlat = hasFlat;
    }
}

class Do extends Nota {
    constructor(id: number, duration: number, hasSharp: boolean, hasFlat: boolean) {
        super(id, "Do", duration, hasSharp, hasFlat);
    }
}

class Re extends Nota {
    constructor(id: number, duration: number, hasSharp: boolean, hasFlat: boolean) {
        super(id, "Re", duration, hasSharp, hasFlat);
    }
}

class Mi extends Nota {
    constructor(id: number, duration: number, hasSharp: boolean, hasFlat: boolean) {
        super(id, "Mi", duration, hasSharp, hasFlat);
    }
}

class Fa extends Nota {
    constructor(id: number, duration: number, hasSharp: boolean, hasFlat: boolean) {
        super(id, "Fa", duration, hasSharp, hasFlat);
    }
}

class Sol extends Nota {
    constructor(id: number, duration: number, hasSharp: boolean, hasFlat: boolean) {
        super(id, "Sol", duration, hasSharp, hasFlat);
    }
}

class La extends Nota {
    constructor(id: number, duration: number, hasSharp: boolean, hasFlat: boolean) {
        super(id, "La", duration, hasSharp, hasFlat);
    }
}

class Si extends Nota {
    constructor(id: number, duration: number, hasSharp: boolean, hasFlat: boolean) {
        super(id, "Si", duration, hasSharp, hasFlat);
    }
}


const doNote = new Do(1, 0.5, false, false);
const reNote = new Re(2, 0.5, true, false);
const miNote = new Mi(3, 0.5, false, true);

console.log("Do Note:", doNote);
console.log("Re Note:", reNote);
console.log("Mi Note:", miNote);
