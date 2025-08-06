export declare class NameValidator {
    /**
     * Validate full name (no numbers or invalid characters)
     */
    isValid(name: string): boolean;
    /**
     * Sanitize name by removing extra spaces and normalizing
     */
    sanitize(name: string): string;
    /**
     * Get first name
     */
    getFirstName(name: string): string | null;
    /**
     * Get last name
     */
    getLastName(name: string): string | null;
    /**
     * Get middle names (names between first and last)
     */
    getMiddleNames(name: string): string[];
    /**
     * Get initials (first letter of each name part)
     */
    getInitials(name: string): string | null;
    /**
     * Check if name contains common Brazilian names
     */
    hasCommonBrazilianName(name: string): boolean;
}
//# sourceMappingURL=name.d.ts.map