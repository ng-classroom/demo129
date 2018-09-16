export class Person {
    protected _name: string;
    protected _lastName: string;
    protected _id: number;

    constructor(data: any) {
        if (data.hasOwnProperty('name')) {
            this._name = data.name;
        }
        if (data.hasOwnProperty('lastName')) {
            this._lastName = data.lastName;
        }
        if (data.hasOwnProperty('id')) {
            this._id = data.id;
        }
    }

    get name(): string {
        return this._name;
    }

    get lastName(): string {
        return this._lastName;
    }

    get id(): number {
        return this._id;
    }
}
