"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postedBy = function (parent, args, context) {
    return context.prisma.link({ id: parent.id }).postedBy();
};
exports.votes = function (parent, args, context) {
    return context.prisma.link({ id: parent.id }).votes();
};
