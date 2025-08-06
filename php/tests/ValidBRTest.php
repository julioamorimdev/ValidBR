<?php

use PHPUnit\Framework\TestCase;
use ValidBR\ValidBR;

class ValidBRTest extends TestCase
{
    public function testCPF()
    {
        $this->assertTrue(ValidBR::cpf()->isValid('123.456.789-09'));
        $this->assertFalse(ValidBR::cpf()->isValid('123.456.789-10'));
        $cpf = ValidBR::cpf()->generate();
        $this->assertTrue(ValidBR::cpf()->isValid($cpf));
        $masked = ValidBR::cpf()->applyMask('12345678909');
        $this->assertEquals('123.456.789-09', $masked);
        $this->assertEquals('12345678909', ValidBR::cpf()->removeMask($masked));
    }

    public function testCNPJ()
    {
        $this->assertTrue(ValidBR::cnpj()->isValid('12.345.678/0001-95'));
        $this->assertFalse(ValidBR::cnpj()->isValid('12.345.678/0001-96'));
        $cnpj = ValidBR::cnpj()->generate();
        $this->assertTrue(ValidBR::cnpj()->isValid($cnpj));
        $masked = ValidBR::cnpj()->applyMask('12345678000195');
        $this->assertEquals('12.345.678/0001-95', $masked);
        $this->assertEquals('12345678000195', ValidBR::cnpj()->removeMask($masked));
    }

    public function testPhone()
    {
        $this->assertTrue(ValidBR::phone()->isValid('(11) 91234-5678'));
        $this->assertFalse(ValidBR::phone()->isValid('(00) 91234-5678')); // Invalid DDD
        $masked = ValidBR::phone()->applyMask('11912345678');
        $this->assertEquals('(11) 91234-5678', $masked);
        $this->assertEquals('11912345678', ValidBR::phone()->removeMask($masked));
        $this->assertEquals('11', ValidBR::phone()->getDDD('(11) 91234-5678'));
        $this->assertEquals('São Paulo', ValidBR::phone()->getState('11'));
    }

    public function testEmail()
    {
        $this->assertTrue(ValidBR::email()->isValid('user@example.com'));
        $this->assertFalse(ValidBR::email()->isValid('invalid-email'));
        $this->assertEquals('user@example.com', ValidBR::email()->sanitize(' USER@EXAMPLE.COM '));
        $this->assertEquals('example.com', ValidBR::email()->getDomain('user@example.com'));
        $this->assertEquals('user', ValidBR::email()->getUsername('user@example.com'));
    }

    public function testName()
    {
        $this->assertTrue(ValidBR::name()->isValid('João Silva Santos'));
        $this->assertFalse(ValidBR::name()->isValid('João'));
        $this->assertEquals('João Silva', ValidBR::name()->sanitize('  joão   silva  '));
        $this->assertEquals('João', ValidBR::name()->getFirstName('João Silva Santos'));
        $this->assertEquals('Santos', ValidBR::name()->getLastName('João Silva Santos'));
        $this->assertEquals(['Silva'], ValidBR::name()->getMiddleNames('João Silva Santos'));
    }

    public function testBirthDate()
    {
        $this->assertTrue(ValidBR::birthDate()->isValid('1990-05-15'));
        $this->assertFalse(ValidBR::birthDate()->isValid('2030-05-15')); // Future date
        $age = ValidBR::birthDate()->getAge('1990-05-15');
        $this->assertGreaterThan(30, $age);
        $this->assertTrue(ValidBR::birthDate()->isAdult('1990-05-15'));
        $this->assertTrue(ValidBR::birthDate()->isMinor('2010-05-15'));
    }

    public function testCEP()
    {
        $this->assertTrue(ValidBR::cep()->isValid('01234-567'));
        $this->assertFalse(ValidBR::cep()->isValid('123'));
        $masked = ValidBR::cep()->applyMask('01234567');
        $this->assertEquals('01234-567', $masked);
        $this->assertEquals('01234567', ValidBR::cep()->removeMask($masked));
        $this->assertEquals('SP', ValidBR::cep()->getState('01234-567'));
    }

    public function testRG()
    {
        $this->assertTrue(ValidBR::rg()->isValid('12.345.678-9'));
        $this->assertFalse(ValidBR::rg()->isValid('123'));
        $masked = ValidBR::rg()->applyMask('123456789');
        $this->assertEquals('12.345.678-9', $masked);
        $this->assertEquals('123456789', ValidBR::rg()->removeMask($masked));
    }

    public function testIE()
    {
        $this->assertFalse(ValidBR::ie()->isValid('12345678', 'SP'));
        $this->assertTrue(ValidBR::ie()->isStateSupported('SP'));
        $this->assertFalse(ValidBR::ie()->isStateSupported('XX'));
    }

    public function testUtils()
    {
        $this->assertEquals('test string', ValidBR::sanitize('  test   string  '));
        $this->assertEquals('123456', ValidBR::removeNonNumeric('abc123def456'));
        $this->assertEquals('abcdef', ValidBR::removeNonAlphabetic('abc123def!@#'));
    }
}