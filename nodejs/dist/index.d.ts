import { CPFValidator } from './validators/cpf';
import { CNPJValidator } from './validators/cnpj';
import { PhoneValidator } from './validators/phone';
import { EmailValidator } from './validators/email';
import { NameValidator } from './validators/name';
import { BirthDateValidator } from './validators/birthDate';
import { CEPValidator } from './validators/cep';
import { RGValidator } from './validators/rg';
import { IEValidator } from './validators/ie';
import { CNHValidator } from './validators/cnh';
import { TituloEleitorValidator } from './validators/tituloEleitor';
import { PISValidator } from './validators/pis';
export declare class ValidBR {
    static readonly cpf: CPFValidator;
    static readonly cnpj: CNPJValidator;
    static readonly phone: PhoneValidator;
    static readonly email: EmailValidator;
    static readonly fullName: NameValidator;
    static readonly birthDate: BirthDateValidator;
    static readonly cep: CEPValidator;
    static readonly rg: RGValidator;
    static readonly ie: IEValidator;
    static readonly cnh: CNHValidator;
    static readonly tituloEleitor: TituloEleitorValidator;
    static readonly pis: PISValidator;
    /**
     * Sanitize input by removing extra spaces and invalid characters
     */
    static sanitize(input: string): string;
    /**
     * Remove all non-numeric characters from string
     */
    static removeNonNumeric(input: string): string;
    /**
     * Remove all non-alphabetic characters from string
     */
    static removeNonAlphabetic(input: string): string;
}
export default ValidBR;
//# sourceMappingURL=index.d.ts.map