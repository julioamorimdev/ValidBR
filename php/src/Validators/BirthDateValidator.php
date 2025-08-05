<?php

namespace ValidBR\Validators;

class BirthDateValidator
{
    /**
     * Validate birth date (no future dates or people over 130 years old)
     */
    public function isValid(?string $birthDate): bool
    {
        if (empty($birthDate) || !is_string($birthDate)) {
            return false;
        }
        $date = $this->parseDate($birthDate);
        if (!$date) {
            return false;
        }
        $today = new \DateTimeImmutable('today');
        $minDate = $today->modify('-130 years');
        return $date >= $minDate && $date <= $today;
    }

    /**
     * Get age from birth date
     */
    public function getAge(?string $birthDate): ?int
    {
        if (!$this->isValid($birthDate)) {
            return null;
        }
        $date = $this->parseDate($birthDate);
        $today = new \DateTimeImmutable('today');
        $age = $today->format('Y') - $date->format('Y');
        if ($today->format('md') < $date->format('md')) {
            $age--;
        }
        return $age;
    }

    /**
     * Check if person is adult (18+ years old)
     */
    public function isAdult(?string $birthDate): bool
    {
        $age = $this->getAge($birthDate);
        return $age !== null && $age >= 18;
    }

    /**
     * Check if person is elderly (60+ years old)
     */
    public function isElderly(?string $birthDate): bool
    {
        $age = $this->getAge($birthDate);
        return $age !== null && $age >= 60;
    }

    /**
     * Check if person is minor (under 18 years old)
     */
    public function isMinor(?string $birthDate): bool
    {
        $age = $this->getAge($birthDate);
        return $age !== null && $age < 18;
    }

    /**
     * Parse date from various formats
     */
    private function parseDate(?string $dateString): ?\DateTimeImmutable
    {
        if (empty($dateString) || !is_string($dateString)) {
            return null;
        }
        $formats = ['Y-m-d', 'd/m/Y', 'd-m-Y'];
        foreach ($formats as $format) {
            $date = \DateTimeImmutable::createFromFormat($format, $dateString);
            if ($date !== false) {
                return $date;
            }
        }
        return null;
    }
}