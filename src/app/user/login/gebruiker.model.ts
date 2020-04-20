interface GebruikerJSON
{
    token: string;
    voornaam: string;
    achternaam: string;
}


export class Login
{
    constructor(
        private Email: string,
        private Password: string
    ){}


    get email(): string
    {
        return this.Email;
    }

}

export class Gebruiker
{
    constructor(
        private _token: string,
        private _voornaam: string,
        private _achternaam: string
    )
    {

    }

    public static fromJSON(geb: GebruikerJSON): Gebruiker
    {
        const gebruiker = new Gebruiker(geb.token, geb.voornaam, geb.achternaam);
        return gebruiker;
    }

    get Token(): string
    {
        return this._token
    }

    get Voornaam(): string
    {
        return this._voornaam
    }

    get Achternaam(): string
    {
        return this._achternaam
    }
}