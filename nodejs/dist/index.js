"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidBR = void 0;
const cpf_1 = require("./validators/cpf");
const cnpj_1 = require("./validators/cnpj");
const phone_1 = require("./validators/phone");
const email_1 = require("./validators/email");
const name_1 = require("./validators/name");
const birthDate_1 = require("./validators/birthDate");
const cep_1 = require("./validators/cep");
const rg_1 = require("./validators/rg");
const ie_1 = require("./validators/ie");
class ValidBR {
    /**
     * Sanitize input by removing extra spaces and invalid characters
     */
    static sanitize(input) {
        if (!input || typeof input !== 'string')
            return '';
        return input.trim().replace(/\s+/g, ' ');
    }
    /**
     * Remove all non-numeric characters from string
     */
    static removeNonNumeric(input) {
        if (!input || typeof input !== 'string')
            return '';
        return input.replace(/\D/g, '');
    }
    /**
     * Remove all non-alphabetic characters from string
     */
    static removeNonAlphabetic(input) {
        if (!input || typeof input !== 'string')
            return '';
        return input.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
    }
}
exports.ValidBR = ValidBR;
ValidBR.cpf = new cpf_1.CPFValidator();
ValidBR.cnpj = new cnpj_1.CNPJValidator();
ValidBR.phone = new phone_1.PhoneValidator();
ValidBR.email = new email_1.EmailValidator();
ValidBR.fullName = new name_1.NameValidator();
ValidBR.birthDate = new birthDate_1.BirthDateValidator();
ValidBR.cep = new cep_1.CEPValidator();
ValidBR.rg = new rg_1.RGValidator();
ValidBR.ie = new ie_1.IEValidator();
exports.default = ValidBR;
//# sourceMappingURL=index.js.map