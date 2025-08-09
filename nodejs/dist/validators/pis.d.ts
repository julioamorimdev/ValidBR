export declare class PISValidator {
    /**
     * Valida o PIS/PASEP/NIS/NIT
     * Algoritmo oficial da Caixa Econômica
     */
    isValid(pis: string): boolean;
    /**
     * Aplica máscara (000.00000.00-0)
     */
    applyMask(pis: string): string;
    /**
     * Remove máscara
     */
    removeMask(pis: string): string;
    /**
     * Gera um PIS válido (para testes)
     */
    generate(): string;
}
//# sourceMappingURL=pis.d.ts.map