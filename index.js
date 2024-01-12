import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
// server setup
const server = new ApolloServer({
  typeDefs,
  // resolvers
});
// Schema describes the shape of graph and data available on it

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at: ${url}`);
