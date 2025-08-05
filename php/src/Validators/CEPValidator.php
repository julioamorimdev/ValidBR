<?php

namespace ValidBR\Validators;

class CEPValidator
{
    /**
     * Validate CEP format
     */
    public function isValid(?string $cep): bool
    {
        if (empty($cep) || !is_string($cep)) {
            return false;
        }
        $cleanCEP = $this->removeMask($cep);
        return preg_match('/^\d{8}$/', $cleanCEP) === 1;
    }

    /**
     * Apply CEP mask (00000-000)
     */
    public function applyMask(?string $cep): string
    {
        if (empty($cep) || !is_string($cep)) {
            return '';
        }
        $cleanCEP = $this->removeMask($cep);
        if (strlen($cleanCEP) !== 8) {
            return $cep;
        }
        return substr($cleanCEP, 0, 5) . '-' . substr($cleanCEP, 5, 3);
    }

    /**
     * Remove CEP mask
     */
    public function removeMask(?string $cep): string
    {
        if (empty($cep) || !is_string($cep)) {
            return '';
        }
        return preg_replace('/\D/', '', $cep);
    }

    /**
     * Get state from CEP first digit
     */
    public function getState(?string $cep): ?string
    {
        if (!$this->isValid($cep)) {
            return null;
        }
        $cleanCEP = $this->removeMask($cep);
        $firstDigit = (int)$cleanCEP[0];
        $stateMap = [
            0 => 'SP', 1 => 'SP', 2 => 'RJ', 3 => 'ES', 4 => 'MG', 5 => 'BA',
            6 => 'CE, PE, AL, PB, RN', 7 => 'DF, GO, TO, MT, MS, RO, AC',
            8 => 'PR, SC', 9 => 'RS'
        ];
        return $stateMap[$firstDigit] ?? null;
    }
}