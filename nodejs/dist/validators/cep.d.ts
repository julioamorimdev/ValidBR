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
export declare class CEPValidator {
    /**
     * Validate CEP format
     */
    isValid(cep: string): boolean;
    /**
     * Apply CEP mask (00000-000)
     */
    applyMask(cep: string): string;
    /**
     * Remove CEP mask
     */
    removeMask(cep: string): string;
    /**
     * Get CEP information via API (optional)
     */
    getInfo(cep: string): Promise<CEPInfo | null>;
    /**
     * Get state from CEP first digit
     */
    getState(cep: string): string | null;
    /**
     * Check if CEP is from São Paulo
     */
    isFromSaoPaulo(cep: string): boolean;
    /**
     * Check if CEP is from Rio de Janeiro
     */
    isFromRioDeJaneiro(cep: string): boolean;
    /**
     * Get region from CEP
     */
    getRegion(cep: string): string | null;
    /**
     * Validate CEP range for specific state
     */
    isValidForState(cep: string, state: string): boolean;
}
//# sourceMappingURL=cep.d.ts.map