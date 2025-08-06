export declare class EmailValidator {
    /**
     * Validate email format
     */
    isValid(email: string): boolean;
    /**
     * Sanitize email by removing extra spaces
     */
    sanitize(email: string): string;
    /**
     * Extract domain from email
     */
    getDomain(email: string): string | null;
    /**
     * Extract username from email
     */
    getUsername(email: string): string | null;
    /**
     * Check if email is from a common Brazilian provider
     */
    isBrazilianProvider(email: string): boolean;
}
//# sourceMappingURL=email.d.ts.map