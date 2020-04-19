import { Part } from "../part/part.model";

interface AddedPartJson
{
    name: string;
    brand: string;
    price: number;
    partId: number;
    email: string;
    link: string;
}

export class AddedPart
{
    constructor(
        private name: string,
        private brand: string,
        private price: number,
        private partId: number,
        private email: string,
        private link: string
    ){}
   

    static fromJson(json: AddedPartJson): AddedPart
    {
        let part = new AddedPart(json.name, json.brand, json.price, json.partId, json.email, json.link);
        return part;
    }

   

    get getPartId(): number
    {
        return this.partId;
    }

    get getName(): string
    {
        return this.name;
    }

    get getBrand(): string
    {
        return this.brand;
    }

    get getPrice(): Number
    {
        return this.price;
    
    }
    get getLink(): string
    {
        return this.link;
    }

    get getEmail(): string
    {
        return this.email;
    }
}