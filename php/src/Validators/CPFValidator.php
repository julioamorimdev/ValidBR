<?php

namespace ValidBR\Validators;

class CPFValidator
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
     * Validate CPF format and check digits
     */
    public function isValid(?string $cpf): bool
    {
        if (empty($cpf) || !is_string($cpf)) {
            return false;
        }

        $cleanCPF = $this->removeMask($cpf);

        // Check if it has 11 digits
        if (strlen($cleanCPF) !== 11) {
            return false;
        }

        // Check if all digits are the same
        if (preg_match('/^(\d)\1{10}$/', $cleanCPF)) {
            return false;
        }

        // Validate first check digit
        $sum = 0;
        for ($i = 0; $i < 9; $i++) {
            $sum += (int)$cleanCPF[$i] * (10 - $i);
        }
        $remainder = $sum % 11;
        $firstDigit = $remainder < 2 ? 0 : 11 - $remainder;

        if ((int)$cleanCPF[9] !== $firstDigit) {
            return false;
        }

        // Validate second check digit
        $sum = 0;
        for ($i = 0; $i < 10; $i++) {
            $sum += (int)$cleanCPF[$i] * (11 - $i);
        }
        $remainder = $sum % 11;
        $secondDigit = $remainder < 2 ? 0 : 11 - $remainder;

        return (int)$cleanCPF[10] === $secondDigit;
    }

    /**
     * Generate a valid CPF
     */
    public function generate(): string
    {
        $digits = [];
        for ($i = 0; $i < 9; $i++) {
            $digits[] = rand(0, 9);
        }

        // Calculate first check digit
        $sum = 0;
        for ($i = 0; $i < 9; $i++) {
            $sum += $digits[$i] * (10 - $i);
        }
        $remainder = $sum % 11;
        $firstDigit = $remainder < 2 ? 0 : 11 - $remainder;
        $digits[] = $firstDigit;

        // Calculate second check digit
        $sum = 0;
        for ($i = 0; $i < 10; $i++) {
            $sum += $digits[$i] * (11 - $i);
        }
        $remainder = $sum % 11;
        $secondDigit = $remainder < 2 ? 0 : 11 - $remainder;
        $digits[] = $secondDigit;

        return $this->applyMask(implode('', $digits));
    }

    /**
     * Apply CPF mask (000.000.000-00)
     */
    public function applyMask(?string $cpf): string
    {
        if (empty($cpf) || !is_string($cpf)) {
            return '';
        }

        $cleanCPF = $this->removeMask($cpf);
        if (strlen($cleanCPF) !== 11) {
            return $cpf;
        }

        return substr($cleanCPF, 0, 3) . '.' . 
               substr($cleanCPF, 3, 3) . '.' . 
               substr($cleanCPF, 6, 3) . '-' . 
               substr($cleanCPF, 9, 2);
    }

    /**
     * Remove CPF mask
     */
    public function removeMask(?string $cpf): string
    {
        if (empty($cpf) || !is_string($cpf)) {
            return '';
        }
        return preg_replace('/\D/', '', $cpf);
    }

    /**
     * Get state from CPF first two digits
     */
    public function getState(?string $cpf): ?string
    {
        if (!$this->isValid($cpf)) {
            return null;
        }

        $cleanCPF = $this->removeMask($cpf);
        $firstTwoDigits = (int)substr($cleanCPF, 0, 2);

        foreach ($this->stateMap as $range => $states) {
            if ($firstTwoDigits >= $range * 10 && $firstTwoDigits <= $range * 10 + 9) {
                return $states;
            }
        }

        return null;
    }
} 