export class RGValidator {
  private readonly stateWeights: { [key: string]: number[] } = {
    'SP': [2, 3, 4, 5, 6, 7, 8, 9],
    'RJ': [2, 3, 4, 5, 6, 7, 8, 9],
    'MG': [2, 3, 4, 5, 6, 7, 8, 9],
    'RS': [2, 3, 4, 5, 6, 7, 8, 9],
    'PR': [2, 3, 4, 5, 6, 7, 8, 9],
    'SC': [2, 3, 4, 5, 6, 7, 8, 9],
    'GO': [2, 3, 4, 5, 6, 7, 8, 9],
    'MT': [2, 3, 4, 5, 6, 7, 8, 9],
    'MS': [2, 3, 4, 5, 6, 7, 8, 9],
    'TO': [2, 3, 4, 5, 6, 7, 8, 9],
    'DF': [2, 3, 4, 5, 6, 7, 8, 9],
    'AC': [2, 3, 4, 5, 6, 7, 8, 9],
    'AP': [2, 3, 4, 5, 6, 7, 8, 9],
    'AM': [2, 3, 4, 5, 6, 7, 8, 9],
    'PA': [2, 3, 4, 5, 6, 7, 8, 9],
    'RO': [2, 3, 4, 5, 6, 7, 8, 9],
    'RR': [2, 3, 4, 5, 6, 7, 8, 9],
    'CE': [2, 3, 4, 5, 6, 7, 8, 9],
    'MA': [2, 3, 4, 5, 6, 7, 8, 9],
    'PI': [2, 3, 4, 5, 6, 7, 8, 9],
    'AL': [2, 3, 4, 5, 6, 7, 8, 9],
    'PB': [2, 3, 4, 5, 6, 7, 8, 9],
    'PE': [2, 3, 4, 5, 6, 7, 8, 9],
    'RN': [2, 3, 4, 5, 6, 7, 8, 9],
    'BA': [2, 3, 4, 5, 6, 7, 8, 9],
    'SE': [2, 3, 4, 5, 6, 7, 8, 9],
    'ES': [2, 3, 4, 5, 6, 7, 8, 9]
  };

  /**
   * Validate RG format and check digit
   */
  isValid(rg: string, state?: string): boolean {
    if (!rg || typeof rg !== 'string') return false;
    
    const cleanRG = this.removeMask(rg);
    
    // Check if it has 8 or 9 digits
    if (cleanRG.length !== 8 && cleanRG.length !== 9) return false;
    
    // Check if it's a valid RG pattern
    if (!/^\d{8,9}$/.test(cleanRG)) return false;
    
    // If state is provided, validate check digit
    if (state && this.stateWeights[state.toUpperCase()]) {
      return this.validateCheckDigit(cleanRG, state.toUpperCase());
    }
    
    return true;
  }

  /**
   * Apply RG mask (00.000.000-0)
   */
  applyMask(rg: string): string {
    if (!rg || typeof rg !== 'string') return '';
    
    const cleanRG = this.removeMask(rg);
    if (cleanRG.length !== 8 && cleanRG.length !== 9) return rg;
    
    if (cleanRG.length === 8) {
      return cleanRG.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2.$3');
    } else {
      return cleanRG.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
    }
  }

  /**
   * Remove RG mask
   */
  removeMask(rg: string): string {
    if (!rg || typeof rg !== 'string') return '';
    return rg.replace(/\D/g, '');
  }

  /**
   * Generate a valid RG for a specific state
   */
  generate(state: string): string {
    if (!this.stateWeights[state.toUpperCase()]) {
      throw new Error(`Invalid state: ${state}`);
    }
    
    const digits = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10));
    
    // Calculate check digit
    const checkDigit = this.calculateCheckDigit(digits.join(''), state.toUpperCase());
    digits.push(checkDigit);
    
    return this.applyMask(digits.join(''));
  }

  /**
   * Validate check digit for specific state
   */
  private validateCheckDigit(rg: string, state: string): boolean {
    if (rg.length !== 9) return false;
    
    const weights = this.stateWeights[state];
    if (!weights) return false;
    
    let sum = 0;
    for (let i = 0; i < 8; i++) {
      const digit = rg[i];
      const weight = weights[i];
      if (digit !== undefined && weight !== undefined) {
        sum += parseInt(digit) * weight;
      }
    }
    
    const remainder = sum % 11;
    const expectedCheckDigit = remainder === 0 ? 0 : 11 - remainder;
    
    const eighthDigit = rg[8];
    return eighthDigit !== undefined && parseInt(eighthDigit) === expectedCheckDigit;
  }

  /**
   * Calculate check digit for RG
   */
  private calculateCheckDigit(rg: string, state: string): number {
    const weights = this.stateWeights[state];
    if (!weights) return 0;
    
    let sum = 0;
    for (let i = 0; i < 8; i++) {
      const digit = rg[i];
      const weight = weights[i];
      if (digit !== undefined && weight !== undefined) {
        sum += parseInt(digit) * weight;
      }
    }
    
    const remainder = sum % 11;
    return remainder === 0 ? 0 : 11 - remainder;
  }

  /**
   * Get state from RG (if possible)
   */
  getState(rg: string): string | null {
    // This is a simplified approach - in reality, RG state identification
    // is more complex and varies by state
    if (!this.isValid(rg)) return null;
    
    // For demonstration, return null as RG state identification
    // requires additional context or database lookup
    return null;
  }

  /**
   * Check if RG is from São Paulo
   */
  isFromSaoPaulo(_rg: string): boolean {
    // This would require specific São Paulo RG validation rules
    // For now, return false as this needs state-specific implementation
    return false;
  }

  /**
   * Get all valid states for RG validation
   */
  getValidStates(): string[] {
    return Object.keys(this.stateWeights);
  }
} 