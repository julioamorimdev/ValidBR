# ValidBR 🇧🇷

[![npm version](https://badge.fury.io/js/validbr.svg)](https://www.npmjs.com/package/validbr)
[![PyPI version](https://badge.fury.io/py/validbr.svg)](https://pypi.org/project/validbr/)
[![Packagist version](https://img.shields.io/packagist/v/validbr/validbr.svg)](https://packagist.org/packages/validbr/validbr)
[![Build Status](https://github.com/validbr/validbr/workflows/CI/badge.svg)](https://github.com/validbr/validbr/actions)
[![Test Coverage](https://codecov.io/gh/validbr/validbr/branch/main/graph/badge.svg)](https://codecov.io/gh/validbr/validbr)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/validbr/validbr)](https://github.com/validbr/validbr/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/validbr/validbr)](https://github.com/validbr/validbr/network)
[![GitHub issues](https://img.shields.io/github/issues/validbr/validbr)](https://github.com/validbr/validbr/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/validbr/validbr)](https://github.com/validbr/validbr/pulls)

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-✓-green?style=for-the-badge&logo=node.js" alt="Node.js Support">
  <img src="https://img.shields.io/badge/Python-✓-green?style=for-the-badge&logo=python" alt="Python Support">
  <img src="https://img.shields.io/badge/PHP-✓-green?style=for-the-badge&logo=php" alt="PHP Support">
</div>

---

<div align="center">
  <h3>📦 Available on Package Managers</h3>
  
  <a href="https://www.npmjs.com/package/validbr">
    <img src="https://img.shields.io/badge/npm-validbr-blue?style=for-the-badge&logo=npm" alt="npm">
  </a>
  
  <a href="https://pypi.org/project/validbr/">
    <img src="https://img.shields.io/badge/PyPI-validbr-blue?style=for-the-badge&logo=pypi" alt="PyPI">
  </a>
  
  <a href="https://packagist.org/packages/validbr/validbr">
    <img src="https://img.shields.io/badge/Packagist-validbr-blue?style=for-the-badge&logo=composer" alt="Packagist">
  </a>
</div>

---

## 🌟 Live Demo

Test all ValidBR features directly in your browser: **[🚀 Open Interactive Demo](demo.html)**

> **💡 Tip**: Open the `demo.html` file in your browser to test all ValidBR features interactively!

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#-features)
- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [Documentation](#-documentation)
- [Testing](#-testing)
- [Contributing](#-contributing)
- [Support](#-support)
- [License](#-license)

---

## 📖 Overview

**ValidBR** is a comprehensive Brazilian validation library available for **Node.js**, **Python**, and **PHP**. It provides robust validation for Brazilian documents, phone numbers, addresses, and personal information with advanced features like mask application, state identification, and data sanitization.

### 🎯 What ValidBR Validates

- **📄 Documents**: CPF, CNPJ, RG, IE (State Registration)
- **📞 Communication**: Phone numbers, Email addresses
- **📍 Location**: CEP (ZIP codes), DDD codes, State identification
- **👤 Personal**: Full names, Birth dates
- **🛠️ Utilities**: Mask application/removal, Data sanitization

---

## ✨ Features

### 🔐 Document Validation
- ✅ **CPF/CNPJ Validation** - Complete validation with check digits and state identification
- ✅ **RG Validation** - Including check digits for supported states
- ✅ **State Registration (IE) Validation** - By UF with state-specific algorithms

### 📞 Communication Validation
- ✅ **Phone Number Validation** - DDD identification, phone format validation, and state lookup
- ✅ **Email Validation** - Brazilian email format validation with provider detection

### 📍 Location & Address
- ✅ **CEP Validation** - With or without external API consultation (ViaCEP)
- ✅ **DDD Information** - State and city lookup from DDD codes
- ✅ **State Identification** - From CPF/CNPJ first two digits

### 👤 Personal Information
- ✅ **Full Name Validation** - No numbers or invalid characters, Brazilian name detection
- ✅ **Birth Date Validation** - No future dates or people over 130 years old, age calculation

### 🛠️ Utility Functions
- ✅ **Mask Application** - Apply and remove masks (e.g., 000.000.000-00, (11) 99999-9999)
- ✅ **Input Sanitization** - Remove spaces and invalid special characters
- ✅ **Reverse Formatting** - Transform "(11) 91234-5678" to "11912345678"

---

## 📦 Installation

### Node.js (npm)
```bash
npm install validbr
```
📦 **[View on npm](https://www.npmjs.com/package/validbr)**

### Python (pip)
```bash
pip install validbr
```
📦 **[View on PyPI](https://pypi.org/project/validbr/)**

### PHP (Composer)
```bash
composer require validbr/validbr
```
📦 **[View on Packagist](https://packagist.org/packages/validbr/validbr)**

---

## 🚀 Quick Start

### Node.js
```javascript
const ValidBR = require('validbr');

// CPF validation
console.log(ValidBR.cpf.isValid('123.456.789-09')); // true
console.log(ValidBR.cpf.generate()); // Generate valid CPF
console.log(ValidBR.cpf.getState('12345678909')); // 'São Paulo'

// Phone validation
console.log(ValidBR.phone.isValid('(11) 91234-5678')); // true
console.log(ValidBR.phone.getState('11')); // 'São Paulo'

// Apply mask
console.log(ValidBR.cpf.applyMask('12345678909')); // '123.456.789-09'
console.log(ValidBR.phone.applyMask('11912345678')); // '(11) 91234-5678'
```

### Python
```python
from validbr import validbr

# CPF validation
print(validbr.cpf.is_valid('123.456.789-09'))  # True
print(validbr.cpf.generate())  # Generate valid CPF
print(validbr.cpf.get_state('12345678909'))  # 'São Paulo'

# Phone validation
print(validbr.phone.is_valid('(11) 91234-5678'))  # True
print(validbr.phone.get_state('11'))  # 'São Paulo'

# Apply mask
print(validbr.cpf.apply_mask('12345678909'))  # '123.456.789-09'
print(validbr.phone.apply_mask('11912345678'))  # '(11) 91234-5678'
```

### PHP
```php
use ValidBR\ValidBR;

// CPF validation
echo ValidBR::cpf()->isValid('123.456.789-09') ? 'true' : 'false'; // true
echo ValidBR::cpf()->generate(); // Generate valid CPF
echo ValidBR::cpf()->getState('12345678909'); // 'São Paulo'

// Phone validation
echo ValidBR::phone()->isValid('(11) 91234-5678') ? 'true' : 'false'; // true
echo ValidBR::phone()->getState('11'); // 'São Paulo'

// Apply mask
echo ValidBR::cpf()->applyMask('12345678909'); // '123.456.789-09'
echo ValidBR::phone()->applyMask('11912345678'); // '(11) 91234-5678'
```

---

## 📚 Documentation

### CPF Validation
```javascript
// Node.js
ValidBR.cpf.isValid('123.456.789-09');        // true/false
ValidBR.cpf.generate();                        // Generate valid CPF
ValidBR.cpf.applyMask('12345678909');         // '123.456.789-09'
ValidBR.cpf.removeMask('123.456.789-09');     // '12345678909'
ValidBR.cpf.getState('12345678909');          // 'São Paulo'
```

### CNPJ Validation
```javascript
// Node.js
ValidBR.cnpj.isValid('12.345.678/0001-95');   // true/false
ValidBR.cnpj.generate();                       // Generate valid CNPJ
ValidBR.cnpj.applyMask('12345678000195');     // '12.345.678/0001-95'
ValidBR.cnpj.removeMask('12.345.678/0001-95'); // '12345678000195'
ValidBR.cnpj.getState('12345678000195');      // 'São Paulo'
```

### Phone Validation
```javascript
// Node.js
ValidBR.phone.isValid('(11) 91234-5678');     // true/false
ValidBR.phone.getDDD('(11) 91234-5678');      // '11'
ValidBR.phone.getState('11');                 // 'São Paulo'
ValidBR.phone.applyMask('11912345678');       // '(11) 91234-5678'
ValidBR.phone.removeMask('(11) 91234-5678');  // '11912345678'
ValidBR.phone.getValidDDDs();                 // Array of valid DDDs
```

### Email Validation
```javascript
// Node.js
ValidBR.email.isValid('user@example.com');    // true/false
ValidBR.email.sanitize(' user@example.com '); // 'user@example.com'
ValidBR.email.getDomain('user@example.com');  // 'example.com'
ValidBR.email.getUsername('user@example.com'); // 'user'
ValidBR.email.isBrazilianProvider('user@uol.com.br'); // true
```

### Name Validation
```javascript
// Node.js
ValidBR.fullName.isValid('João Silva Santos');    // true/false
ValidBR.fullName.sanitize('João Silva Santos  '); // 'João Silva Santos'
ValidBR.fullName.getFirstName('João Silva Santos'); // 'João'
ValidBR.fullName.getLastName('João Silva Santos');  // 'Santos'
ValidBR.fullName.getInitials('João Silva Santos');  // 'JSS'
ValidBR.fullName.hasCommonBrazilianName('João');   // true
```

### Birth Date Validation
```javascript
// Node.js
ValidBR.birthDate.isValid('1990-05-15');      // true/false
ValidBR.birthDate.getAge('1990-05-15');       // Current age
ValidBR.birthDate.isAdult('1990-05-15');      // true/false
ValidBR.birthDate.isElderly('1940-05-15');    // true/false
ValidBR.birthDate.isMinor('2010-05-15');      // true/false
ValidBR.birthDate.format('1990-05-15', 'DD/MM/YYYY'); // '15/05/1990'
ValidBR.birthDate.getZodiacSign('1990-05-15'); // 'Touro'
```

### CEP Validation
```javascript
// Node.js
ValidBR.cep.isValid('01234-567');             // true/false
ValidBR.cep.getInfo('01234-567');             // Get address info (async)
ValidBR.cep.applyMask('01234567');            // '01234-567'
ValidBR.cep.removeMask('01234-567');          // '01234567'
ValidBR.cep.getState('01234567');             // 'São Paulo'
ValidBR.cep.isFromSaoPaulo('01234567');       // true/false
ValidBR.cep.getRegion('01234567');            // 'Sudeste'
```

### RG Validation
```javascript
// Node.js
ValidBR.rg.isValid('12.345.678-9', 'SP');     // true/false (state required)
ValidBR.rg.applyMask('123456789');            // '12.345.678-9'
ValidBR.rg.removeMask('12.345.678-9');        // '123456789'
ValidBR.rg.generate('SP');                    // Generate valid RG for SP
ValidBR.rg.getValidStates();                  // Array of supported states
```

### State Registration (IE) Validation
```javascript
// Node.js
ValidBR.ie.isValid('123.456.789', 'SP');      // true/false
ValidBR.ie.applyMask('123456789', 'SP');      // '123.456.789'
ValidBR.ie.removeMask('123.456.789');         // '123456789'
ValidBR.ie.generate('SP');                    // Generate valid IE for SP
ValidBR.ie.getValidStates();                  // Array of supported states
```

### Utility Functions
```javascript
// Node.js
ValidBR.sanitize('  test@example.com  ');     // 'test@example.com'
ValidBR.removeNonNumeric('abc123def456');     // '123456'
ValidBR.removeNonAlphabetic('João123Silva');  // 'JoãoSilva'
```

---

## 🧪 Testing

### Run All Tests with Docker
```bash
# Navigate to docker directory
cd docker

# Run all tests
docker-compose up --build

# Run tests for specific language
docker-compose run nodejs npm test
docker-compose run python python -m pytest
docker-compose run php composer test
```

### Run Tests Individually
```bash
# Node.js
cd nodejs
npm install
npm test

# Python
cd python
pip install -e .
python -m pytest

# PHP
cd php
composer install
composer test
```

### Test Coverage
```bash
# Node.js
npm run test:coverage

# Python
python -m pytest --cov=validbr

# PHP
composer test:coverage
```

---

## 🎯 Browser Testing

Open `demo.html` in your browser to test all ValidBR features interactively. The demo includes:

- Real-time validation for all document types
- Mask application and removal
- State and region identification
- Age calculation and zodiac signs
- CEP information lookup
- Input sanitization examples

---

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) for details on:

- Code of Conduct
- How to report bugs
- How to suggest features
- How to submit pull requests
- Development setup

### Development Setup

1. Fork the repository
2. Clone your fork
3. Create a feature branch
4. Make your changes
5. Add tests for new functionality
6. Run all tests: `docker-compose up --build`
7. Submit a pull request

### Quick Links
- 📋 **[Contributing Guide](CONTRIBUTING.md)**
- 🐛 **[Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.md)**
- 💡 **[Feature Request Template](.github/ISSUE_TEMPLATE/feature_request.md)**
- 🔄 **[Pull Request Template](.github/pull_request_template.md)**

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🆘 Support

- 📧 **Email**: julio@grupojpc.com.br
- 🐛 **Issues**: [GitHub Issues](https://github.com/validbr/validbr/issues)
- 📖 **Documentation**: [https://docs.validbr.com](https://docs.validbr.com)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/validbr/validbr/discussions)
- 📱 **Discord**: [Join our community](https://discord.gg/validbr)

---

## 📈 Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history and changes.

---

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=validbr/validbr&type=Date)](https://star-history.com/#validbr/validbr&Date)

---

## 📊 Statistics

![GitHub stars](https://img.shields.io/github/stars/validbr/validbr)
![GitHub forks](https://img.shields.io/github/forks/validbr/validbr)
![GitHub issues](https://img.shields.io/github/issues/validbr/validbr)
![GitHub pull requests](https://img.shields.io/github/issues-pr/validbr/validbr)

---

## 🚀 Publishing

For information on how to publish ValidBR to package repositories, see the [Publishing Guide](PUBLISH_GUIDE.md).

### Publication Status
- [x] **NPM**: Ready for publication
- [x] **PyPI**: Ready for publication  
- [x] **Packagist**: Ready for publication

### Publishing Commands

#### Using Automation Script (Recommended)
```bash
# Run all tests
./publish.sh test

# Publish to NPM
./publish.sh npm

# Publish to PyPI
./publish.sh pypi

# Check Packagist configuration
./publish.sh packagist

# Complete process (tests + publishing)
./publish.sh all
```

#### Manual Commands
```bash
# NPM
cd nodejs && npm publish

# PyPI
cd python && python setup.py sdist bdist_wheel && twine upload dist/*

# Packagist
# Connect Git repository to Packagist.org
```

---

<div align="center">
  <h3>🇧🇷 Versão em Português</h3>
</div>

---

## 📖 Visão Geral

**ValidBR** é uma biblioteca abrangente de validação brasileira disponível para **Node.js**, **Python** e **PHP**. Ela fornece validação robusta para documentos brasileiros, números de telefone, endereços e informações pessoais com recursos avançados como aplicação de máscaras, identificação de estado e sanitização de dados.

### 🎯 O que o ValidBR Valida

- **📄 Documentos**: CPF, CNPJ, RG, IE (Inscrição Estadual)
- **📞 Comunicação**: Números de telefone, Endereços de email
- **📍 Localização**: CEP, Códigos DDD, Identificação de estado
- **👤 Pessoal**: Nomes completos, Datas de nascimento
- **🛠️ Utilitários**: Aplicação/remoção de máscaras, Sanitização de dados

---

## ✨ Funcionalidades

### 🔐 Validação de Documentos
- ✅ **Validação CPF/CNPJ** - Validação completa com dígitos verificadores e identificação de estado
- ✅ **Validação RG** - Incluindo dígitos verificadores para estados suportados
- ✅ **Validação IE (Inscrição Estadual)** - Por UF com algoritmos específicos de cada estado

### 📞 Validação de Comunicação
- ✅ **Validação de Telefone** - Identificação de DDD, validação de formato e busca de estado
- ✅ **Validação de Email** - Validação de formato brasileiro com detecção de provedor

### 📍 Localização e Endereço
- ✅ **Validação de CEP** - Com ou sem consulta à API externa (ViaCEP)
- ✅ **Informações de DDD** - Busca de estado e cidade a partir de códigos DDD
- ✅ **Identificação de Estado** - A partir dos dois primeiros dígitos do CPF/CNPJ

### 👤 Informações Pessoais
- ✅ **Validação de Nome Completo** - Sem números ou caracteres inválidos, detecção de nomes brasileiros
- ✅ **Validação de Data de Nascimento** - Sem datas futuras ou pessoas com mais de 130 anos, cálculo de idade

### 🛠️ Funções Utilitárias
- ✅ **Aplicação de Máscaras** - Aplicar e remover máscaras (ex: 000.000.000-00, (11) 99999-9999)
- ✅ **Sanitização de Entrada** - Remover espaços e caracteres especiais inválidos
- ✅ **Formatação Reversa** - Transformar "(11) 91234-5678" em "11912345678"

---

## 📦 Instalação

### Node.js (npm)
```bash
npm install validbr
```
📦 **[Ver no npm](https://www.npmjs.com/package/validbr)**

### Python (pip)
```bash
pip install validbr
```
📦 **[Ver no PyPI](https://pypi.org/project/validbr/)**

### PHP (Composer)
```bash
composer require validbr/validbr
```
📦 **[Ver no Packagist](https://packagist.org/packages/validbr/validbr)**

---

## 🚀 Início Rápido

### Node.js
```javascript
const ValidBR = require('validbr');

// Validação de CPF
console.log(ValidBR.cpf.isValid('123.456.789-09')); // true
console.log(ValidBR.cpf.generate()); // Gerar CPF válido
console.log(ValidBR.cpf.getState('12345678909')); // 'São Paulo'

// Validação de telefone
console.log(ValidBR.phone.isValid('(11) 91234-5678')); // true
console.log(ValidBR.phone.getState('11')); // 'São Paulo'

// Aplicar máscara
console.log(ValidBR.cpf.applyMask('12345678909')); // '123.456.789-09'
console.log(ValidBR.phone.applyMask('11912345678')); // '(11) 91234-5678'
```

### Python
```python
from validbr import ValidBR

# Validação de CPF
print(ValidBR.cpf.is_valid('123.456.789-09'))  # True
print(ValidBR.cpf.generate())  # Gerar CPF válido
print(ValidBR.cpf.get_state('12345678909')); // 'São Paulo'

# Validação de telefone
print(ValidBR.phone.is_valid('(11) 91234-5678')); // true
print(ValidBR.phone.get_state('11')); // 'São Paulo'

# Aplicar máscara
print(ValidBR.cpf.apply_mask('12345678909')); // '123.456.789-09'
print(ValidBR.phone.apply_mask('11912345678')); // '(11) 91234-5678'
```

### PHP
```php
use ValidBR\ValidBR;

// Validação de CPF
echo ValidBR::cpf()->isValid('123.456.789-09') ? 'true' : 'false'; // true
echo ValidBR::cpf()->generate(); // Gerar CPF válido
echo ValidBR::cpf()->getState('12345678909'); // 'São Paulo'

// Validação de telefone
echo ValidBR::phone()->isValid('(11) 91234-5678') ? 'true' : 'false'; // true
echo ValidBR::phone()->getState('11'); // 'São Paulo'

# Aplicar máscara
echo ValidBR::cpf()->applyMask('12345678909'); // '123.456.789-09'
echo ValidBR::phone()->applyMask('11912345678'); // '(11) 91234-5678'
```

---

## 🤝 Como Contribuir

Aceitamos contribuições! Por favor, leia nosso [Guia de Contribuição](CONTRIBUTING.md) para detalhes sobre:

- Código de Conduta
- Como reportar bugs
- Como sugerir funcionalidades
- Como enviar pull requests
- Configuração de desenvolvimento

### Configuração de Desenvolvimento

1. Faça um fork do repositório
2. Clone seu fork
3. Crie uma branch para sua funcionalidade
4. Faça suas alterações
5. Adicione testes para nova funcionalidade
6. Execute todos os testes: `docker-compose up --build`
7. Envie um pull request

### Links Rápidos
- 📋 **[Guia de Contribuição](CONTRIBUTING.md)**
- 🐛 **[Template de Bug Report](.github/ISSUE_TEMPLATE/bug_report.md)**
- 💡 **[Template de Feature Request](.github/ISSUE_TEMPLATE/feature_request.md)**
- 🔄 **[Template de Pull Request](.github/pull_request_template.md)**

---

## 🆘 Suporte

- 📧 **Email**: julio@grupojpc.com.br
- 🐛 **Issues**: [GitHub Issues](https://github.com/validbr/validbr/issues)
- 📖 **Documentação**: [https://docs.validbr.com](https://docs.validbr.com)
- 💬 **Discussões**: [GitHub Discussions](https://github.com/validbr/validbr/discussions)
- 📱 **Discord**: [Entre em nossa comunidade](https://discord.gg/validbr)

---

<div align="center">
  <h3>⭐ Se este projeto te ajudou, considere dar uma estrela!</h3>
  
  <a href="https://github.com/validbr/validbr/stargazers">
    <img src="https://img.shields.io/github/stars/validbr/validbr?style=social" alt="GitHub stars">
  </a>
  
  <a href="https://github.com/validbr/validbr/network">
    <img src="https://img.shields.io/github/forks/validbr/validbr?style=social" alt="GitHub forks">
  </a>
</div> 