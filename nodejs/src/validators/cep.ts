export interface CEPInfo {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export class CEPValidator {
  /**
   * Validate CEP format
   */
  isValid(cep: string): boolean {
    if (!cep || typeof cep !== 'string') return false;
    
    const cleanCEP = this.removeMask(cep);
    
    // Check if it has 8 digits
    if (cleanCEP.length !== 8) return false;
    
    // Check if it's a valid CEP pattern
    return /^\d{8}$/.test(cleanCEP);
  }

  /**
   * Apply CEP mask (00000-000)
   */
  applyMask(cep: string): string {
    if (!cep || typeof cep !== 'string') return '';
    
    const cleanCEP = this.removeMask(cep);
    if (cleanCEP.length !== 8) return cep;
    
    return cleanCEP.replace(/(\d{5})(\d{3})/, '$1-$2');
  }

  /**
   * Remove CEP mask
   */
  removeMask(cep: string): string {
    if (!cep || typeof cep !== 'string') return '';
    return cep.replace(/\D/g, '');
  }

  /**
   * Get CEP information via API (optional)
   */
  async getInfo(cep: string): Promise<CEPInfo | null> {
    if (!this.isValid(cep)) return null;
    
    const cleanCEP = this.removeMask(cep);
    
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cleanCEP}/json/`);
      const data = await response.json() as any;
      
      if (data.erro) return null;
      
      return {
        cep: data.cep,
        logradouro: data.logradouro,
        complemento: data.complemento,
        bairro: data.bairro,
        localidade: data.localidade,
        uf: data.uf,
        ibge: data.ibge,
        gia: data.gia,
        ddd: data.ddd,
        siafi: data.siafi
      };
    } catch (error) {
      console.error('Error fetching CEP info:', error);
      return null;
    }
  }

  /**
   * Get state from CEP first digit
   */
  getState(cep: string): string | null {
    if (!this.isValid(cep)) return null;
    
    const cleanCEP = this.removeMask(cep);
    const firstChar = cleanCEP[0];
    const firstDigit = firstChar ? parseInt(firstChar) : 0;
    
    const stateMap: { [key: number]: string } = {
      0: 'SP',
      1: 'SP',
      2: 'RJ',
      3: 'ES',
      4: 'MG',
      5: 'BA',
      6: 'CE, PE, AL, PB, RN',
      7: 'DF, GO, TO, MT, MS, RO, AC',
      8: 'PR, SC',
      9: 'RS'
    };
    
    return stateMap[firstDigit] || null;
  }

  /**
   * Check if CEP is from São Paulo
   */
  isFromSaoPaulo(cep: string): boolean {
    const state = this.getState(cep);
    return state === 'SP';
  }

  /**
   * Check if CEP is from Rio de Janeiro
   */
  isFromRioDeJaneiro(cep: string): boolean {
    const state = this.getState(cep);
    return state === 'RJ';
  }

  /**
   * Get region from CEP
   */
  getRegion(cep: string): string | null {
    if (!this.isValid(cep)) return null;
    
    const cleanCEP = this.removeMask(cep);
    const firstChar = cleanCEP[0];
    const firstDigit = firstChar ? parseInt(firstChar) : 0;
    
    const regionMap: { [key: number]: string } = {
      0: 'São Paulo',
      1: 'São Paulo',
      2: 'Rio de Janeiro',
      3: 'Espírito Santo',
      4: 'Minas Gerais',
      5: 'Bahia',
      6: 'Nordeste',
      7: 'Centro-Oeste',
      8: 'Sul',
      9: 'Sul'
    };
    
    return regionMap[firstDigit] || null;
  }

  /**
   * Validate CEP range for specific state
   */
  isValidForState(cep: string, state: string): boolean {
    if (!this.isValid(cep)) return false;
    
    const cepState = this.getState(cep);
    if (!cepState) return false;
    
    return cepState.includes(state);
  }
} 