import { CPFValidator } from './validators/cpf';
import { CNPJValidator } from './validators/cnpj';
import { PhoneValidator } from './validators/phone';
import { EmailValidator } from './validators/email';
import { NameValidator } from './validators/name';
import { BirthDateValidator } from './validators/birthDate';
import { CEPValidator } from './validators/cep';
import { RGValidator } from './validators/rg';
import { IEValidator } from './validators/ie';

export class ValidBR {
  static readonly cpf = new CPFValidator();
  static readonly cnpj = new CNPJValidator();
  static readonly phone = new PhoneValidator();
  static readonly email = new EmailValidator();
  static readonly fullName = new NameValidator();
  static readonly birthDate = new BirthDateValidator();
  static readonly cep = new CEPValidator();
  static readonly rg = new RGValidator();
  static readonly ie = new IEValidator();

  /**
   * Sanitize input by removing extra spaces and invalid characters
   */
  static sanitize(input: string): string {
    if (!input || typeof input !== 'string') return '';
    return input.trim().replace(/\s+/g, ' ');
  }

  /**
   * Remove all non-numeric characters from string
   */
  static removeNonNumeric(input: string): string {
    if (!input || typeof input !== 'string') return '';
    return input.replace(/\D/g, '');
  }

  /**
   * Remove all non-alphabetic characters from string
   */
  static removeNonAlphabetic(input: string): string {
    if (!input || typeof input !== 'string') return '';
    return input.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
  }
}

export default ValidBR; 