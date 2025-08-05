export class CPFValidator {
  /**
   * Validate CPF format and check digits
   */
  isValid(cpf: string): boolean {
    if (!cpf || typeof cpf !== 'string') return false;
    
    const cleanCPF = this.removeMask(cpf);
    
    // Check if it has 11 digits
    if (cleanCPF.length !== 11) return false;
    
    // Check if all digits are the same
    if (/^(\d)\1{10}$/.test(cleanCPF)) return false;
    
    // Validate first check digit
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cleanCPF[i]) * (10 - i);
    }
    let remainder = sum % 11;
    let firstDigit = remainder < 2 ? 0 : 11 - remainder;
    
    if (parseInt(cleanCPF[9]) !== firstDigit) return false;
    
    // Validate second check digit
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cleanCPF[i]) * (11 - i);
    }
    remainder = sum % 11;
    let secondDigit = remainder < 2 ? 0 : 11 - remainder;
    
    return parseInt(cleanCPF[10]) === secondDigit;
  }

  /**
   * Generate a valid CPF
   */
  generate(): string {
    const digits = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
    
    // Calculate first check digit
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += digits[i] * (10 - i);
    }
    let remainder = sum % 11;
    let firstDigit = remainder < 2 ? 0 : 11 - remainder;
    digits.push(firstDigit);
    
    // Calculate second check digit
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += digits[i] * (11 - i);
    }
    remainder = sum % 11;
    let secondDigit = remainder < 2 ? 0 : 11 - remainder;
    digits.push(secondDigit);
    
    return this.applyMask(digits.join(''));
  }

  /**
   * Apply CPF mask (000.000.000-00)
   */
  applyMask(cpf: string): string {
    if (!cpf || typeof cpf !== 'string') return '';
    
    const cleanCPF = this.removeMask(cpf);
    if (cleanCPF.length !== 11) return cpf;
    
    return cleanCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  /**
   * Remove CPF mask
   */
  removeMask(cpf: string): string {
    if (!cpf || typeof cpf !== 'string') return '';
    return cpf.replace(/\D/g, '');
  }

  /**
   * Get state from CPF first two digits
   */
  getState(cpf: string): string | null {
    if (!this.isValid(cpf)) return null;
    
    const cleanCPF = this.removeMask(cpf);
    const firstTwoDigits = parseInt(cleanCPF.substring(0, 2));
    
    const stateMap: { [key: number]: string } = {
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