<?php

namespace ValidBR\Validators;

class TituloEleitorValidator
{
    /**
     * Valida o Título de Eleitor
     */
    public function isValid(?string $titulo): bool
    {
        if (empty($titulo) || !is_string($titulo)) {
            return false;
        }
        $clean = $this->removeMask($titulo);
        if (!preg_match('/^\d{12}$/', $clean)) {
            return false;
        }
        if (preg_match('/^(\d)\1{11}$/', $clean)) {
            return false;
        }
        $digitos = array_map('intval', str_split($clean));
        $d1 = 0;
        for ($i = 0; $i < 8; $i++) {
            $d1 += $digitos[$i] * (9 - $i);
        }
        $d1 = $d1 % 11;
        if ($d1 === 10) $d1 = 0;
        $d2 = 0;
        for ($i = 8; $i < 10; $i++) {
            $d2 += $digitos[$i] * (4 - ($i - 8));
        }
        $d2 = $d2 % 11;
        if ($d2 === 10) $d2 = 0;
        return $digitos[10] === $d1 && $digitos[11] === $d2;
    }

    /**
     * Aplica máscara (0000 0000 0000)
     */
    public function applyMask(?string $titulo): string
    {
        $clean = $this->removeMask($titulo);
        return preg_replace('/^(\d{4})(\d{4})(\d{4})$/', '$1 $2 $3', $clean);
    }

    /**
     * Remove máscara
     */
    public function removeMask(?string $titulo): string
    {
        if (empty($titulo) || !is_string($titulo)) {
            return '';
        }
        return preg_replace('/\D/', '', $titulo);
    }

    /**
     * Gera um Título de Eleitor válido (para testes)
     */
    public function generate(): string
    {
        while (true) {
            $n = [];
            for ($i = 0; $i < 10; $i++) {
                $n[] = mt_rand(0, 9);
            }
            $d1 = 0;
            for ($i = 0; $i < 8; $i++) {
                $d1 += $n[$i] * (9 - $i);
            }
            $d1 = $d1 % 11;
            if ($d1 === 10) $d1 = 0;
            $d2 = 0;
            for ($i = 8; $i < 10; $i++) {
                $d2 += $n[$i] * (4 - ($i - 8));
            }
            $d2 = $d2 % 11;
            if ($d2 === 10) $d2 = 0;
            $titulo = implode('', $n) . $d1 . $d2;
            if ($this->isValid($titulo)) {
                return $titulo;
            }
        }
    }
}
