import  express  from "express";
import helmet from "helmet";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Signale } from "signale";
import { ApolloServer } from "@apollo/server";

const app = express();
app.use(helmet.hidePoweredBy());
app.use(express.json());

const options = {
    secrets: ["([0-9]{4}-?)+"]
}

const signale = new Signale(options);
const server = new ApolloServer({});

(async () => {
    const {url} = await startStandaloneServer(server, {
        listen: { port: 4000}
    })
    console.log(`Servidor corriendo en ${url}`); 
})();