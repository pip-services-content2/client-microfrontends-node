let assert = require('chai').assert;

import { PagingParams, MultiString } from 'pip-services3-commons-nodex';

import { MicrofrontendV1 } from '../../src/version1/MicrofrontendV1';
import { IMicrofrontendsClientV1 } from '../../src/version1/IMicrofrontendsClientV1';

let MICROFRONTEND1: MicrofrontendV1 = {
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
let MICROFRONTEND2: MicrofrontendV1 = {
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

export class MicrofrontendsClientFixtureV1 {
    private _client: IMicrofrontendsClientV1;
    
    constructor(client: IMicrofrontendsClientV1) {
        this._client = client;
    }
        
    public async testCrudOperations() {
        let microfrontend1: MicrofrontendV1;

        // Create one microfrontend
        let microfrontend = await this._client.createMicrofrontend(null, MICROFRONTEND1);

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
        microfrontend = await this._client.createMicrofrontend(null, MICROFRONTEND2);

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
        let microfrontends = await this._client.getMicrofrontends(null, null, new PagingParams(0, 5, false));

        assert.isObject(microfrontends);
        assert.isTrue(microfrontends.data.length >= 2);

        // Update the microfrontend
        microfrontend1.name = 'Updated Name 1';

        microfrontend = await this._client.updateMicrofrontend(null, microfrontend1);

        assert.isObject(microfrontend);
        assert.equal(microfrontend.name, 'Updated Name 1');
        assert.equal(microfrontend.id, MICROFRONTEND1.id);

        microfrontend1 = microfrontend;

        // Delete microfrontend
        await this._client.deleteMicrofrontendById(null, microfrontend1.id);

        // Try to get delete microfrontend
        microfrontend = await this._client.getMicrofrontendById(null, microfrontend1.id);

        assert.isNull(microfrontend || null);
    }
}
