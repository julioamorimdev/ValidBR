export declare class TituloEleitorValidator {
    /**
     * Valida o Título de Eleitor (algoritmo oficial TSE)
     */
    isValid(titulo: string): boolean;
    /**
     * Aplica máscara (0000 0000 0000)
     */
    applyMask(titulo: string): string;
    /**
     * Remove máscara
     */
    removeMask(titulo: string): string;
    /**
     * Gera um Título de Eleitor válido (para testes)
     */
    generate(): string;
}
//# sourceMappingURL=tituloEleitor.d.ts.map