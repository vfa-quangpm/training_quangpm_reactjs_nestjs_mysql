"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConstants = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.jwtConstants = {
    secret: process.env.SECRET_KEY,
};
//# sourceMappingURL=constants.js.map