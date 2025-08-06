# Changelog

All notable changes to ValidBR will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial project structure
- Comprehensive documentation
- GitHub templates and workflows
- Security policy and code of conduct

### Changed
- Improved README with bilingual support
- Enhanced contributing guidelines

### Fixed
- Documentation formatting issues

## [1.0.0] - 2024-01-15

### Added
- **Core Validation Features**
  - CPF validation with check digits and state identification
  - CNPJ validation with check digits and state identification
  - Phone number validation with DDD identification
  - Email validation with Brazilian provider detection
  - Full name validation with Brazilian name detection
  - Birth date validation with age calculation
  - CEP validation with optional ViaCEP API integration
  - RG validation with state-specific check digits
  - State Registration (IE) validation with state-specific algorithms

- **Utility Functions**
  - Mask application and removal for all document types
  - Input sanitization and formatting
  - State and region identification
  - DDD information lookup
  - Age calculation and zodiac sign detection

- **Multi-Language Support**
  - Node.js/TypeScript implementation
  - Python implementation
  - PHP implementation

- **Testing & Quality**
  - Comprehensive test suite for all validators
  - Docker-based testing environment
  - Code coverage reporting
  - Linting and code style enforcement

- **Documentation**
  - Interactive demo (demo.html)
  - API documentation
  - Installation guides
  - Usage examples

### Security
- Input validation and sanitization
- No external dependencies for core functionality
- Type safety (TypeScript support)

### Performance
- Optimized validation algorithms
- Minimal memory footprint
- Fast execution times

---

# Histórico de Versões

Todas as mudanças notáveis no ValidBR serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
e este projeto segue [Versionamento Semântico](https://semver.org/spec/v2.0.0.html).

## [Não Lançado]

### Adicionado
- Estrutura inicial do projeto
- Documentação abrangente
- Templates e workflows do GitHub
- Política de segurança e código de conduta

### Alterado
- README melhorado com suporte bilíngue
- Diretrizes de contribuição aprimoradas

### Corrigido
- Problemas de formatação da documentação

## [1.0.0] - 2024-01-15

### Adicionado
- **Funcionalidades Principais de Validação**
  - Validação de CPF com dígitos verificadores e identificação de estado
  - Validação de CNPJ com dígitos verificadores e identificação de estado
  - Validação de telefone com identificação de DDD
  - Validação de email com detecção de provedores brasileiros
  - Validação de nome completo com detecção de nomes brasileiros
  - Validação de data de nascimento com cálculo de idade
  - Validação de CEP com integração opcional da API ViaCEP
  - Validação de RG com dígitos verificadores específicos por estado
  - Validação de Inscrição Estadual (IE) com algoritmos específicos por estado

- **Funções Utilitárias**
  - Aplicação e remoção de máscaras para todos os tipos de documento
  - Sanitização e formatação de entrada
  - Identificação de estado e região
  - Consulta de informações de DDD
  - Cálculo de idade e detecção de signo do zodíaco

- **Suporte Multi-Linguagem**
  - Implementação Node.js/TypeScript
  - Implementação Python
  - Implementação PHP

- **Testes e Qualidade**
  - Suite de testes abrangente para todos os validadores
  - Ambiente de teste baseado em Docker
  - Relatórios de cobertura de código
  - Linting e aplicação de estilo de código

- **Documentação**
  - Demo interativo (demo.html)
  - Documentação da API
  - Guias de instalação
  - Exemplos de uso

### Segurança
- Validação e sanitização de entrada
- Sem dependências externas para funcionalidade principal
- Segurança de tipos (suporte TypeScript)

### Performance
- Algoritmos de validação otimizados
- Pegada de memória mínima
- Tempos de execução rápidos 