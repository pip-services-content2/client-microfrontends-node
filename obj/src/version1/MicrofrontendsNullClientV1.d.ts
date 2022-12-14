import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { IMicrofrontendsClientV1 } from './IMicrofrontendsClientV1';
import { MicrofrontendV1 } from './MicrofrontendV1';
export declare class MicrofrontendsNullClientV1 implements IMicrofrontendsClientV1 {
    getMicrofrontends(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MicrofrontendV1>>;
    getMicrofrontendById(correlationId: string, microfrontendId: string): Promise<MicrofrontendV1>;
    createMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1): Promise<MicrofrontendV1>;
    updateMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1): Promise<MicrofrontendV1>;
    deleteMicrofrontendById(correlationId: string, microfrontendId: string): Promise<MicrofrontendV1>;
}
