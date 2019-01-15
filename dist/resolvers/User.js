"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.links = function (parent, args, context) {
    return context.prisma.user({ id: parent.id }).links();
};
