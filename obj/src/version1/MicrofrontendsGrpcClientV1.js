"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrofrontendsGrpcClientV1 = void 0;
let services = require('../../../src/protos/microfrontends_v1_grpc_pb');
let messages = require('../../../src/protos/microfrontends_v1_pb');
const pip_services3_grpc_nodex_1 = require("pip-services3-grpc-nodex");
const MicrofrontendsGrpcConverterV1_1 = require("./MicrofrontendsGrpcConverterV1");
class MicrofrontendsGrpcClientV1 extends pip_services3_grpc_nodex_1.GrpcClient {
    constructor() {
        super(services.MicrofrontendsClient);
    }
    getMicrofrontends(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.MicrofrontendPageRequest();
            MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.setMap(request.getFilterMap(), filter);
            request.setPaging(MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.fromPagingParams(paging));
            let timing = this.instrument(correlationId, 'microfrontends.get_microfrontends');
            try {
                let response = yield this.call('get_microfrontends', correlationId, request);
                if (response.error != null)
                    throw MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.toError(response.error);
                timing.endTiming();
                return response ? MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.toMicrofrontendPage(response.getPage()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    getMicrofrontendById(correlationId, microfrontendId) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.MicrofrontendIdRequest();
            request.setMicrofrontendId(microfrontendId);
            let timing = this.instrument(correlationId, 'microfrontends.get_microfrontend_by_id');
            try {
                let response = yield this.call('get_microfrontend_by_id', correlationId, request);
                timing.endTiming();
                if (response.error != null)
                    throw MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.toError(response.error);
                return response ? MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.toMicrofrontend(response.getMicrofrontend()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    createMicrofrontend(correlationId, microfrontend) {
        return __awaiter(this, void 0, void 0, function* () {
            let microfrontendObj = MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.fromMicrofrontend(microfrontend);
            let request = new messages.MicrofrontendObjectRequest();
            request.setMicrofrontend(microfrontendObj);
            let timing = this.instrument(correlationId, 'microfrontends.create_microfrontend');
            try {
                let response = yield this.call('create_microfrontend', correlationId, request);
                timing.endTiming();
                if (response.error != null)
                    throw MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.toError(response.error);
                return response ? MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.toMicrofrontend(response.getMicrofrontend()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    updateMicrofrontend(correlationId, microfrontend) {
        return __awaiter(this, void 0, void 0, function* () {
            let microfrontendObj = MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.fromMicrofrontend(microfrontend);
            let request = new messages.MicrofrontendObjectRequest();
            request.setMicrofrontend(microfrontendObj);
            let timing = this.instrument(correlationId, 'microfrontends.update_microfrontend');
            try {
                let response = yield this.call('update_microfrontend', correlationId, request);
                timing.endTiming();
                if (response.error != null)
                    throw MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.toError(response.error);
                return response ? MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.toMicrofrontend(response.getMicrofrontend()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    deleteMicrofrontendById(correlationId, microfrontendId) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.MicrofrontendIdRequest();
            request.setMicrofrontendId(microfrontendId);
            let timing = this.instrument(correlationId, 'microfrontends.delete_microfrontend_by_id');
            try {
                let response = yield this.call('delete_microfrontend_by_id', correlationId, request);
                timing.endTiming();
                if (response.error != null)
                    throw MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.toError(response.error);
                return response ? MicrofrontendsGrpcConverterV1_1.MicrofrontendsGrpcConverterV1.toMicrofrontend(response.getMicrofrontend()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
}
exports.MicrofrontendsGrpcClientV1 = MicrofrontendsGrpcClientV1;
//# sourceMappingURL=MicrofrontendsGrpcClientV1.js.map