"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
exports.APP_SECRET = 'GraphQL_is_aw3some';
exports.getUserId = function (context) {
    var Authorization = context.request.get('Authorization');
    if (Authorization) {
        var token = Authorization.replace('Bearer ', '');
        var userId = jwt.verify(token, exports.APP_SECRET).userId;
        return userId;
    }
    throw new Error('Not authenticated');
};
