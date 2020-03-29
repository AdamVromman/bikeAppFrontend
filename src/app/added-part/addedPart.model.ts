import { Part } from "../part/part.model";

interface AddedPartJson
{
    name: string;
    brand: string;
    price: Number;
    part: Part;
}

export class AddedPart
{
    constructor(
        private _name: string,
        private _brand: string,
        private _price: Number,
        private _part: Part
    ){}

    static fromJson(json: AddedPartJson): AddedPart
    {
        let part = new AddedPart(json.name, json.brand, json.price, json.part);
        return part;
    }

    get part(): Part
    {
        return this._part;
    }

    get name(): string
    {
        return this._name;
    }

    get brand(): string
    {
        return this._brand;
    }

    get price(): Number
    {
        return this._price;
    }
}