let services = require('../../../src/protos/microfrontends_v1_grpc_pb');
let messages = require('../../../src/protos/microfrontends_v1_pb');

import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { GrpcClient } from 'pip-services3-grpc-nodex';

import { IMicrofrontendsClientV1 } from './IMicrofrontendsClientV1';
import { MicrofrontendV1 } from './MicrofrontendV1';
import { MicrofrontendsGrpcConverterV1 } from './MicrofrontendsGrpcConverterV1';

export class MicrofrontendsGrpcClientV1 extends GrpcClient implements IMicrofrontendsClientV1 {
        
    public constructor() {
        super(services.MicrofrontendsClient);
    }

    public async getMicrofrontends(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MicrofrontendV1>> {

        let request = new messages.MicrofrontendPageRequest();

        MicrofrontendsGrpcConverterV1.setMap(request.getFilterMap(), filter);
        request.setPaging(MicrofrontendsGrpcConverterV1.fromPagingParams(paging));

        let timing = this.instrument(correlationId, 'microfrontends.get_microfrontends');

        try {
            let response: any = await this.call('get_microfrontends', correlationId, request);
            
            if (response.error != null)
                throw MicrofrontendsGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? MicrofrontendsGrpcConverterV1.toMicrofrontendPage(response.getPage()) : null
        } catch(err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async getMicrofrontendById(correlationId: string, microfrontendId: string): Promise<MicrofrontendV1> {

        let request = new messages.MicrofrontendIdRequest();
        request.setMicrofrontendId(microfrontendId);

        let timing = this.instrument(correlationId, 'microfrontends.get_microfrontend_by_id');

        try {
            let response: any = await this.call('get_microfrontend_by_id', correlationId, request);
            timing.endTiming();

            if (response.error != null)
                throw MicrofrontendsGrpcConverterV1.toError(response.error);

            return response ? MicrofrontendsGrpcConverterV1.toMicrofrontend(response.getMicrofrontend()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }     
    }

    public async createMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1): Promise<MicrofrontendV1> {

        let microfrontendObj = MicrofrontendsGrpcConverterV1.fromMicrofrontend(microfrontend);

        let request = new messages.MicrofrontendObjectRequest();
        request.setMicrofrontend(microfrontendObj);

        let timing = this.instrument(correlationId, 'microfrontends.create_microfrontend');

        try {
            let response: any = await this.call('create_microfrontend', correlationId, request);
            timing.endTiming();
            if (response.error != null)
                throw MicrofrontendsGrpcConverterV1.toError(response.error);
            return response ? MicrofrontendsGrpcConverterV1.toMicrofrontend(response.getMicrofrontend()) : null
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async updateMicrofrontend(correlationId: string, microfrontend: MicrofrontendV1): Promise<MicrofrontendV1> {

        let microfrontendObj = MicrofrontendsGrpcConverterV1.fromMicrofrontend(microfrontend);

        let request = new messages.MicrofrontendObjectRequest();
        request.setMicrofrontend(microfrontendObj);
    
        let timing = this.instrument(correlationId, 'microfrontends.update_microfrontend');

        try {
            let response: any = await this.call('update_microfrontend', correlationId, request);
            timing.endTiming();

            if (response.error != null)
                throw MicrofrontendsGrpcConverterV1.toError(response.error);
            
            return response ? MicrofrontendsGrpcConverterV1.toMicrofrontend(response.getMicrofrontend()) : null
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async deleteMicrofrontendById(correlationId: string, microfrontendId: string): Promise<MicrofrontendV1> {

        let request = new messages.MicrofrontendIdRequest();
        request.setMicrofrontendId(microfrontendId);

        let timing = this.instrument(correlationId, 'microfrontends.delete_microfrontend_by_id');

        try {
            let response: any = await this.call('delete_microfrontend_by_id', correlationId, request);
            timing.endTiming();

            if (response.error != null)
                throw MicrofrontendsGrpcConverterV1.toError(response.error);

            return response ? MicrofrontendsGrpcConverterV1.toMicrofrontend(response.getMicrofrontend()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }
  
}
