"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_yoga_1 = require("graphql-yoga");
var prisma_client_1 = require("./generated/prisma-client");
var Query = require("./resolvers/Query");
var Mutation = require("./resolvers/Mutation");
var Subscription = require("./resolvers/Subscription");
var User = require("./resolvers/User");
var Link = require("./resolvers/Link");
var Vote = require("./resolvers/Vote");
var resolvers = {
    Query: Query,
    Mutation: Mutation,
    Subscription: Subscription,
    User: User,
    Link: Link,
    Vote: Vote,
};
var undefToNull = function (value) {
    return value === undefined ? null : value;
};
/* const findLink = (id: string): Link | null =>
    undefToNull(links.find(link => link.id === id))
 */
var server = new graphql_yoga_1.GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: resolvers,
    context: function (request) { return (__assign({}, request, { prisma: prisma_client_1.prisma })); },
});
server.start(function () { return console.log("Server is running on http://localhost:4000"); });
