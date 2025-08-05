<?php

namespace ValidBR\Validators;

class CNPJValidator
{
    private array $stateMap = [
        1 => 'DF, GO, MS, MT, TO',
        2 => 'AC, AP, AM, PA, RO, RR',
        3 => 'CE, MA, PI',
        4 => 'AL, PB, PE, RN',
        5 => 'BA, SE',
        6 => 'MG',
        7 => 'ES, RJ',
        8 => 'SP',
        9 => 'PR, SC',
        0 => 'RS'
    ];

    /**
     * Validate CNPJ format and check digits
     */
    public function isValid(?string $cnpj): bool
    {
        if (empty($cnpj) || !is_string($cnpj)) {
            return false;
        }

        $cleanCNPJ = $this->removeMask($cnpj);

        // Check if it has 14 digits
        if (strlen($cleanCNPJ) !== 14) {
            return false;
        }

        // Check if all digits are the same
        if (preg_match('/^(\d)\1{13}$/', $cleanCNPJ)) {
            return false;
        }

        // Validate first check digit
        $weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        $sum = 0;
        for ($i = 0; $i < 12; $i++) {
            $sum += (int)$cleanCNPJ[$i] * $weights1[$i];
        }
        $remainder = $sum % 11;
        $firstDigit = $remainder < 2 ? 0 : 11 - $remainder;

        if ((int)$cleanCNPJ[12] !== $firstDigit) {
            return false;
        }

        // Validate second check digit
        $weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        $sum = 0;
        for ($i = 0; $i < 13; $i++) {
            $sum += (int)$cleanCNPJ[$i] * $weights2[$i];
        }
        $remainder = $sum % 11;
        $secondDigit = $remainder < 2 ? 0 : 11 - $remainder;

        return (int)$cleanCNPJ[13] === $secondDigit;
    }

    /**
     * Generate a valid CNPJ
     */
    public function generate(): string
    {
        $digits = [];
        for ($i = 0; $i < 12; $i++) {
            $digits[] = rand(0, 9);
        }

        // Calculate first check digit
        $weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        $sum = 0;
        for ($i = 0; $i < 12; $i++) {
            $sum += $digits[$i] * $weights1[$i];
        }
        $remainder = $sum % 11;
        $firstDigit = $remainder < 2 ? 0 : 11 - $remainder;
        $digits[] = $firstDigit;

        // Calculate second check digit
        $weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        $sum = 0;
        for ($i = 0; $i < 13; $i++) {
            $sum += $digits[$i] * $weights2[$i];
        }
        $remainder = $sum % 11;
        $secondDigit = $remainder < 2 ? 0 : 11 - $remainder;
        $digits[] = $secondDigit;

        return $this->applyMask(implode('', $digits));
    }

    /**
     * Apply CNPJ mask (00.000.000/0000-00)
     */
    public function applyMask(?string $cnpj): string
    {
        if (empty($cnpj) || !is_string($cnpj)) {
            return '';
        }

        $cleanCNPJ = $this->removeMask($cnpj);
        if (strlen($cleanCNPJ) !== 14) {
            return $cnpj;
        }

        return substr($cleanCNPJ, 0, 2) . '.' . 
               substr($cleanCNPJ, 2, 3) . '.' . 
               substr($cleanCNPJ, 5, 3) . '/' . 
               substr($cleanCNPJ, 8, 4) . '-' . 
               substr($cleanCNPJ, 12, 2);
    }

    /**
     * Remove CNPJ mask
     */
    public function removeMask(?string $cnpj): string
    {
        if (empty($cnpj) || !is_string($cnpj)) {
            return '';
        }
        return preg_replace('/\D/', '', $cnpj);
    }

    /**
     * Get state from CNPJ first two digits
     */
    public function getState(?string $cnpj): ?string
    {
        if (!$this->isValid($cnpj)) {
            return null;
        }

        $cleanCNPJ = $this->removeMask($cnpj);
        $firstTwoDigits = (int)substr($cleanCNPJ, 0, 2);

        foreach ($this->stateMap as $range => $states) {
            if ($firstTwoDigits >= $range * 10 && $firstTwoDigits <= $range * 10 + 9) {
                return $states;
            }
        }

        return null;
    }
} 