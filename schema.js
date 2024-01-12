export const typeDefs = `#graphql
# ! for required
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
  }
#   Query gives graphql the entry points for data
  type Query {
    games: [Game]
    reviews: [Review]
    authors: [Author]
  }
`;
