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
exports.MicrofrontendsDirectClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class MicrofrontendsDirectClientV1 extends pip_services3_rpc_nodex_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_1.Descriptor("service-microfrontends", "controller", "*", "*", "*"));
    }
    getMicrofrontends(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'microfrontends.get_microfrontends');
            try {
                let page = yield this._controller.getMicrofrontends(correlationId, filter, paging);
                timing.endTiming();
                return page;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    getMicrofrontendById(correlationId, microfrontendId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'microfrontends.get_microfrontend_by_id');
            try {
                let microfrontend = yield this._controller.getMicrofrontendById(correlationId, microfrontendId);
                timing.endTiming();
                return microfrontend;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    createMicrofrontend(correlationId, microfrontend) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'microfrontends.create_microfrontend');
            try {
                let result = yield this._controller.createMicrofrontend(correlationId, microfrontend);
                timing.endTiming();
                return result;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    updateMicrofrontend(correlationId, microfrontend) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'microfrontends.update_microfrontend');
            try {
                let result = yield this._controller.updateMicrofrontend(correlationId, microfrontend);
                timing.endTiming();
                return result;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    deleteMicrofrontendById(correlationId, microfrontendId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'microfrontends.delete_microfrontend_by_id');
            try {
                let result = yield this._controller.deleteMicrofrontendById(correlationId, microfrontendId);
                timing.endTiming();
                return result;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
}
exports.MicrofrontendsDirectClientV1 = MicrofrontendsDirectClientV1;
//# sourceMappingURL=MicrofrontendsDirectClientV1.js.map