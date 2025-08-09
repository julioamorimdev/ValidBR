import { TituloEleitorValidator } from '../validators/tituloEleitor';

const titulo = new TituloEleitorValidator();
describe('TituloEleitorValidator', () => {
  test('valida Título de Eleitor válido', () => {
    // Exemplo válido: 123456789012 pode não ser válido, então gere um
    const generated = titulo.generate();
    expect(titulo.isValid(generated)).toBe(true);
  });
  test('rejeita Título de Eleitor inválido', () => {
    expect(titulo.isValid('111111111111')).toBe(false);
    expect(titulo.isValid('123')).toBe(false);
  });
  test('aplica e remove máscara', () => {
    const raw = '123456789012';
    const masked = titulo.applyMask(raw);
    expect(masked).toBe('1234 5678 9012');
    expect(titulo.removeMask(masked)).toBe(raw);
  });
});
