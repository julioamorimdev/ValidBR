export class PISValidator {
  /**
   * Valida o PIS/PASEP/NIS/NIT
   * Algoritmo oficial da Caixa Econômica
   */
  isValid(pis: string): boolean {
    if (!pis || typeof pis !== 'string') return false;
    const clean = this.removeMask(pis);
    if (!/^\d{11}$/.test(clean)) return false;
    if (/^(\d)\1{10}$/.test(clean)) return false;
    const multipliers = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(clean.charAt(i) || '0') * (multipliers[i] ?? 0);
    }
    let dv = 11 - (sum % 11);
    if (dv === 10 || dv === 11) dv = 0;
    return parseInt(clean.charAt(10)) === dv;
  }

  /**
   * Aplica máscara (000.00000.00-0)
   */
  applyMask(pis: string): string {
    const clean = this.removeMask(pis);
    return clean.replace(/(\d{3})(\d{5})(\d{2})(\d{1})/, '$1.$2.$3-$4');
  }

  /**
   * Remove máscara
   */
  removeMask(pis: string): string {
    if (!pis || typeof pis !== 'string') return '';
    return pis.replace(/\D/g, '');
  }

  /**
   * Gera um PIS válido (para testes)
   */
  generate(): string {
    while (true) {
      const n = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10)).join('');
      const multipliers = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
      let sum = 0;
      for (let i = 0; i < 10; i++) {
        sum += parseInt(n.charAt(i) || '0') * (multipliers[i] ?? 0);
      }
      let dv = 11 - (sum % 11);
      if (dv === 10 || dv === 11) dv = 0;
      const pis = n + dv.toString();
      if (this.isValid(pis)) return pis;
    }
  }
}
