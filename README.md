# ValidBR

A comprehensive Brazilian validation library for Node.js, Python, and PHP.

[![npm version](https://badge.fury.io/js/validbr.svg)](https://badge.fury.io/js/validbr)
[![PyPI version](https://badge.fury.io/py/validbr.svg)](https://badge.fury.io/py/validbr)
[![Packagist version](https://img.shields.io/packagist/v/validbr/validbr.svg)](https://packagist.org/packages/validbr/validbr)
[![Build Status](https://github.com/validbr/validbr/workflows/CI/badge.svg)](https://github.com/validbr/validbr/actions)
[![Test Coverage](https://codecov.io/gh/validbr/validbr/branch/main/graph/badge.svg)](https://codecov.io/gh/validbr/validbr)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 Live Demo

Test all ValidBR features directly in your browser: **[Open Demo](demo.html)**

## ✨ Features

✅ **CPF/CNPJ Validation** - Complete validation with check digits and state identification

📞 **Phone Number Validation** - DDD identification, phone format validation, and state lookup

✉️ **Email Validation** - Brazilian email format validation with provider detection

🎭 **Mask Application** - Apply and remove masks (e.g., 000.000.000-00, (11) 99999-9999)

👤 **Full Name Validation** - No numbers or invalid characters, Brazilian name detection

📅 **Birth Date Validation** - No future dates or people over 130 years old, age calculation

📮 **CEP Validation** - With or without external API consultation (ViaCEP)

🆔 **RG Validation** - Including check digits for some states

🗺️ **DDD Information** - State and city lookup from DDD codes

📍 **CEP Information** - Optional API consultation for address details

🏛️ **State Identification** - From CPF/CNPJ first two digits

📋 **State Registration (IE) Validation** - By UF with state-specific algorithms

🧹 **Input Sanitization** - Remove spaces and invalid special characters

🔄 **Reverse Formatting** - Transform "(11) 91234-5678" to "11912345678"

## 📦 Installation

### Node.js (npm)
```bash
npm install validbr
```

### Python (pip)
```bash
pip install validbr
```

### PHP (Composer)
```bash
composer require validbr/validbr
```

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
from validbr import ValidBR

# CPF validation
print(ValidBR.cpf.is_valid('123.456.789-09'))  # True
print(ValidBR.cpf.generate())  # Generate valid CPF
print(ValidBR.cpf.get_state('12345678909'))  # 'São Paulo'

# Phone validation
print(ValidBR.phone.is_valid('(11) 91234-5678'))  # True
print(ValidBR.phone.get_state('11'))  # 'São Paulo'

# Apply mask
print(ValidBR.cpf.apply_mask('12345678909'))  # '123.456.789-09'
print(ValidBR.phone.apply_mask('11912345678'))  # '(11) 91234-5678'
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
ValidBR.name.isValid('João Silva Santos');    // true/false
ValidBR.name.sanitize('João Silva Santos  '); // 'João Silva Santos'
ValidBR.name.getFirstName('João Silva Santos'); // 'João'
ValidBR.name.getLastName('João Silva Santos');  // 'Santos'
ValidBR.name.getInitials('João Silva Santos');  // 'JSS'
ValidBR.name.hasCommonBrazilianName('João');   // true
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

## 🎯 Browser Testing

Open `demo.html` in your browser to test all ValidBR features interactively. The demo includes:

- Real-time validation for all document types
- Mask application and removal
- State and region identification
- Age calculation and zodiac signs
- CEP information lookup
- Input sanitization examples

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

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📧 Email: support@validbr.com
- 🐛 Issues: [GitHub Issues](https://github.com/validbr/validbr/issues)
- 📖 Documentation: [https://docs.validbr.com](https://docs.validbr.com)
- 💬 Discussions: [GitHub Discussions](https://github.com/validbr/validbr/discussions)

## 📈 Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history and changes.

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=validbr/validbr&type=Date)](https://star-history.com/#validbr/validbr&Date)

## 📊 Statistics

![GitHub stars](https://img.shields.io/github/stars/validbr/validbr)
![GitHub forks](https://img.shields.io/github/forks/validbr/validbr)
![GitHub issues](https://img.shields.io/github/issues/validbr/validbr)
![GitHub pull requests](https://img.shields.io/github/issues-pr/validbr/validbr) 