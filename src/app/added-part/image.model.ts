interface ImageJSON
{
    imageData: string;
    partId: number;
}

export class Image
{
    constructor(
        private _imageData: string,
        private _partId: number
    ){}

    


    static fromJSON(imageJSON: ImageJSON): Image
    {
        let image = new Image(imageJSON.imageData, imageJSON.partId);
        return image
    }

    public get ImageData(): string{
        return this._imageData;
    }
}