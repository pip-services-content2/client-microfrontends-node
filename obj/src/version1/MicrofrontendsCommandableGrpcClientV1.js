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
exports.MicrofrontendsCommandableGrpcClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_grpc_nodex_1 = require("pip-services3-grpc-nodex");
class MicrofrontendsCommandableGrpcClientV1 extends pip_services3_grpc_nodex_1.CommandableGrpcClient {
    constructor(config) {
        super('v1/microfrontends');
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getMicrofrontends(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('get_microfrontends', correlationId, {
                filter: filter,
                paging: paging
            });
        });
    }
    getMicrofrontendById(correlationId, microfrontendId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('get_microfrontend_by_id', correlationId, {
                microfrontend_id: microfrontendId
            });
        });
    }
    createMicrofrontend(correlationId, microfrontend) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('create_microfrontend', correlationId, {
                microfrontend: microfrontend
            });
        });
    }
    updateMicrofrontend(correlationId, microfrontend) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('update_microfrontend', correlationId, {
                microfrontend: microfrontend
            });
        });
    }
    deleteMicrofrontendById(correlationId, microfrontendId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('delete_microfrontend_by_id', correlationId, {
                microfrontend_id: microfrontendId
            });
        });
    }
}
exports.MicrofrontendsCommandableGrpcClientV1 = MicrofrontendsCommandableGrpcClientV1;
//# sourceMappingURL=MicrofrontendsCommandableGrpcClientV1.js.map