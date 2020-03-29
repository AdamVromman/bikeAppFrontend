interface PartJson
{

    id: number;
    name: string;
    description: string;
    functionality: string;
    isOptional: boolean;
    dependantParts: string[];
    dominantParts: string[];
    

}

export class Part
{
    constructor(
        private _id: number,
        private _name:string,
        private _description:string,
        private _isOptional: boolean,
        private _functionality: string,
        private _dependantParts: string[],
        private _dominantParts: string[])
    {

    }

    static fromJSON(json: PartJson): Part
    {
        const part = new Part(json.id, json.name, json.description, json.isOptional, json.functionality, json.dependantParts, json.dominantParts)
        return part;
    }

    get id(): number
    {
        return this._id;
    }

    get name(): string
    {
        return this._name
    }

    get description(): string
    {
        return this._description;
    }
    
    get isOptional(): boolean
    {
        return this._isOptional;
    }

    get functionality(): string
    {
        return this._functionality;
    }

    get dependantParts(): string[]
    {
        return this._dependantParts;
    }

    get dominantParts(): string[]
    {
        return this._dominantParts;
    }
}

