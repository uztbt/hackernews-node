"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.link = function (parent, args, context) {
    return context.prisma.vote({ id: parent.id }).link();
};
exports.user = function (parent, args, context) {
    return context.prisma.vote({ id: parent.id }).user();
};
