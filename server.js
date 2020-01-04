import express from 'express';
import { config } from 'dotenv';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import schema from './schema';
import Debug from 'debug';

const PORT = process.env.PORT || 9000;
config();

const app = express();
const debug = Debug('dev');

app.use(cors());

app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
    }),
  );

app.use('*', (request, response) => {
  response.status(404).send('Not Found');
});

app.listen(PORT, () => debug(`Server started on port ${PORT}`));

export default app;