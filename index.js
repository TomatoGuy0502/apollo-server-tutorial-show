import { ApolloServer } from "apollo-server";
import { schema } from './schema.js'
import { resolvers } from "./resolvers.js";

const db = null

const server = new ApolloServer({
  typeDefs: schema, 
  resolvers,
  context: {
    dbConnection: db
  }
});

server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});