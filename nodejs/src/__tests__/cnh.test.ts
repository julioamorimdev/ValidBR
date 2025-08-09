import { CNHValidator } from '../validators/cnh';

const cnh = new CNHValidator();
describe('CNHValidator', () => {
  test('valida CNH válida', () => {
    expect(cnh.isValid('02650306461')).toBe(true);
  });
  test('rejeita CNH inválida', () => {
    expect(cnh.isValid('11111111111')).toBe(false);
    expect(cnh.isValid('123')).toBe(false);
  });
  test('gera CNH válida', () => {
    const generated = cnh.generate();
    expect(cnh.isValid(generated)).toBe(true);
  });
  test('aplica e remove máscara', () => {
    const raw = '02650306461';
    const masked = cnh.applyMask(raw);
    expect(masked).toBe('02650306461');
    expect(cnh.removeMask(masked)).toBe(raw);
  });
});
