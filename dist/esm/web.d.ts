import { WebPlugin } from '@capacitor/core';
import type { CertificatesPluginPlugin } from './definitions';
export declare class CertificatesPluginWeb extends WebPlugin implements CertificatesPluginPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
