"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BirthDateValidator = void 0;
class BirthDateValidator {
    /**
     * Validate birth date (no future dates or people over 130 years old)
     */
    isValid(birthDate) {
        if (!birthDate || typeof birthDate !== 'string')
            return false;
        const date = this.parseDate(birthDate);
        if (!date)
            return false;
        const today = new Date();
        const minDate = new Date(today.getFullYear() - 130, today.getMonth(), today.getDate());
        // Ensure we're comparing dates at midnight for accurate comparison
        const normalizedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        const normalizedToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const normalizedMinDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
        return normalizedDate >= normalizedMinDate && normalizedDate <= normalizedToday;
    }
    /**
     * Get age from birth date
     */
    getAge(birthDate) {
        if (!this.isValid(birthDate))
            return null;
        const date = this.parseDate(birthDate);
        if (!date)
            return null;
        const today = new Date();
        let age = today.getFullYear() - date.getFullYear();
        const monthDiff = today.getMonth() - date.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < date.getDate())) {
            age--;
        }
        return age;
    }
    /**
     * Check if person is adult (18+ years old)
     */
    isAdult(birthDate) {
        const age = this.getAge(birthDate);
        return age !== null && age >= 18;
    }
    /**
     * Check if person is elderly (60+ years old)
     */
    isElderly(birthDate) {
        const age = this.getAge(birthDate);
        return age !== null && age >= 60;
    }
    /**
     * Check if person is minor (under 18 years old)
     */
    isMinor(birthDate) {
        const age = this.getAge(birthDate);
        return age !== null && age < 18;
    }
    /**
     * Get birth date in different formats
     */
    format(birthDate, format = 'YYYY-MM-DD') {
        if (!this.isValid(birthDate))
            return null;
        const date = this.parseDate(birthDate);
        if (!date)
            return null;
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        switch (format) {
            case 'YYYY-MM-DD':
                return `${year}-${month}-${day}`;
            case 'DD/MM/YYYY':
                return `${day}/${month}/${year}`;
            case 'MM/DD/YYYY':
                return `${month}/${day}/${year}`;
            default:
                return `${year}-${month}-${day}`;
        }
    }
    /**
     * Parse date from various formats
     */
    parseDate(dateString) {
        // Try different date formats
        const formats = [
            /^\d{4}-\d{2}-\d{2}$/, // YYYY-MM-DD
            /^\d{2}\/\d{2}\/\d{4}$/, // DD/MM/YYYY or MM/DD/YYYY
            /^\d{2}-\d{2}-\d{4}$/, // DD-MM-YYYY or MM-DD-YYYY
        ];
        let date = null;
        // Try ISO format first
        const format0 = formats[0];
        const format1 = formats[1];
        const format2 = formats[2];
        if (format0 && format0.test(dateString)) {
            date = new Date(dateString);
        }
        else if (format1 && format1.test(dateString)) {
            // Assume DD/MM/YYYY for Brazilian format
            const parts = dateString.split('/');
            const year = parts[2];
            const month = parts[1];
            const day = parts[0];
            if (year && month && day) {
                date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
            }
        }
        else if (format2 && format2.test(dateString)) {
            // Assume DD-MM-YYYY for Brazilian format
            const parts = dateString.split('-');
            const year = parts[2];
            const month = parts[1];
            const day = parts[0];
            if (year && month && day) {
                date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
            }
        }
        // Check if date is valid
        if (date && !isNaN(date.getTime())) {
            return date;
        }
        return null;
    }
    /**
     * Get zodiac sign from birth date
     */
    getZodiacSign(birthDate) {
        if (!this.isValid(birthDate))
            return null;
        const date = this.parseDate(birthDate);
        if (!date)
            return null;
        const month = date.getMonth() + 1;
        const day = date.getDate();
        if ((month === 3 && day >= 21) || (month === 4 && day <= 19))
            return 'Aries';
        if ((month === 4 && day >= 20) || (month === 5 && day <= 20))
            return 'Taurus';
        if ((month === 5 && day >= 21) || (month === 6 && day <= 20))
            return 'Gemini';
        if ((month === 6 && day >= 21) || (month === 7 && day <= 22))
            return 'Cancer';
        if ((month === 7 && day >= 23) || (month === 8 && day <= 22))
            return 'Leo';
        if ((month === 8 && day >= 23) || (month === 9 && day <= 22))
            return 'Virgo';
        if ((month === 9 && day >= 23) || (month === 10 && day <= 22))
            return 'Libra';
        if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
            return 'Scorpio';
        if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
            return 'Sagittarius';
        if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
            return 'Capricorn';
        if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
            return 'Aquarius';
        if ((month === 2 && day >= 19) || (month === 3 && day <= 20))
            return 'Pisces';
        return null;
    }
}
exports.BirthDateValidator = BirthDateValidator;
//# sourceMappingURL=birthDate.js.map