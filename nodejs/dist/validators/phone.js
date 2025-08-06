"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneValidator = void 0;
class PhoneValidator {
    constructor() {
        this.dddMap = {
            '11': 'São Paulo',
            '12': 'São Paulo',
            '13': 'São Paulo',
            '14': 'São Paulo',
            '15': 'São Paulo',
            '16': 'São Paulo',
            '17': 'São Paulo',
            '18': 'São Paulo',
            '19': 'São Paulo',
            '21': 'Rio de Janeiro',
            '22': 'Rio de Janeiro',
            '24': 'Rio de Janeiro',
            '27': 'Espírito Santo',
            '28': 'Espírito Santo',
            '31': 'Minas Gerais',
            '32': 'Minas Gerais',
            '33': 'Minas Gerais',
            '34': 'Minas Gerais',
            '35': 'Minas Gerais',
            '37': 'Minas Gerais',
            '38': 'Minas Gerais',
            '41': 'Paraná',
            '42': 'Paraná',
            '43': 'Paraná',
            '44': 'Paraná',
            '45': 'Paraná',
            '46': 'Paraná',
            '47': 'Santa Catarina',
            '48': 'Santa Catarina',
            '49': 'Santa Catarina',
            '51': 'Rio Grande do Sul',
            '53': 'Rio Grande do Sul',
            '54': 'Rio Grande do Sul',
            '55': 'Rio Grande do Sul',
            '61': 'Distrito Federal',
            '62': 'Goiás',
            '63': 'Tocantins',
            '64': 'Goiás',
            '65': 'Mato Grosso',
            '66': 'Mato Grosso',
            '67': 'Mato Grosso do Sul',
            '68': 'Acre',
            '69': 'Rondônia',
            '71': 'Bahia',
            '73': 'Bahia',
            '74': 'Bahia',
            '75': 'Bahia',
            '77': 'Bahia',
            '79': 'Sergipe',
            '81': 'Pernambuco',
            '82': 'Alagoas',
            '83': 'Paraíba',
            '84': 'Rio Grande do Norte',
            '85': 'Ceará',
            '86': 'Piauí',
            '87': 'Pernambuco',
            '88': 'Ceará',
            '89': 'Piauí',
            '91': 'Pará',
            '92': 'Amazonas',
            '93': 'Pará',
            '94': 'Pará',
            '95': 'Roraima',
            '96': 'Amapá',
            '97': 'Amazonas',
            '98': 'Maranhão',
            '99': 'Maranhão'
        };
    }
    /**
     * Validate phone number format
     */
    isValid(phone) {
        if (!phone || typeof phone !== 'string')
            return false;
        const cleanPhone = this.removeMask(phone);
        // Check if it has 10 or 11 digits
        if (cleanPhone.length !== 10 && cleanPhone.length !== 11)
            return false;
        // Check if it starts with a valid DDD
        const ddd = cleanPhone.substring(0, 2);
        if (!this.dddMap[ddd])
            return false;
        // Check if it's a valid mobile or landline number
        if (cleanPhone.length === 11) {
            // Mobile number should start with 9
            return cleanPhone[2] === '9';
        }
        else {
            // Landline number should start with 2-8
            return /^[2-8]/.test(cleanPhone.substring(2));
        }
    }
    /**
     * Get DDD from phone number
     */
    getDDD(phone) {
        if (!phone || typeof phone !== 'string')
            return null;
        const cleanPhone = this.removeMask(phone);
        if (cleanPhone.length < 2)
            return null;
        const ddd = cleanPhone.substring(0, 2);
        return this.dddMap[ddd] ? ddd : null;
    }
    /**
     * Get state from DDD
     */
    getState(ddd) {
        if (!ddd || typeof ddd !== 'string')
            return null;
        return this.dddMap[ddd] || null;
    }
    /**
     * Apply phone mask ((00) 00000-0000 or (00) 0000-0000)
     */
    applyMask(phone) {
        if (!phone || typeof phone !== 'string')
            return '';
        const cleanPhone = this.removeMask(phone);
        if (cleanPhone.length === 11) {
            // Mobile: (00) 00000-0000
            return cleanPhone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        }
        else if (cleanPhone.length === 10) {
            // Landline: (00) 0000-0000
            return cleanPhone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
        }
        return phone;
    }
    /**
     * Remove phone mask
     */
    removeMask(phone) {
        if (!phone || typeof phone !== 'string')
            return '';
        return phone.replace(/\D/g, '');
    }
    /**
     * Get all valid DDDs
     */
    getValidDDDs() {
        return Object.keys(this.dddMap);
    }
    /**
     * Check if DDD is valid
     */
    isDDDValid(ddd) {
        return this.dddMap[ddd] !== undefined;
    }
}
exports.PhoneValidator = PhoneValidator;
//# sourceMappingURL=phone.js.map