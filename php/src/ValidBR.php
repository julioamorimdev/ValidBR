<?php

namespace ValidBR;

use ValidBR\Validators\CPFValidator;
use ValidBR\Validators\CNPJValidator;
use ValidBR\Validators\PhoneValidator;
use ValidBR\Validators\EmailValidator;
use ValidBR\Validators\NameValidator;
use ValidBR\Validators\BirthDateValidator;
use ValidBR\Validators\CEPValidator;
use ValidBR\Validators\RGValidator;
use ValidBR\Validators\IEValidator;

class ValidBR
{
    private static $cpf;
    private static $cnpj;
    private static $phone;
    private static $email;
    private static $name;
    private static $birthDate;
    private static $cep;
    private static $rg;
    private static $ie;

    public static function cpf(): CPFValidator
    {
        if (self::$cpf === null) {
            self::$cpf = new CPFValidator();
        }
        return self::$cpf;
    }

    public static function cnpj(): CNPJValidator
    {
        if (self::$cnpj === null) {
            self::$cnpj = new CNPJValidator();
        }
        return self::$cnpj;
    }

    public static function phone(): PhoneValidator
    {
        if (self::$phone === null) {
            self::$phone = new PhoneValidator();
        }
        return self::$phone;
    }

    public static function email(): EmailValidator
    {
        if (self::$email === null) {
            self::$email = new EmailValidator();
        }
        return self::$email;
    }

    public static function name(): NameValidator
    {
        if (self::$name === null) {
            self::$name = new NameValidator();
        }
        return self::$name;
    }

    public static function birthDate(): BirthDateValidator
    {
        if (self::$birthDate === null) {
            self::$birthDate = new BirthDateValidator();
        }
        return self::$birthDate;
    }

    public static function cep(): CEPValidator
    {
        if (self::$cep === null) {
            self::$cep = new CEPValidator();
        }
        return self::$cep;
    }

    public static function rg(): RGValidator
    {
        if (self::$rg === null) {
            self::$rg = new RGValidator();
        }
        return self::$rg;
    }

    public static function ie(): IEValidator
    {
        if (self::$ie === null) {
            self::$ie = new IEValidator();
        }
        return self::$ie;
    }

    /**
     * Sanitize input by removing extra spaces and invalid characters
     */
    public static function sanitize(?string $input): string
    {
        if (empty($input) || !is_string($input)) {
            return '';
        }
        return trim(preg_replace('/\s+/', ' ', $input));
    }

    /**
     * Remove all non-numeric characters from string
     */
    public static function removeNonNumeric(?string $input): string
    {
        if (empty($input) || !is_string($input)) {
            return '';
        }
        return preg_replace('/\D/', '', $input);
    }

    /**
     * Remove all non-alphabetic characters from string
     */
    public static function removeNonAlphabetic(?string $input): string
    {
        if (empty($input) || !is_string($input)) {
            return '';
        }
        return preg_replace('/[^a-zA-ZÀ-ÿ\s]/', '', $input);
    }
} 