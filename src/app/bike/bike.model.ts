import { Part } from '../part/part.model';


interface BikeJson
{
    name: string
    type: string
    parts: Part[]
    
}

export class Bike
{
    constructor(
        private _name: string,
        private _type: string,
        private _parts: Part[]
        
    ) {}

    static fromJSON(json: BikeJson): Bike
    {
        const bike = new Bike(json.name, json.type, json.parts)
        return bike;
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