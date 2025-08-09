import { PISValidator } from '../validators/pis';

const pis = new PISValidator();
describe('PISValidator', () => {
  test('valida PIS válido', () => {
    // Exemplo válido: gere um
    const generated = pis.generate();
    expect(pis.isValid(generated)).toBe(true);
  });
  test('rejeita PIS inválido', () => {
    expect(pis.isValid('11111111111')).toBe(false);
    expect(pis.isValid('123')).toBe(false);
  });
  test('aplica e remove máscara', () => {
    const raw = '12345678901';
    const masked = pis.applyMask(raw);
    expect(masked).toBe('123.45678.90-1');
    expect(pis.removeMask(masked)).toBe(raw);
  });
});
