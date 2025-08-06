export declare class RGValidator {
    private readonly stateWeights;
    /**
     * Validate RG format and check digit
     */
    isValid(rg: string, state?: string): boolean;
    /**
     * Apply RG mask (00.000.000-0)
     */
    applyMask(rg: string): string;
    /**
     * Remove RG mask
     */
    removeMask(rg: string): string;
    /**
     * Generate a valid RG for a specific state
     */
    generate(state: string): string;
    /**
     * Validate check digit for specific state
     */
    private validateCheckDigit;
    /**
     * Calculate check digit for RG
     */
    private calculateCheckDigit;
    /**
     * Get state from RG (if possible)
     */
    getState(rg: string): string | null;
    /**
     * Check if RG is from São Paulo
     */
    isFromSaoPaulo(_rg: string): boolean;
    /**
     * Get all valid states for RG validation
     */
    getValidStates(): string[];
}
//# sourceMappingURL=rg.d.ts.map