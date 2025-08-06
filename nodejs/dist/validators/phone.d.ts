export declare class PhoneValidator {
    private readonly dddMap;
    /**
     * Validate phone number format
     */
    isValid(phone: string): boolean;
    /**
     * Get DDD from phone number
     */
    getDDD(phone: string): string | null;
    /**
     * Get state from DDD
     */
    getState(ddd: string): string | null;
    /**
     * Apply phone mask ((00) 00000-0000 or (00) 0000-0000)
     */
    applyMask(phone: string): string;
    /**
     * Remove phone mask
     */
    removeMask(phone: string): string;
    /**
     * Get all valid DDDs
     */
    getValidDDDs(): string[];
    /**
     * Check if DDD is valid
     */
    isDDDValid(ddd: string): boolean;
}
//# sourceMappingURL=phone.d.ts.map