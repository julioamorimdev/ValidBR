export declare class CNPJValidator {
    /**
     * Validate CNPJ format and check digits
     */
    isValid(cnpj: string): boolean;
    /**
     * Generate a valid CNPJ
     */
    generate(): string;
    /**
     * Apply CNPJ mask (00.000.000/0000-00)
     */
    applyMask(cnpj: string): string;
    /**
     * Remove CNPJ mask
     */
    removeMask(cnpj: string): string;
    /**
     * Get state from CNPJ first two digits
     */
    getState(cnpj: string): string | null;
}
//# sourceMappingURL=cnpj.d.ts.map