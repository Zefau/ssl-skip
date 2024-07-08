export interface SslSkipPlugin {
    /**
     * Get whether untrusted certificates are allowed.
     *
     * @since 1.0.0
     */
    isAllowUntrusted(): Promise<boolean>;
    /**
     * Set to allow untrusted certificates.
     *
     * @since 1.0.0
     */
    setAllowUntrusted(allowUntrusted: boolean): void;
}
