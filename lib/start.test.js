"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const start_1 = require("./start");
describe(__filename, () => {
    it('starts and stops', async () => {
        const server = start_1.start();
        await new Promise((resolve, reject) => {
            server.on('listening', resolve);
            server.on('error', reject);
        });
        server.close();
    });
});
//# sourceMappingURL=start.test.js.map