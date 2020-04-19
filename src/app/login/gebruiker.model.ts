
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