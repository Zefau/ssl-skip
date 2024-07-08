var capacitorCertificatesPlugin = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
