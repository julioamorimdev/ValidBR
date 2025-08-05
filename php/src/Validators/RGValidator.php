<?php

namespace ValidBR\Validators;

class RGValidator
{
    private array $stateWeights = [
        'SP' => [2, 3, 4, 5, 6, 7, 8, 9],
        'RJ' => [2, 3, 4, 5, 6, 7, 8, 9],
        'MG' => [2, 3, 4, 5, 6, 7, 8, 9],
        'RS' => [2, 3, 4, 5, 6, 7, 8, 9],
        'PR' => [2, 3, 4, 5, 6, 7, 8, 9],
        'SC' => [2, 3, 4, 5, 6, 7, 8, 9],
        'GO' => [2, 3, 4, 5, 6, 7, 8, 9],
        'MT' => [2, 3, 4, 5, 6, 7, 8, 9],
        'MS' => [2, 3, 4, 5, 6, 7, 8, 9],
        'TO' => [2, 3, 4, 5, 6, 7, 8, 9],
        'DF' => [2, 3, 4, 5, 6, 7, 8, 9],
        'AC' => [2, 3, 4, 5, 6, 7, 8, 9],
        'AP' => [2, 3, 4, 5, 6, 7, 8, 9],
        'AM' => [2, 3, 4, 5, 6, 7, 8, 9],
        'PA' => [2, 3, 4, 5, 6, 7, 8, 9],
        'RO' => [2, 3, 4, 5, 6, 7, 8, 9],
        'RR' => [2, 3, 4, 5, 6, 7, 8, 9],
        'CE' => [2, 3, 4, 5, 6, 7, 8, 9],
        'MA' => [2, 3, 4, 5, 6, 7, 8, 9],
        'PI' => [2, 3, 4, 5, 6, 7, 8, 9],
        'AL' => [2, 3, 4, 5, 6, 7, 8, 9],
        'PB' => [2, 3, 4, 5, 6, 7, 8, 9],
        'PE' => [2, 3, 4, 5, 6, 7, 8, 9],
        'RN' => [2, 3, 4, 5, 6, 7, 8, 9],
        'BA' => [2, 3, 4, 5, 6, 7, 8, 9],
        'SE' => [2, 3, 4, 5, 6, 7, 8, 9],
        'ES' => [2, 3, 4, 5, 6, 7, 8, 9]
    ];

    public function isValid(?string $rg, ?string $state = null): bool
    {
        if (empty($rg) || !is_string($rg)) {
            return false;
        }
        $cleanRG = $this->removeMask($rg);
        if (strlen($cleanRG) !== 8 && strlen($cleanRG) !== 9) {
            return false;
        }
        if (!preg_match('/^\d{8,9}$/', $cleanRG)) {
            return false;
        }
        if ($state && isset($this->stateWeights[strtoupper($state)])) {
            return $this->validateCheckDigit($cleanRG, strtoupper($state));
        }
        return true;
    }

    public function applyMask(?string $rg): string
    {
        if (empty($rg) || !is_string($rg)) {
            return '';
        }
        $cleanRG = $this->removeMask($rg);
        if (strlen($cleanRG) === 8) {
            return substr($cleanRG, 0, 2) . '.' . substr($cleanRG, 2, 3) . '.' . substr($cleanRG, 5, 3);
        } elseif (strlen($cleanRG) === 9) {
            return substr($cleanRG, 0, 2) . '.' . substr($cleanRG, 2, 3) . '.' . substr($cleanRG, 5, 3) . '-' . substr($cleanRG, 8, 1);
        }
        return $rg;
    }

    public function removeMask(?string $rg): string
    {
        if (empty($rg) || !is_string($rg)) {
            return '';
        }
        return preg_replace('/\D/', '', $rg);
    }

    private function validateCheckDigit(string $rg, string $state): bool
    {
        if (strlen($rg) !== 9) {
            return false;
        }
        $weights = $this->stateWeights[$state] ?? null;
        if (!$weights) {
            return false;
        }
        $sum = 0;
        for ($i = 0; $i < 8; $i++) {
            $sum += (int)$rg[$i] * $weights[$i];
        }
        $remainder = $sum % 11;
        $expected = $remainder === 0 ? 0 : 11 - $remainder;
        return (int)$rg[8] === $expected;
    }
}