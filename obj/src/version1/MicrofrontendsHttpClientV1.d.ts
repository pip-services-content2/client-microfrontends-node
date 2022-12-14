import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';
import { MicrofrontendV1 } from './MicrofrontendV1';
import { IMicrofrontendsClientV1 } from './IMicrofrontendsClientV1';
export declare class MicrofrontendsHttpClientV1 extends CommandableHttpClient implements IMicrofrontendsClientV1 {
    constructor(config?: any);
    getMicrofrontends(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MicrofrontendV1>>;
    getMicrofrontendById(correlationId: string, microfrontendId: string): Promise<MicrofrontendV1>;
    createMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1): Promise<MicrofrontendV1>;
    updateMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1): Promise<MicrofrontendV1>;
    deleteMicrofrontendById(correlationId: string, microfrontendId: string): Promise<MicrofrontendV1>;
}
