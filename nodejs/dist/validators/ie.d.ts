export declare class IEValidator {
    private readonly stateWeights;
    /**
     * Validate IE format and check digit
     */
    isValid(ie: string, state: string): boolean;
    /**
     * Apply IE mask based on state
     */
    applyMask(ie: string, state: string): string;
    /**
     * Remove IE mask
     */
    removeMask(ie: string): string;
    /**
     * Generate a valid IE for a specific state
     */
    generate(state: string): string;
    /**
     * Validate check digit for specific state
     */
    private validateCheckDigit;
    /**
     * Calculate check digit for IE
     */
    private calculateCheckDigit;
    /**
     * Get all valid states for IE validation
     */
    getValidStates(): string[];
    /**
     * Check if state is supported for IE validation
     */
    isStateSupported(state: string): boolean;
}
//# sourceMappingURL=ie.d.ts.map