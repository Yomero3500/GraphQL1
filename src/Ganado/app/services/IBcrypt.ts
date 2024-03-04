export interface IBryptServices{
    encodePass(pass : string): Promise<string> 
    comparePass(password: string, passEncoded: string):Promise<boolean|null>;
}