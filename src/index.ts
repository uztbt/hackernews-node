import { GraphQLServer } from 'graphql-yoga';
import { prisma } from './generated/prisma-client';
import Query = require('./resolvers/Query');
import Mutation = require('./resolvers/Mutation');
import Subscription = require('./resolvers/Subscription');
import User = require('./resolvers/User');
import Link = require('./resolvers/Link');
import Vote = require('./resolvers/Vote');

const resolvers = {
    Query,
    Mutation,
    Subscription,
    User,
    Link,
    Vote,
};

interface Link {
    id: string,
    url: string,
    description: string,
}

const undefToNull = <T>(value: T | undefined): T | null =>
    value === undefined ? null : value;

/* const findLink = (id: string): Link | null =>
    undefToNull(links.find(link => link.id === id))
 */
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: (request) => ({ ...request, prisma }),
})

server.start(() => console.log(`Server is running on http://localhost:4000`));
