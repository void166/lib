import express, { Application } from "express";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServer } from "@apollo/server";
import cors from "cors";
import { json } from "body-parser";
import { resolvers } from "./src/graphql/resolvers";
import { typeDefs } from "./src/graphql/schema";
import { config } from "./src/config/config";


import { auth, JWT_COMMON_PAYLOAD } from "./src/middleware/auth";


import "./src/models/Book";
import "./src/models/Student";
import "./src/models/Transaction";
import "./src/models/review";
import "./src/models/Order";
import "./src/models/orderItems"
import './src/models/publisher'
import "./src/models/assocations";

const { PORT } = config;

interface Context {
  stud?: JWT_COMMON_PAYLOAD;
  pub?: JWT_COMMON_PAYLOAD

}

interface ExpressContext {
  req: express.Request;
  res: express.Response;
}

async function startServer() {
  const app: Application = express();

  app.use(cors());
  app.use(express.json());


  const apolloServer = new ApolloServer<Context>({
    typeDefs,
    resolvers,
    introspection: true,
  });

  await apolloServer.start();


  app.use(
    "/graphql",
    cors(),
    json(),
    expressMiddleware(apolloServer, {
      context: async ({ req }: ExpressContext): Promise<Context> => {
        const authHeader = req.headers.authorization;
      
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
          return {};
        }
      
        const token = authHeader.replace("Bearer ", ""); 
      
        const user = auth(token); 
        if (!user) throw new Error("Unauthorized");
      
        if (user.role === "publisher") return { pub: user };
        if (user.role === "student") return { stud: user };
      
        return {};
      },
      
      
    })
  );

  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}/graphql`);
  });
}


startServer().catch((err) => {
  console.error("❌ Server failed to start:", err);
});
