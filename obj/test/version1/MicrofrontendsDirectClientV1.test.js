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
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const service_microfrontends_node_1 = require("service-microfrontends-node");
const service_microfrontends_node_2 = require("service-microfrontends-node");
const MicrofrontendsDirectClientV1_1 = require("../../src/version1/MicrofrontendsDirectClientV1");
const MicrofrontendsClientFixtureV1_1 = require("./MicrofrontendsClientFixtureV1");
suite('MicrofrontendsDirectClientV1', () => {
    let client;
    let fixture;
    suiteSetup(() => __awaiter(void 0, void 0, void 0, function* () {
        let logger = new pip_services3_components_nodex_1.ConsoleLogger();
        let persistence = new service_microfrontends_node_1.MicrofrontendsMemoryPersistence();
        let controller = new service_microfrontends_node_2.MicrofrontendsController();
        let references = pip_services3_commons_nodex_2.References.fromTuples(new pip_services3_commons_nodex_1.Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger, new pip_services3_commons_nodex_1.Descriptor('service-microfrontends', 'persistence', 'memory', 'default', '1.0'), persistence, new pip_services3_commons_nodex_1.Descriptor('service-microfrontends', 'controller', 'default', 'default', '1.0'), controller);
        controller.setReferences(references);
        client = new MicrofrontendsDirectClientV1_1.MicrofrontendsDirectClientV1();
        client.setReferences(references);
        fixture = new MicrofrontendsClientFixtureV1_1.MicrofrontendsClientFixtureV1(client);
        yield client.open(null);
    }));
    suiteTeardown(() => __awaiter(void 0, void 0, void 0, function* () {
        yield client.close(null);
    }));
    test('CRUD Operations', () => __awaiter(void 0, void 0, void 0, function* () {
        yield fixture.testCrudOperations();
    }));
});
//# sourceMappingURL=MicrofrontendsDirectClientV1.test.js.map