interface PartJson
{

    name: string;
    description: string;
    functionality: Number;
    isOptional: boolean;
    dependantParts: Part[];
    

}

export class Part
{
    constructor(
        private _name:string,
        private _description:string,
        private _isOptional: boolean,
        private _functionality: string,
        private _dependantParts : Part[])
    {

    }

    static fromJSON(json: PartJson): Part
    {
        const part = new Part(json.name, json.description, json.isOptional, Part.setFunc(json.functionality), json.dependantParts)
        return part;
    }

    static setFunc(n: Number): string
    {
        switch(n)
        {
            case 0: return "Aandrijving"; 
            case 1: return "Remmen"; 
            case 2: return "Sturen"; 
            default: return "Varia"; 
        }
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

    get dependantParts(): Part[]
    {
        return this._dependantParts;
    }
}

