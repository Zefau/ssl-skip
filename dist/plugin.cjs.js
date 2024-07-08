'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const CertificatesPlugin = core.registerPlugin('CertificatesPlugin', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CertificatesPluginWeb()),
});

class CertificatesPluginWeb extends core.WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CertificatesPluginWeb: CertificatesPluginWeb
});

exports.CertificatesPlugin = CertificatesPlugin;
//# sourceMappingURL=plugin.cjs.js.map
