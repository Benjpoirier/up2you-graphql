import { GraphQLServer } from 'graphql-yoga';
import config from 'config';
import resolvers from './resolvers';
import logger from './lib/logger';
import models from './models';

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
        return {
            ...request,
            models,
        };
    },
});

server.start(
    {
        port: config.port,
        endpoint: '/graphql',
        subscriptions: '/subscriptions',
        playground: '/doc',
    },
    ({ port }) => logger.info(`server is running on localhost:${port}`),
);
