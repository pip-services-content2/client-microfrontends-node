import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { MicrofrontendsNullClientV1 } from '../version1/MicrofrontendsNullClientV1';
import { MicrofrontendsDirectClientV1 } from '../version1/MicrofrontendsDirectClientV1';
import { MicrofrontendsCommandableHttpClientV1 } from '../version1/MicrofrontendsCommandableHttpClientV1';
import { MicrofrontendsCommandableLambdaClientV1 } from '../version1/MicrofrontendsCommandableLambdaClientV1';

export class MicrofrontendsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-microfrontends', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('service-microfrontends', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-microfrontends', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('service-microfrontends', 'client', 'commandable-http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('service-microfrontends', 'client', 'commandable-lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(MicrofrontendsClientFactory.NullClientV1Descriptor, MicrofrontendsNullClientV1);
		this.registerAsType(MicrofrontendsClientFactory.DirectClientV1Descriptor, MicrofrontendsDirectClientV1);
		this.registerAsType(MicrofrontendsClientFactory.HttpClientV1Descriptor, MicrofrontendsCommandableHttpClientV1);
		this.registerAsType(MicrofrontendsClientFactory.LambdaClientV1Descriptor, MicrofrontendsCommandableLambdaClientV1);
	}
	
}
