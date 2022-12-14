import { Descriptor } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams} from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { IMicrofrontendsClientV1 } from './IMicrofrontendsClientV1';
import { MicrofrontendV1 } from './MicrofrontendV1';

export class MicrofrontendsDirectClientV1 extends DirectClient<any> implements IMicrofrontendsClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("service-microfrontends", "controller", "*", "*", "*"))
    }

    public async getMicrofrontends(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MicrofrontendV1>> {
        let timing = this.instrument(correlationId, 'microfrontends.get_microfrontends');
        
        try {
            let page = await this._controller.getMicrofrontends(correlationId, filter, paging);
            timing.endTiming();
            return page;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async getMicrofrontendById(correlationId: string, microfrontendId: string): Promise<MicrofrontendV1> {
        let timing = this.instrument(correlationId, 'microfrontends.get_microfrontend_by_id');
        
        try {
            let microfrontend = await this._controller.getMicrofrontendById(correlationId, microfrontendId);
            timing.endTiming();
            return microfrontend;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async createMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1): Promise<MicrofrontendV1> {
        let timing = this.instrument(correlationId, 'microfrontends.create_microfrontend');

        try {
            let result = await this._controller.createMicrofrontend(correlationId, microfrontend);
            timing.endTiming();
            return result;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async updateMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1): Promise<MicrofrontendV1> {
        let timing = this.instrument(correlationId, 'microfrontends.update_microfrontend');

        try {
            let result = await this._controller.updateMicrofrontend(correlationId, microfrontend);
            timing.endTiming();
            return result;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async deleteMicrofrontendById(correlationId: string, microfrontendId: string): Promise<MicrofrontendV1> {
        let timing = this.instrument(correlationId, 'microfrontends.delete_microfrontend_by_id');
        
        try {
            let result = await this._controller.deleteMicrofrontendById(correlationId, microfrontendId);
            timing.endTiming();
            return result;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }
}