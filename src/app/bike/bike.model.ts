import { Part } from '../part/part.model';


interface BikeJson
{
    id: number
    name: string
    type: string
    parts: Part[]
    
}

export class Bike
{
    constructor(
        private _id: number,
        private _name: string,
        private _type: string,
        private _parts: Part[]
        
    ) {}

    static fromJSON(json: BikeJson): Bike
    {
        const bike = new Bike(json.id, json.name, json.type, json.parts)
        return bike;
    }

    get id(): number
    {
        return this._id;
    }

    get name(): string
    {
        return this._name;
    } 

    get parts(): Part[]
    {
        return this._parts;
    }
    get type(): string
    {
        return this._type;
    }

}