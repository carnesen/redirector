"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
const app_1 = require("./app");
const util_1 = require("./util");
const PORT = Number(process.env.PORT) || 8000;
function start() {
    util_1.echo(`Starting server`);
    return app_1.app.listen(PORT, () => {
        util_1.echo(`Listening on port ${PORT}`);
    });
}
exports.start = start;
//# sourceMappingURL=start.js.map