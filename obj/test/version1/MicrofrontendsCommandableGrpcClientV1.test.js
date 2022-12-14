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
const pip_services3_commons_nodex_3 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const service_microfrontends_node_1 = require("service-microfrontends-node");
const service_microfrontends_node_2 = require("service-microfrontends-node");
const service_microfrontends_node_3 = require("service-microfrontends-node");
const MicrofrontendsCommandableGrpcClientV1_1 = require("../../src/version1/MicrofrontendsCommandableGrpcClientV1");
const MicrofrontendsClientFixtureV1_1 = require("./MicrofrontendsClientFixtureV1");
var httpConfig = pip_services3_commons_nodex_2.ConfigParams.fromTuples("connection.protocol", "http", "connection.host", "localhost", "connection.port", 3000);
suite('MicrofrontendsCommandableGrpcClientV1', () => {
    let service;
    let client;
    let fixture;
    suiteSetup(() => __awaiter(void 0, void 0, void 0, function* () {
        let logger = new pip_services3_components_nodex_1.ConsoleLogger();
        let persistence = new service_microfrontends_node_1.MicrofrontendsMemoryPersistence();
        let controller = new service_microfrontends_node_2.MicrofrontendsController();
        service = new service_microfrontends_node_3.MicrofrontendsCommandableGrpcServiceV1();
        service.configure(httpConfig);
        let references = pip_services3_commons_nodex_3.References.fromTuples(new pip_services3_commons_nodex_1.Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger, new pip_services3_commons_nodex_1.Descriptor('service-microfrontends', 'persistence', 'memory', 'default', '1.0'), persistence, new pip_services3_commons_nodex_1.Descriptor('service-microfrontends', 'controller', 'default', 'default', '1.0'), controller, new pip_services3_commons_nodex_1.Descriptor('service-microfrontends', 'service', 'commandable-grpc', 'default', '1.0'), service);
        controller.setReferences(references);
        service.setReferences(references);
        client = new MicrofrontendsCommandableGrpcClientV1_1.MicrofrontendsCommandableGrpcClientV1();
        client.setReferences(references);
        client.configure(httpConfig);
        fixture = new MicrofrontendsClientFixtureV1_1.MicrofrontendsClientFixtureV1(client);
        yield service.open(null);
        yield client.open(null);
    }));
    suiteTeardown(() => __awaiter(void 0, void 0, void 0, function* () {
        yield client.close(null);
        yield service.close(null);
    }));
    test('CRUD Operations', () => __awaiter(void 0, void 0, void 0, function* () {
        yield fixture.testCrudOperations();
    }));
});
//# sourceMappingURL=MicrofrontendsCommandableGrpcClientV1.test.js.map