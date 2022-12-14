"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrofrontendsClientFixtureV1 = void 0;
let assert = require('chai').assert;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
let MICROFRONTEND1 = {
    id: "1",
    name: "Microfrontend 1",
    description: "Main module",
    path_prefix: "md1",
    icon: "icon1",
    type: "vue",
    remote_entry: "/remote",
    exposed_module: "module1",
    element_name: "main_module",
    params: {}
};
let MICROFRONTEND2 = {
    id: '2',
    name: "Microfrontend 2",
    description: "Second module",
    path_prefix: "md2",
    icon: "icon2",
    type: "vue",
    remote_entry: "/remote",
    exposed_module: "module2",
    element_name: "second_module",
    params: {}
};
class MicrofrontendsClientFixtureV1 {
    constructor(client) {
        this._client = client;
    }
    testCrudOperations() {
        return __awaiter(this, void 0, void 0, function* () {
            let microfrontend1;
            // Create one microfrontend
            let microfrontend = yield this._client.createMicrofrontend(null, MICROFRONTEND1);
            assert.isObject(microfrontend);
            assert.equal(microfrontend.name, MICROFRONTEND1.name);
            assert.equal(microfrontend.description, MICROFRONTEND1.description);
            assert.equal(microfrontend.path_prefix, MICROFRONTEND1.path_prefix);
            assert.equal(microfrontend.icon, MICROFRONTEND1.icon);
            assert.equal(microfrontend.type, MICROFRONTEND1.type);
            assert.equal(microfrontend.remote_entry, MICROFRONTEND1.remote_entry);
            assert.equal(microfrontend.exposed_module, MICROFRONTEND1.exposed_module);
            assert.equal(microfrontend.element_name, MICROFRONTEND1.element_name);
            microfrontend1 = microfrontend;
            // Create another microfrontend
            microfrontend = yield this._client.createMicrofrontend(null, MICROFRONTEND2);
            assert.isObject(microfrontend);
            assert.equal(microfrontend.name, MICROFRONTEND2.name);
            assert.equal(microfrontend.description, MICROFRONTEND2.description);
            assert.equal(microfrontend.path_prefix, MICROFRONTEND2.path_prefix);
            assert.equal(microfrontend.icon, MICROFRONTEND2.icon);
            assert.equal(microfrontend.type, MICROFRONTEND2.type);
            assert.equal(microfrontend.remote_entry, MICROFRONTEND2.remote_entry);
            assert.equal(microfrontend.exposed_module, MICROFRONTEND2.exposed_module);
            assert.equal(microfrontend.element_name, MICROFRONTEND2.element_name);
            // Get all microfrontends
            let microfrontends = yield this._client.getMicrofrontends(null, null, new pip_services3_commons_nodex_1.PagingParams(0, 5, false));
            assert.isObject(microfrontends);
            assert.isTrue(microfrontends.data.length >= 2);
            // Update the microfrontend
            microfrontend1.name = 'Updated Name 1';
            microfrontend = yield this._client.updateMicrofrontend(null, microfrontend1);
            assert.isObject(microfrontend);
            assert.equal(microfrontend.name, 'Updated Name 1');
            assert.equal(microfrontend.id, MICROFRONTEND1.id);
            microfrontend1 = microfrontend;
            // Delete microfrontend
            yield this._client.deleteMicrofrontendById(null, microfrontend1.id);
            // Try to get delete microfrontend
            microfrontend = yield this._client.getMicrofrontendById(null, microfrontend1.id);
            assert.isNull(microfrontend || null);
        });
    }
}
exports.MicrofrontendsClientFixtureV1 = MicrofrontendsClientFixtureV1;
//# sourceMappingURL=MicrofrontendsClientFixtureV1.js.map