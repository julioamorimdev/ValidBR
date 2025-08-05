<?php

namespace ValidBR\Validators;

class NameValidator
{
    /**
     * Validate full name (no numbers or invalid characters)
     */
    public function isValid(?string $name): bool
    {
        if (empty($name) || !is_string($name)) {
            return false;
        }

        $cleanName = $this->sanitize($name);

        // Check if name is too short or too long
        if (strlen($cleanName) < 2 || strlen($cleanName) > 100) {
            return false;
        }

        // Check if name contains only letters, spaces, and common Brazilian name characters
        if (!preg_match('/^[a-zA-ZÀ-ÿ\s]+$/', $cleanName)) {
            return false;
        }

        // Check if name has at least two parts (first name and last name)
        $nameParts = array_filter(explode(' ', $cleanName));
        if (count($nameParts) < 2) {
            return false;
        }

        // Check if each part has at least 2 characters
        foreach ($nameParts as $part) {
            if (strlen($part) < 2) {
                return false;
            }
        }

        return true;
    }

    /**
     * Sanitize name by removing extra spaces and normalizing
     */
    public function sanitize(?string $name): string
    {
        if (empty($name) || !is_string($name)) {
            return '';
        }

        $name = trim($name);
        $name = preg_replace('/\s+/', ' ', $name); // Replace multiple spaces with single space
        $name = preg_replace('/[^\w\sÀ-ÿ]/', '', $name); // Remove special characters except letters and spaces
        $name = ucwords(strtolower($name)); // Capitalize first letter of each word

        return $name;
    }

    /**
     * Get first name
     */
    public function getFirstName(?string $name): ?string
    {
        if (!$this->isValid($name)) {
            return null;
        }

        $cleanName = $this->sanitize($name);
        $nameParts = array_filter(explode(' ', $cleanName));
        return $nameParts[0] ?? null;
    }

    /**
     * Get last name
     */
    public function getLastName(?string $name): ?string
    {
        if (!$this->isValid($name)) {
            return null;
        }

        $cleanName = $this->sanitize($name);
        $nameParts = array_filter(explode(' ', $cleanName));

        if (count($nameParts) < 2) {
            return null;
        }

        return end($nameParts);
    }

    /**
     * Get middle names (names between first and last)
     */
    public function getMiddleNames(?string $name): array
    {
        if (!$this->isValid($name)) {
            return [];
        }

        $cleanName = $this->sanitize($name);
        $nameParts = array_filter(explode(' ', $cleanName));

        if (count($nameParts) <= 2) {
            return [];
        }

        return array_slice($nameParts, 1, -1);
    }

    /**
     * Get initials (first letter of each name part)
     */
    public function getInitials(?string $name): ?string
    {
        if (!$this->isValid($name)) {
            return null;
        }

        $cleanName = $this->sanitize($name);
        $nameParts = array_filter(explode(' ', $cleanName));

        $initials = [];
        foreach ($nameParts as $part) {
            $initials[] = strtoupper($part[0]);
        }

        return implode('.', $initials) . '.';
    }

    /**
     * Check if name contains common Brazilian names
     */
    public function hasCommonBrazilianName(?string $name): bool
    {
        if (!$this->isValid($name)) {
            return false;
        }

        $cleanName = strtolower($this->sanitize($name));
        $nameParts = explode(' ', $cleanName);

        $commonBrazilianNames = [
            'joão', 'josé', 'maria', 'ana', 'pedro', 'carlos', 'paulo', 'lucas',
            'gabriel', 'rafael', 'daniel', 'marcelo', 'bruno', 'eduardo', 'felipe',
            'andré', 'luiz', 'marcos', 'leonardo', 'rodrigo', 'thiago', 'marcelo',
            'silva', 'santos', 'oliveira', 'souza', 'rodrigues', 'ferreira',
            'alves', 'pereira', 'lima', 'gomes', 'ribeiro', 'carvalho', 'lopes',
            'soares', 'fernandes', 'vieira', 'barbosa', 'rocha', 'dias', 'nascimento'
        ];

        foreach ($nameParts as $part) {
            if (in_array($part, $commonBrazilianNames)) {
                return true;
            }
        }

        return false;
    }
} 