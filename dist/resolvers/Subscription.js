"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var newLinkSubscribe = function (parent, args, context, info) {
    return context.prisma.$subscribe.link({ mutation_in: ['CREATED'] }).node();
};
exports.newLink = {
    subscribe: newLinkSubscribe,
    resolve: function (payload) { return payload; },
};
var newVoteSubscribe = function (parent, args, context, info) {
    return context.prisma.$subscribe.vote({ mutation_in: ['CREATED'] }).node();
};
exports.newVote = {
    subscribe: newVoteSubscribe,
    resolve: function (payload) { return payload; },
};
