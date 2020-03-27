interface PartJson
{

    name: string;
    description: string;
    

}

export class Part
{
    constructor(
        private _name:string,
        private _description:string)
    {

    }

    static fromJSON(json: PartJson): Part
    {
        const part = new Part(json.name, json.description)
        return part;
    }
}

