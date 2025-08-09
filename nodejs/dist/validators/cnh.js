"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CNHValidator = void 0;
class CNHValidator {
    /**
     * Valida a CNH (Carteira Nacional de Habilitação)
     * Algoritmo oficial do Denatran
     */
    isValid(cnh) {
        if (!cnh || typeof cnh !== 'string')
            return false;
        const clean = this.removeMask(cnh);
        if (!/^\d{11}$/.test(clean))
            return false;
        // Não pode ser todos os dígitos iguais
        if (/^(\d)\1{10}$/.test(clean))
            return false;
        let dsc = 0;
        let sum = 0;
        for (let i = 0, j = 9; i < 9; ++i, --j) {
            sum += parseInt(clean.charAt(i)) * j;
        }
        let dv1 = sum % 11;
        if (dv1 >= 10) {
            dv1 = 0;
            dsc = 2;
        }
        sum = 0;
        for (let i = 0, j = 1; i < 9; ++i, ++j) {
            sum += parseInt(clean.charAt(i)) * j;
        }
        let dv2 = sum % 11;
        if (dv2 >= 10)
            dv2 = 0;
        return clean[9] == String(dv1) && clean[10] == String((dv2 - dsc < 0 ? dv2 - dsc + 11 : dv2 - dsc));
    }
    /**
     * Aplica máscara na CNH (00000000000)
     */
    applyMask(cnh) {
        return this.removeMask(cnh); // CNH não tem máscara oficial
    }
    /**
     * Remove máscara da CNH
     */
    removeMask(cnh) {
        if (!cnh || typeof cnh !== 'string')
            return '';
        return cnh.replace(/\D/g, '');
    }
    /**
     * Gera uma CNH válida (para testes)
     */
    generate() {
        while (true) {
            const n = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10)).join('');
            let dsc = 0;
            let sum = 0;
            for (let i = 0, j = 9; i < 9; ++i, --j) {
                sum += parseInt(n.charAt(i)) * j;
            }
            let dv1 = sum % 11;
            if (dv1 >= 10) {
                dv1 = 0;
                dsc = 2;
            }
            sum = 0;
            for (let i = 0, j = 1; i < 9; ++i, ++j) {
                sum += parseInt(n.charAt(i)) * j;
            }
            let dv2 = sum % 11;
            if (dv2 >= 10)
                dv2 = 0;
            const dvFinal = (dv2 - dsc < 0 ? dv2 - dsc + 11 : dv2 - dsc);
            const cnh = n + dv1.toString() + dvFinal.toString();
            if (this.isValid(cnh))
                return cnh;
        }
    }
}
exports.CNHValidator = CNHValidator;
//# sourceMappingURL=cnh.js.map