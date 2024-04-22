import { JwtPayload } from "jsonwebtoken";
import { ServicesTokens } from "../../infraestructure/servicesTokens/ServicesTokens";

export class ServicesAuth {
  constructor(readonly webToken: ServicesTokens) {}
  async run(usuario: string): Promise<string | JwtPayload | null>{
    try {
      console.log(usuario,2);
      const token = await this.webToken.verifyToken(usuario);
      console.log(token,3);
      return token;
    } catch (error) {
      return null;
    }
  }
}
