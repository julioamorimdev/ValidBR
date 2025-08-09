<?php

namespace ValidBR\Validators;

class CNHValidator
{
    /**
     * Valida a CNH (Carteira Nacional de Habilitação)
     */
    public function isValid(?string $cnh): bool
    {
        if (empty($cnh) || !is_string($cnh)) {
            return false;
        }
        $clean = $this->removeMask($cnh);
        if (!preg_match('/^\d{11}$/', $clean)) {
            return false;
        }
        if (preg_match('/^(\d)\1{10}$/', $clean)) {
            return false;
        }
        $dsc = 0;
        $sum = 0;
        for ($i = 0, $j = 9; $i < 9; ++$i, --$j) {
            $sum += (int)$clean[$i] * $j;
        }
        $dv1 = $sum % 11;
        if ($dv1 >= 10) {
            $dv1 = 0;
            $dsc = 2;
        }
        $sum = 0;
        for ($i = 0, $j = 1; $i < 9; ++$i, ++$j) {
            $sum += (int)$clean[$i] * $j;
        }
        $dv2 = $sum % 11;
        if ($dv2 >= 10) {
            $dv2 = 0;
        }
        $dv2_final = $dv2 - $dsc < 0 ? $dv2 - $dsc + 11 : $dv2 - $dsc;
        return $clean[9] == (string)$dv1 && $clean[10] == (string)$dv2_final;
    }

    /**
     * Aplica máscara na CNH (não há máscara oficial)
     */
    public function applyMask(?string $cnh): string
    {
        return $this->removeMask($cnh);
    }

    /**
     * Remove máscara da CNH
     */
    public function removeMask(?string $cnh): string
    {
        if (empty($cnh) || !is_string($cnh)) {
            return '';
        }
        return preg_replace('/\D/', '', $cnh);
    }

    /**
     * Gera uma CNH válida (para testes)
     */
    public function generate(): string
    {
        while (true) {
            $n = '';
            for ($i = 0; $i < 9; $i++) {
                $n .= mt_rand(0, 9);
            }
            $dsc = 0;
            $sum = 0;
            for ($i = 0, $j = 9; $i < 9; ++$i, --$j) {
                $sum += (int)$n[$i] * $j;
            }
            $dv1 = $sum % 11;
            if ($dv1 >= 10) {
                $dv1 = 0;
                $dsc = 2;
            }
            $sum = 0;
            for ($i = 0, $j = 1; $i < 9; ++$i, ++$j) {
                $sum += (int)$n[$i] * $j;
            }
            $dv2 = $sum % 11;
            if ($dv2 >= 10) {
                $dv2 = 0;
            }
            $dv2_final = $dv2 - $dsc < 0 ? $dv2 - $dsc + 11 : $dv2 - $dsc;
            $cnh = $n . $dv1 . $dv2_final;
            if ($this->isValid($cnh)) {
                return $cnh;
            }
        }
    }
}
