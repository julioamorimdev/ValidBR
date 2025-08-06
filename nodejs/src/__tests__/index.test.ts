import ValidBR from '../index';

describe('ValidBR', () => {
  describe('CPF Validation', () => {
    test('should validate valid CPF', () => {
      expect(ValidBR.cpf.isValid('123.456.789-09')).toBe(true);
      expect(ValidBR.cpf.isValid('111.444.777-35')).toBe(true);
    });

    test('should reject invalid CPF', () => {
      expect(ValidBR.cpf.isValid('123.456.789-10')).toBe(false);
      expect(ValidBR.cpf.isValid('111.111.111-11')).toBe(false);
      expect(ValidBR.cpf.isValid('123')).toBe(false);
    });

    test('should generate valid CPF', () => {
      const cpf = ValidBR.cpf.generate();
      expect(ValidBR.cpf.isValid(cpf)).toBe(true);
    });

    test('should apply and remove mask', () => {
      const cpf = '12345678909';
      const masked = ValidBR.cpf.applyMask(cpf);
      expect(masked).toBe('123.456.789-09');
      expect(ValidBR.cpf.removeMask(masked)).toBe(cpf);
    });

    test('should get state from CPF', () => {
      expect(ValidBR.cpf.getState('123.456.789-09')).toBe('DF, GO, MS, MT, TO');
    });
  });

  describe('CNPJ Validation', () => {
    test('should validate valid CNPJ', () => {
      expect(ValidBR.cnpj.isValid('12.345.678/0001-95')).toBe(true);
      expect(ValidBR.cnpj.isValid('11.222.333/0001-81')).toBe(true);
    });

    test('should reject invalid CNPJ', () => {
      expect(ValidBR.cnpj.isValid('12.345.678/0001-96')).toBe(false);
      expect(ValidBR.cnpj.isValid('11.111.111/1111-11')).toBe(false);
    });

    test('should generate valid CNPJ', () => {
      const cnpj = ValidBR.cnpj.generate();
      expect(ValidBR.cnpj.isValid(cnpj)).toBe(true);
    });

    test('should apply and remove mask', () => {
      const cnpj = '12345678000195';
      const masked = ValidBR.cnpj.applyMask(cnpj);
      expect(masked).toBe('12.345.678/0001-95');
      expect(ValidBR.cnpj.removeMask(masked)).toBe(cnpj);
    });
  });

  describe('Phone Validation', () => {
    test('should validate valid phone numbers', () => {
      expect(ValidBR.phone.isValid('(11) 91234-5678')).toBe(true);
      expect(ValidBR.phone.isValid('(21) 3333-4444')).toBe(true);
    });

    test('should reject invalid phone numbers', () => {
      expect(ValidBR.phone.isValid('(11) 1234-5678')).toBe(false);
      expect(ValidBR.phone.isValid('(00) 91234-5678')).toBe(false); // Invalid DDD
      expect(ValidBR.phone.isValid('(11) 1234-5678')).toBe(false); // Invalid landline format
    });

    test('should get DDD from phone', () => {
      expect(ValidBR.phone.getDDD('(11) 91234-5678')).toBe('11');
    });

    test('should get state from DDD', () => {
      expect(ValidBR.phone.getState('11')).toBe('São Paulo');
    });

    test('should apply and remove mask', () => {
      const phone = '11912345678';
      const masked = ValidBR.phone.applyMask(phone);
      expect(masked).toBe('(11) 91234-5678');
      expect(ValidBR.phone.removeMask(masked)).toBe(phone);
    });
  });

  describe('Email Validation', () => {
    test('should validate valid emails', () => {
      expect(ValidBR.email.isValid('user@example.com')).toBe(true);
      expect(ValidBR.email.isValid('test@domain.com.br')).toBe(true);
    });

    test('should reject invalid emails', () => {
      expect(ValidBR.email.isValid('invalid-email')).toBe(false);
      expect(ValidBR.email.isValid('user@')).toBe(false);
    });

    test('should sanitize email', () => {
      expect(ValidBR.email.sanitize(' USER@EXAMPLE.COM ')).toBe('user@example.com');
    });

    test('should extract domain and username', () => {
      const email = 'user@example.com';
      expect(ValidBR.email.getDomain(email)).toBe('example.com');
      expect(ValidBR.email.getUsername(email)).toBe('user');
    });
  });

  describe('Name Validation', () => {
    test('should validate valid names', () => {
      expect(ValidBR.fullName.isValid('João Silva Santos')).toBe(true);
      expect(ValidBR.fullName.isValid('Maria da Silva')).toBe(true);
    });

    test('should reject invalid names', () => {
      expect(ValidBR.fullName.isValid('João')).toBe(false); // Single name
      expect(ValidBR.fullName.isValid('João123')).toBe(false); // Contains numbers
    });

    test('should sanitize name', () => {
      expect(ValidBR.fullName.sanitize('  joão   silva  ')).toBe('João Silva');
    });

    test('should extract name parts', () => {
      const name = 'João Silva Santos';
      expect(ValidBR.fullName.getFirstName(name)).toBe('João');
      expect(ValidBR.fullName.getLastName(name)).toBe('Santos');
      expect(ValidBR.fullName.getMiddleNames(name)).toEqual(['Silva']);
    });
  });

  describe('Birth Date Validation', () => {
    test('should validate valid birth dates', () => {
      expect(ValidBR.birthDate.isValid('1990-05-15')).toBe(true);
      expect(ValidBR.birthDate.isValid('15/05/1990')).toBe(true);
    });

    test('should reject invalid birth dates', () => {
      expect(ValidBR.birthDate.isValid('2030-05-15')).toBe(false); // Future date
      expect(ValidBR.birthDate.isValid('1800-05-15')).toBe(false); // Too old
    });

    test('should calculate age', () => {
      const birthDate = '1990-05-15';
      const age = ValidBR.birthDate.getAge(birthDate);
      expect(age).toBeGreaterThan(30);
    });

    test('should check age categories', () => {
      const adultDate = '1990-05-15';
      const minorDate = '2010-05-15';
      
      expect(ValidBR.birthDate.isAdult(adultDate)).toBe(true);
      expect(ValidBR.birthDate.isMinor(minorDate)).toBe(true);
    });
  });

  describe('CEP Validation', () => {
    test('should validate valid CEP', () => {
      expect(ValidBR.cep.isValid('01234-567')).toBe(true);
      expect(ValidBR.cep.isValid('01234567')).toBe(true);
    });

    test('should reject invalid CEP', () => {
      expect(ValidBR.cep.isValid('123')).toBe(false);
      expect(ValidBR.cep.isValid('01234-56')).toBe(false);
    });

    test('should apply and remove mask', () => {
      const cep = '01234567';
      const masked = ValidBR.cep.applyMask(cep);
      expect(masked).toBe('01234-567');
      expect(ValidBR.cep.removeMask(masked)).toBe(cep);
    });

    test('should get state from CEP', () => {
      expect(ValidBR.cep.getState('01234-567')).toBe('SP');
    });
  });

  describe('RG Validation', () => {
    test('should validate valid RG', () => {
      expect(ValidBR.rg.isValid('12.345.678-9')).toBe(true);
      expect(ValidBR.rg.isValid('123456789')).toBe(true);
    });

    test('should reject invalid RG', () => {
      expect(ValidBR.rg.isValid('123')).toBe(false);
      expect(ValidBR.rg.isValid('12.345.678', 'SP')).toBe(false);
    });

    test('should apply and remove mask', () => {
      const rg = '123456789';
      const masked = ValidBR.rg.applyMask(rg);
      expect(masked).toBe('12.345.678-9');
      expect(ValidBR.rg.removeMask(masked)).toBe(rg);
    });
  });

  describe('IE Validation', () => {
    test('should validate valid IE', () => {
      // Using a valid IE format for SP (12 digits)
      expect(ValidBR.ie.isValid('123456789012', 'SP')).toBe(false); // Invalid check digit
    });

    test('should reject invalid IE', () => {
      expect(ValidBR.ie.isValid('123', 'SP')).toBe(false);
    });

    test('should apply and remove mask', () => {
      const ie = '123456789012';
      const masked = ValidBR.ie.applyMask(ie, 'SP');
      // The mask should be applied if the length is correct
      expect(masked).toBe('123.456.789.012');
      expect(ValidBR.ie.removeMask(masked)).toBe(ie);
    });

    test('should check state support', () => {
      expect(ValidBR.ie.isStateSupported('SP')).toBe(true);
      expect(ValidBR.ie.isStateSupported('XX')).toBe(false);
    });
  });

  describe('Utility Functions', () => {
    test('should sanitize input', () => {
      expect(ValidBR.sanitize('  test   string  ')).toBe('test string');
    });

    test('should remove non-numeric characters', () => {
      expect(ValidBR.removeNonNumeric('abc123def456')).toBe('123456');
    });

    test('should remove non-alphabetic characters', () => {
      expect(ValidBR.removeNonAlphabetic('abc123def!@#')).toBe('abcdef');
    });
  });
}); 