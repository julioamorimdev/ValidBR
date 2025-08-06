"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CNPJValidator = void 0;
class CNPJValidator {
    /**
     * Validate CNPJ format and check digits
     */
    isValid(cnpj) {
        if (!cnpj || typeof cnpj !== 'string')
            return false;
        const cleanCNPJ = this.removeMask(cnpj);
        // Check if it has 14 digits
        if (cleanCNPJ.length !== 14)
            return false;
        // Check if all digits are the same
        if (/^(\d)\1{13}$/.test(cleanCNPJ))
            return false;
        // Validate first check digit
        const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        let sum = 0;
        for (let i = 0; i < 12; i++) {
            const digit = cleanCNPJ[i];
            const weight = weights1[i];
            if (digit !== undefined && weight !== undefined) {
                sum += parseInt(digit) * weight;
            }
        }
        let remainder = sum % 11;
        let firstDigit = remainder < 2 ? 0 : 11 - remainder;
        const twelfthDigit = cleanCNPJ[12];
        if (twelfthDigit === undefined || parseInt(twelfthDigit) !== firstDigit)
            return false;
        // Validate second check digit
        const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        sum = 0;
        for (let i = 0; i < 13; i++) {
            const digit = cleanCNPJ[i];
            const weight = weights2[i];
            if (digit !== undefined && weight !== undefined) {
                sum += parseInt(digit) * weight;
            }
        }
        remainder = sum % 11;
        let secondDigit = remainder < 2 ? 0 : 11 - remainder;
        const thirteenthDigit = cleanCNPJ[13];
        return thirteenthDigit !== undefined && parseInt(thirteenthDigit) === secondDigit;
    }
    /**
     * Generate a valid CNPJ
     */
    generate() {
        const digits = Array.from({ length: 12 }, () => Math.floor(Math.random() * 10));
        // Calculate first check digit
        const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        let sum = 0;
        for (let i = 0; i < 12; i++) {
            const digit = digits[i];
            const weight = weights1[i];
            if (digit !== undefined && weight !== undefined) {
                sum += digit * weight;
            }
        }
        let remainder = sum % 11;
        let firstDigit = remainder < 2 ? 0 : 11 - remainder;
        digits.push(firstDigit);
        // Calculate second check digit
        const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        sum = 0;
        for (let i = 0; i < 13; i++) {
            const digit = digits[i];
            const weight = weights2[i];
            if (digit !== undefined && weight !== undefined) {
                sum += digit * weight;
            }
        }
        remainder = sum % 11;
        let secondDigit = remainder < 2 ? 0 : 11 - remainder;
        digits.push(secondDigit);
        return this.applyMask(digits.join(''));
    }
    /**
     * Apply CNPJ mask (00.000.000/0000-00)
     */
    applyMask(cnpj) {
        if (!cnpj || typeof cnpj !== 'string')
            return '';
        const cleanCNPJ = this.removeMask(cnpj);
        if (cleanCNPJ.length !== 14)
            return cnpj;
        return cleanCNPJ.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
    /**
     * Remove CNPJ mask
     */
    removeMask(cnpj) {
        if (!cnpj || typeof cnpj !== 'string')
            return '';
        return cnpj.replace(/\D/g, '');
    }
    /**
     * Get state from CNPJ first two digits
     */
    getState(cnpj) {
        if (!this.isValid(cnpj))
            return null;
        const cleanCNPJ = this.removeMask(cnpj);
        const firstTwoDigits = parseInt(cleanCNPJ.substring(0, 2));
        const stateMap = {
            1: 'DF, GO, MS, MT, TO',
            2: 'AC, AP, AM, PA, RO, RR',
            3: 'CE, MA, PI',
            4: 'AL, PB, PE, RN',
            5: 'BA, SE',
            6: 'MG',
            7: 'ES, RJ',
            8: 'SP',
            9: 'PR, SC',
            0: 'RS'
        };
        for (const [range, states] of Object.entries(stateMap)) {
            if (firstTwoDigits >= parseInt(range) * 10 && firstTwoDigits <= parseInt(range) * 10 + 9) {
                return states;
            }
        }
        return null;
    }
}
exports.CNPJValidator = CNPJValidator;
//# sourceMappingURL=cnpj.js.map