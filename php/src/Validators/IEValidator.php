<?php

namespace ValidBR\Validators;

class IEValidator
{
    private array $stateWeights = [
        'AC' => [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
        'AL' => [9, 8, 7, 6, 5, 4, 3, 2],
        'AP' => [9, 8, 7, 6, 5, 4, 3, 2],
        'AM' => [9, 8, 7, 6, 5, 4, 3, 2],
        'BA' => [9, 8, 7, 6, 5, 4, 3, 2],
        'CE' => [9, 8, 7, 6, 5, 4, 3, 2],
        'DF' => [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
        'ES' => [9, 8, 7, 6, 5, 4, 3, 2],
        'GO' => [9, 8, 7, 6, 5, 4, 3, 2],
        'MA' => [9, 8, 7, 6, 5, 4, 3, 2],
        'MG' => [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
        'MS' => [9, 8, 7, 6, 5, 4, 3, 2],
        'MT' => [3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
        'PA' => [9, 8, 7, 6, 5, 4, 3, 2],
        'PB' => [9, 8, 7, 6, 5, 4, 3, 2],
        'PE' => [9, 8, 7, 6, 5, 4, 3, 2],
        'PI' => [9, 8, 7, 6, 5, 4, 3, 2],
        'PR' => [3, 2, 7, 6, 5, 4, 3, 2],
        'RJ' => [2, 7, 6, 5, 4, 3, 2],
        'RN' => [9, 8, 7, 6, 5, 4, 3, 2],
        'RO' => [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
        'RR' => [9, 8, 7, 6, 5, 4, 3, 2],
        'RS' => [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
        'SC' => [9, 8, 7, 6, 5, 4, 3, 2],
        'SE' => [9, 8, 7, 6, 5, 4, 3, 2],
        'SP' => [1, 3, 4, 5, 6, 7, 8, 10],
        'TO' => [9, 8, 7, 6, 5, 4, 3, 2]
    ];

    public function isValid(?string $ie, ?string $state): bool
    {
        if (empty($ie) || !is_string($ie) || empty($state)) {
            return false;
        }
        $cleanIE = $this->removeMask($ie);
        $state = strtoupper($state);
        if (!isset($this->stateWeights[$state])) {
            return false;
        }
        if (strlen($cleanIE) !== count($this->stateWeights[$state])) {
            return false;
        }
        if (!ctype_digit($cleanIE)) {
            return false;
        }
        return $this->validateCheckDigit($cleanIE, $state);
    }

    public function applyMask(?string $ie, ?string $state): string
    {
        if (empty($ie) || !is_string($ie) || empty($state)) {
            return '';
        }
        $cleanIE = $this->removeMask($ie);
        $state = strtoupper($state);
        if (!isset($this->stateWeights[$state])) {
            return $ie;
        }
        if (strlen($cleanIE) !== count($this->stateWeights[$state])) {
            return $ie;
        }
        // Simplificado: apenas retorna o número
        return $cleanIE;
    }

    public function removeMask(?string $ie): string
    {
        if (empty($ie) || !is_string($ie)) {
            return '';
        }
        return preg_replace('/\D/', '', $ie);
    }

    private function validateCheckDigit(string $ie, string $state): bool
    {
        $weights = $this->stateWeights[$state];
        $sum = 0;
        for ($i = 0; $i < count($weights) - 1; $i++) {
            $sum += (int)$ie[$i] * $weights[$i];
        }
        $remainder = $sum % 11;
        $expected = $remainder === 0 ? 0 : 11 - $remainder;
        return (int)$ie[count($weights) - 1] === $expected;
    }

    public function getValidStates(): array
    {
        return array_keys($this->stateWeights);
    }

    public function isStateSupported(?string $state): bool
    {
        return isset($this->stateWeights[strtoupper($state)]);
    }
}