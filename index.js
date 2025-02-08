
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors'); // Importa el middleware CORS
const schema = require('./schema/schema');

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log('Servidor corriendo en http://localhost:4000/graphql');
});
