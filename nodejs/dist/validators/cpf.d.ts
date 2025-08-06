export declare class CPFValidator {
    /**
     * Validate CPF format and check digits
     */
    isValid(cpf: string): boolean;
    /**
     * Generate a valid CPF
     */
    generate(): string;
    /**
     * Apply CPF mask (000.000.000-00)
     */
    applyMask(cpf: string): string;
    /**
     * Remove CPF mask
     */
    removeMask(cpf: string): string;
    /**
     * Get state from CPF first two digits
     */
    getState(cpf: string): string | null;
}
//# sourceMappingURL=cpf.d.ts.map