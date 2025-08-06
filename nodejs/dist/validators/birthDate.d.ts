export declare class BirthDateValidator {
    /**
     * Validate birth date (no future dates or people over 130 years old)
     */
    isValid(birthDate: string): boolean;
    /**
     * Get age from birth date
     */
    getAge(birthDate: string): number | null;
    /**
     * Check if person is adult (18+ years old)
     */
    isAdult(birthDate: string): boolean;
    /**
     * Check if person is elderly (60+ years old)
     */
    isElderly(birthDate: string): boolean;
    /**
     * Check if person is minor (under 18 years old)
     */
    isMinor(birthDate: string): boolean;
    /**
     * Get birth date in different formats
     */
    format(birthDate: string, format?: 'YYYY-MM-DD' | 'DD/MM/YYYY' | 'MM/DD/YYYY'): string | null;
    /**
     * Parse date from various formats
     */
    private parseDate;
    /**
     * Get zodiac sign from birth date
     */
    getZodiacSign(birthDate: string): string | null;
}
//# sourceMappingURL=birthDate.d.ts.map