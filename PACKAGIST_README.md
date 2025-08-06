# ValidBR - Biblioteca de Validação Brasileira para PHP

## Instalação

```bash
composer require validbr/validbr
```

## Uso

```php
<?php

require_once 'vendor/autoload.php';

use ValidBR\Validators\CPFValidator;
use ValidBR\Validators\CNPJValidator;

$cpfValidator = new CPFValidator();
$cnpjValidator = new CNPJValidator();

// Validar CPF
$cpf = "123.456.789-09";
if ($cpfValidator->isValid($cpf)) {
    echo "CPF válido!";
}

// Validar CNPJ
$cnpj = "12.345.678/0001-95";
if ($cnpjValidator->isValid($cnpj)) {
    echo "CNPJ válido!";
}
```

## Validadores Disponíveis

- **CPFValidator**: Validação de CPF
- **CNPJValidator**: Validação de CNPJ
- **CEPValidator**: Validação de CEP
- **EmailValidator**: Validação de email
- **PhoneValidator**: Validação de telefone
- **RGValidator**: Validação de RG
- **IEValidator**: Validação de Inscrição Estadual
- **BirthDateValidator**: Validação de data de nascimento
- **NameValidator**: Validação de nome

## Documentação Completa

Para mais informações, visite: https://github.com/validbr/validbr 