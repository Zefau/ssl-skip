import { registerPlugin } from '@capacitor/core';
const CertificatesPlugin = registerPlugin('CertificatesPlugin', {
    web: () => import('./web').then(m => new m.CertificatesPluginWeb()),
});
export * from './definitions';
export { CertificatesPlugin };
//# sourceMappingURL=index.js.map