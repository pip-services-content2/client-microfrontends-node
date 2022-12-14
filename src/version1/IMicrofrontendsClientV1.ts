import { DataPage } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';

import { MicrofrontendV1 } from './MicrofrontendV1';

export interface IMicrofrontendsClientV1 {
    getMicrofrontends(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MicrofrontendV1>>;

    getMicrofrontendById(correlationId: string, microfrontend_id: string): Promise<MicrofrontendV1>;

    createMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1): Promise<MicrofrontendV1>;

    updateMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1): Promise<MicrofrontendV1>;

    deleteMicrofrontendById(correlationId: string, microfrontend_id: string): Promise<MicrofrontendV1>;
}
