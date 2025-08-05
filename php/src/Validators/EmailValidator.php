<?php

namespace ValidBR\Validators;

class EmailValidator
{
    /**
     * Validate email format
     */
    public function isValid(?string $email): bool
    {
        if (empty($email) || !is_string($email)) {
            return false;
        }

        $cleanEmail = $this->sanitize($email);

        // Basic email validation
        if (!filter_var($cleanEmail, FILTER_VALIDATE_EMAIL)) {
            return false;
        }

        // Check for common Brazilian email providers
        $domain = $this->getDomain($cleanEmail);
        if (empty($domain)) {
            return false;
        }

        // Check if domain has valid TLD
        $validTLDs = ['.com', '.com.br', '.br', '.net', '.org', '.edu', '.gov'];
        $hasValidTLD = false;
        foreach ($validTLDs as $tld) {
            if (str_ends_with($domain, $tld)) {
                $hasValidTLD = true;
                break;
            }
        }

        return $hasValidTLD;
    }

    /**
     * Sanitize email by removing extra spaces
     */
    public function sanitize(?string $email): string
    {
        if (empty($email) || !is_string($email)) {
            return '';
        }
        return strtolower(trim($email));
    }

    /**
     * Extract domain from email
     */
    public function getDomain(?string $email): ?string
    {
        if (!$this->isValid($email)) {
            return null;
        }

        $cleanEmail = $this->sanitize($email);
        $parts = explode('@', $cleanEmail);
        return $parts[1] ?? null;
    }

    /**
     * Extract username from email
     */
    public function getUsername(?string $email): ?string
    {
        if (!$this->isValid($email)) {
            return null;
        }

        $cleanEmail = $this->sanitize($email);
        $parts = explode('@', $cleanEmail);
        return $parts[0] ?? null;
    }

    /**
     * Check if email is from a common Brazilian provider
     */
    public function isBrazilianProvider(?string $email): bool
    {
        if (!$this->isValid($email)) {
            return false;
        }

        $domain = $this->getDomain($email);
        if (empty($domain)) {
            return false;
        }

        $brazilianProviders = [
            'gmail.com',
            'hotmail.com',
            'outlook.com',
            'yahoo.com',
            'uol.com.br',
            'bol.com.br',
            'ig.com.br',
            'terra.com.br',
            'globo.com',
            'oi.com.br'
        ];

        return in_array($domain, $brazilianProviders);
    }
} 