"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IEValidator = void 0;
class IEValidator {
    constructor() {
        this.stateWeights = {
            'AC': [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
            'AL': [9, 8, 7, 6, 5, 4, 3, 2],
            'AP': [9, 8, 7, 6, 5, 4, 3, 2],
            'AM': [9, 8, 7, 6, 5, 4, 3, 2],
            'BA': [9, 8, 7, 6, 5, 4, 3, 2],
            'CE': [9, 8, 7, 6, 5, 4, 3, 2],
            'DF': [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
            'ES': [9, 8, 7, 6, 5, 4, 3, 2],
            'GO': [9, 8, 7, 6, 5, 4, 3, 2],
            'MA': [9, 8, 7, 6, 5, 4, 3, 2],
            'MG': [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
            'MS': [9, 8, 7, 6, 5, 4, 3, 2],
            'MT': [3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
            'PA': [9, 8, 7, 6, 5, 4, 3, 2],
            'PB': [9, 8, 7, 6, 5, 4, 3, 2],
            'PE': [9, 8, 7, 6, 5, 4, 3, 2],
            'PI': [9, 8, 7, 6, 5, 4, 3, 2],
            'PR': [3, 2, 7, 6, 5, 4, 3, 2],
            'RJ': [2, 7, 6, 5, 4, 3, 2],
            'RN': [9, 8, 7, 6, 5, 4, 3, 2],
            'RO': [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
            'RR': [9, 8, 7, 6, 5, 4, 3, 2],
            'RS': [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
            'SC': [9, 8, 7, 6, 5, 4, 3, 2],
            'SE': [9, 8, 7, 6, 5, 4, 3, 2],
            'SP': [1, 3, 4, 5, 6, 7, 8, 10, 2, 3, 4, 5],
            'TO': [9, 8, 7, 6, 5, 4, 3, 2]
        };
    }
    /**
     * Validate IE format and check digit
     */
    isValid(ie, state) {
        if (!ie || typeof ie !== 'string' || !state)
            return false;
        const cleanIE = this.removeMask(ie);
        const upperState = state.toUpperCase();
        // Check if state is supported
        if (!this.stateWeights[upperState])
            return false;
        // Check if it has the correct length for the state
        const expectedLength = this.stateWeights[upperState].length;
        if (cleanIE.length !== expectedLength)
            return false;
        // Check if it's a valid IE pattern
        if (!/^\d+$/.test(cleanIE))
            return false;
        // Validate check digit
        return this.validateCheckDigit(cleanIE, upperState);
    }
    /**
     * Apply IE mask based on state
     */
    applyMask(ie, state) {
        if (!ie || typeof ie !== 'string' || !state)
            return '';
        const cleanIE = this.removeMask(ie);
        const upperState = state.toUpperCase();
        if (!this.stateWeights[upperState])
            return ie;
        const expectedLength = this.stateWeights[upperState].length;
        if (cleanIE.length !== expectedLength)
            return ie;
        // Apply state-specific masks
        switch (upperState) {
            case 'SP':
                return cleanIE.replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, '$1.$2.$3.$4');
            case 'RJ':
                return cleanIE.replace(/(\d{2})(\d{3})(\d{2})(\d{1})/, '$1.$2.$3-$4');
            case 'MG':
                return cleanIE.replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, '$1.$2.$3.$4');
            case 'PR':
                return cleanIE.replace(/(\d{3})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
            case 'RS':
                return cleanIE.replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, '$1.$2.$3.$4');
            case 'SC':
                return cleanIE.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3');
            case 'GO':
                return cleanIE.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
            case 'MT':
                return cleanIE.replace(/(\d{3})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
            case 'MS':
                return cleanIE.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3');
            case 'TO':
                return cleanIE.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
            case 'DF':
                return cleanIE.replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, '$1.$2.$3.$4');
            case 'AC':
                return cleanIE.replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, '$1.$2.$3.$4');
            case 'RO':
                return cleanIE.replace(/(\d{2})(\d{3})(\d{3})(\d{3})(\d{3})/, '$1.$2.$3.$4.$5');
            default:
                return cleanIE;
        }
    }
    /**
     * Remove IE mask
     */
    removeMask(ie) {
        if (!ie || typeof ie !== 'string')
            return '';
        return ie.replace(/\D/g, '');
    }
    /**
     * Generate a valid IE for a specific state
     */
    generate(state) {
        const upperState = state.toUpperCase();
        if (!this.stateWeights[upperState]) {
            throw new Error(`Invalid state: ${state}`);
        }
        const weights = this.stateWeights[upperState];
        const digits = Array.from({ length: weights.length - 1 }, () => Math.floor(Math.random() * 10));
        // Calculate check digit
        const checkDigit = this.calculateCheckDigit(digits.join(''), upperState);
        digits.push(checkDigit);
        return this.applyMask(digits.join(''), upperState);
    }
    /**
     * Validate check digit for specific state
     */
    validateCheckDigit(ie, state) {
        const weights = this.stateWeights[state];
        if (!weights)
            return false;
        let sum = 0;
        for (let i = 0; i < weights.length - 1; i++) {
            const digit = ie[i];
            const weight = weights[i];
            if (digit !== undefined && weight !== undefined) {
                sum += parseInt(digit) * weight;
            }
        }
        const remainder = sum % 11;
        let expectedCheckDigit;
        // State-specific validation rules
        switch (state) {
            case 'SP':
                expectedCheckDigit = remainder === 0 ? 0 : 11 - remainder;
                break;
            case 'MG':
                expectedCheckDigit = remainder === 0 ? 0 : 11 - remainder;
                break;
            case 'RJ':
                expectedCheckDigit = remainder === 0 ? 0 : 11 - remainder;
                break;
            default:
                expectedCheckDigit = remainder === 0 ? 0 : 11 - remainder;
        }
        const lastDigit = ie[weights.length - 1];
        return lastDigit !== undefined && parseInt(lastDigit) === expectedCheckDigit;
    }
    /**
     * Calculate check digit for IE
     */
    calculateCheckDigit(ie, state) {
        const weights = this.stateWeights[state];
        if (!weights)
            return 0;
        let sum = 0;
        for (let i = 0; i < weights.length - 1; i++) {
            const digit = ie[i];
            const weight = weights[i];
            if (digit !== undefined && weight !== undefined) {
                sum += parseInt(digit) * weight;
            }
        }
        const remainder = sum % 11;
        return remainder === 0 ? 0 : 11 - remainder;
    }
    /**
     * Get all valid states for IE validation
     */
    getValidStates() {
        return Object.keys(this.stateWeights);
    }
    /**
     * Check if state is supported for IE validation
     */
    isStateSupported(state) {
        return this.stateWeights[state.toUpperCase()] !== undefined;
    }
}
exports.IEValidator = IEValidator;
//# sourceMappingURL=ie.js.map