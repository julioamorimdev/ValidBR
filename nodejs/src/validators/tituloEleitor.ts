export class TituloEleitorValidator {
  /**
   * Valida o Título de Eleitor (algoritmo oficial TSE)
   */
  isValid(titulo: string): boolean {
    if (!titulo || typeof titulo !== 'string') return false;
    const clean = this.removeMask(titulo);
    if (!/^\d{12}$/.test(clean)) return false;
    // Não pode ser todos os dígitos iguais
    if (/^(\d)\1{11}$/.test(clean)) return false;
    const digitos = clean.split('').map(Number);
    // Cálculo dos dois dígitos verificadores
    let d1 = 0;
    for (let i = 0; i < 8; i++) d1 += (digitos[i] ?? 0) * (9 - i);
    d1 = d1 % 11;
    if (d1 === 10) d1 = 0;
    let d2 = 0;
    for (let i = 8; i < 10; i++) d2 += (digitos[i] ?? 0) * (4 - (i - 8));
    d2 = d2 % 11;
    if (d2 === 10) d2 = 0;
    return digitos[10] === d1 && digitos[11] === d2;
  }

  /**
   * Aplica máscara (0000 0000 0000)
   */
  applyMask(titulo: string): string {
    const clean = this.removeMask(titulo);
    return clean.replace(/(\d{4})(\d{4})(\d{4})/, '$1 $2 $3');
  }

  /**
   * Remove máscara
   */
  removeMask(titulo: string): string {
    if (!titulo || typeof titulo !== 'string') return '';
    return titulo.replace(/\D/g, '');
  }

  /**
   * Gera um Título de Eleitor válido (para testes)
   */
  generate(): string {
    while (true) {
      const n = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
      let d1 = 0;
      for (let i = 0; i < 8; i++) d1 += (n[i] ?? 0) * (9 - i);
      d1 = d1 % 11;
      if (d1 === 10) d1 = 0;
      let d2 = 0;
      for (let i = 8; i < 10; i++) d2 += (n[i] ?? 0) * (4 - (i - 8));
      d2 = d2 % 11;
      if (d2 === 10) d2 = 0;
      const titulo = n.join('') + d1.toString() + d2.toString();
      if (this.isValid(titulo)) return titulo;
    }
  }
}
