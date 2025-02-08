const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} = require("graphql");
const axios = require("axios");

const CharacterType = new GraphQLObjectType({
  name: "Character",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    status: { type: GraphQLString },
    species: { type: GraphQLString },
    gender: { type: GraphQLString },
    origin: { type: GraphQLString },
    image: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    characters: {
      type: new GraphQLList(CharacterType),
      args: {
        status: { type: GraphQLString },
        species: { type: GraphQLString },
        gender: { type: GraphQLString },
        name: { type: GraphQLString },
        origin: { type: GraphQLString },
        image: { type: GraphQLString },
      },
      resolve(parent, args) {
        const apiUrl = "https://rickandmortyapi.com/api/character";
        return axios
          .get(apiUrl, { params: args })
          .then((response) => {
            return response.data.results.map((character) => ({
              id: character.id.toString(),
              name: character.name,
              status: character.status,
              species: character.species,
              gender: character.gender,
              origin: character.origin.name,
              image: character.image,
            }));
          })
          .catch((error) => {
            console.error("Error fetching characters:", error);
            return [];
          });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});


