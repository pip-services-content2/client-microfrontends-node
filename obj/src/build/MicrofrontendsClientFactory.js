"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrofrontendsClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const MicrofrontendsNullClientV1_1 = require("../version1/MicrofrontendsNullClientV1");
const MicrofrontendsDirectClientV1_1 = require("../version1/MicrofrontendsDirectClientV1");
const MicrofrontendsCommandableHttpClientV1_1 = require("../version1/MicrofrontendsCommandableHttpClientV1");
const MicrofrontendsCommandableLambdaClientV1_1 = require("../version1/MicrofrontendsCommandableLambdaClientV1");
class MicrofrontendsClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(MicrofrontendsClientFactory.NullClientV1Descriptor, MicrofrontendsNullClientV1_1.MicrofrontendsNullClientV1);
        this.registerAsType(MicrofrontendsClientFactory.DirectClientV1Descriptor, MicrofrontendsDirectClientV1_1.MicrofrontendsDirectClientV1);
        this.registerAsType(MicrofrontendsClientFactory.HttpClientV1Descriptor, MicrofrontendsCommandableHttpClientV1_1.MicrofrontendsCommandableHttpClientV1);
        this.registerAsType(MicrofrontendsClientFactory.LambdaClientV1Descriptor, MicrofrontendsCommandableLambdaClientV1_1.MicrofrontendsCommandableLambdaClientV1);
    }
}
exports.MicrofrontendsClientFactory = MicrofrontendsClientFactory;
MicrofrontendsClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-microfrontends', 'factory', 'default', 'default', '1.0');
MicrofrontendsClientFactory.NullClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-microfrontends', 'client', 'null', 'default', '1.0');
MicrofrontendsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-microfrontends', 'client', 'direct', 'default', '1.0');
MicrofrontendsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-microfrontends', 'client', 'commandable-http', 'default', '1.0');
MicrofrontendsClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-microfrontends', 'client', 'commandable-lambda', 'default', '1.0');
//# sourceMappingURL=MicrofrontendsClientFactory.js.map