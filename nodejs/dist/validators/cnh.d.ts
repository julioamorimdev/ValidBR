export declare class CNHValidator {
    /**
     * Valida a CNH (Carteira Nacional de Habilitação)
     * Algoritmo oficial do Denatran
     */
    isValid(cnh: string): boolean;
    /**
     * Aplica máscara na CNH (00000000000)
     */
    applyMask(cnh: string): string;
    /**
     * Remove máscara da CNH
     */
    removeMask(cnh: string): string;
    /**
     * Gera uma CNH válida (para testes)
     */
    generate(): string;
}
//# sourceMappingURL=cnh.d.ts.map