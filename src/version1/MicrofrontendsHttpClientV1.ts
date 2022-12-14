import { ConfigParams } from 'pip-services3-commons-nodex';
import { IReferences } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';

import { MicrofrontendV1 } from './MicrofrontendV1';
import { IMicrofrontendsClientV1 } from './IMicrofrontendsClientV1';

export class MicrofrontendsHttpClientV1 extends CommandableHttpClient implements IMicrofrontendsClientV1 {       
    
    constructor(config?: any) {
        super('v1/microfrontends');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public async getMicrofrontends(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MicrofrontendV1>> {
        return await this.callCommand( 
            'get_microfrontends', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }
        );
    }

    public async getMicrofrontendById(correlationId: string, microfrontendId: string): Promise<MicrofrontendV1> {
        return await this.callCommand( 
            'get_microfrontend_by_id',
            correlationId,
            {
                microfrontend_id: microfrontendId
            }
        );        
    }

    public async createMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1): Promise<MicrofrontendV1> {
        return await this.callCommand(
            'create_microfrontend',
            correlationId,
            {
                microfrontend: microfrontend
            }
        );
    }

    public async updateMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1): Promise<MicrofrontendV1> {
        return await this.callCommand(
            'update_microfrontend', 
            correlationId,
            {
                microfrontend: microfrontend
            }
        );
    }

    public async deleteMicrofrontendById(correlationId: string, microfrontendId: string): Promise<MicrofrontendV1> {
        return await this.callCommand(
            'delete_microfrontend_by_id', 
            correlationId,
            {
                microfrontend_id: microfrontendId
            }
        );
    }
    
}
