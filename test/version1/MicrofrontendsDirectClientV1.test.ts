
import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { MicrofrontendsMemoryPersistence } from 'service-microfrontends-node';
import { MicrofrontendsController } from 'service-microfrontends-node';
import { MicrofrontendsDirectClientV1 } from '../../src/version1/MicrofrontendsDirectClientV1';
import { MicrofrontendsClientFixtureV1 } from './MicrofrontendsClientFixtureV1';

suite('MicrofrontendsDirectClientV1', () => {
    let client: MicrofrontendsDirectClientV1;
    let fixture: MicrofrontendsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new MicrofrontendsMemoryPersistence();
        let controller = new MicrofrontendsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-microfrontends', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-microfrontends', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new MicrofrontendsDirectClientV1();
        client.setReferences(references);

        fixture = new MicrofrontendsClientFixtureV1(client);

        await client.open(null);
    });

    suiteTeardown(async () => {
        await client.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
