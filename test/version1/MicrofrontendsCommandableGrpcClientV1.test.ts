import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { MicrofrontendsMemoryPersistence } from 'service-microfrontends-node';
import { MicrofrontendsController } from 'service-microfrontends-node';
import { MicrofrontendsCommandableGrpcServiceV1 } from 'service-microfrontends-node';
import { MicrofrontendsCommandableGrpcClientV1 } from '../../src/version1/MicrofrontendsCommandableGrpcClientV1';
import { MicrofrontendsClientFixtureV1 } from './MicrofrontendsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('MicrofrontendsCommandableGrpcClientV1', ()=> {
    let service: MicrofrontendsCommandableGrpcServiceV1;
    let client: MicrofrontendsCommandableGrpcClientV1;
    let fixture: MicrofrontendsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new MicrofrontendsMemoryPersistence();
        let controller = new MicrofrontendsController();

        service = new MicrofrontendsCommandableGrpcServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-microfrontends', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-microfrontends', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-microfrontends', 'service', 'commandable-grpc', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new MicrofrontendsCommandableGrpcClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new MicrofrontendsClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
