import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams} from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';

import { IMicrofrontendsClientV1 } from './IMicrofrontendsClientV1';
import { MicrofrontendV1 } from './MicrofrontendV1';

export class MicrofrontendsNullClientV1 implements IMicrofrontendsClientV1 {
            
    public async getMicrofrontends(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MicrofrontendV1>> {
        return new DataPage<MicrofrontendV1>([], 0);
    }

    public getMicrofrontendById(correlationId: string, microfrontendId: string): Promise<MicrofrontendV1> {
        return null;
    }

    public async createMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1): Promise<MicrofrontendV1> {
        return microfrontend;
    }

    public async updateMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1): Promise<MicrofrontendV1> {
        return microfrontend;
    }

    public async deleteMicrofrontendById(correlationId: string, microfrontendId: string): Promise<MicrofrontendV1> {
        return null
    }
}