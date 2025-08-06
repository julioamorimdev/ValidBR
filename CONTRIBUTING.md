# Contributing to ValidBR 🤝

<div align="center">
  <h3>Thank you for your interest in contributing to ValidBR!</h3>
  <p>We welcome contributions from the community and appreciate your help in making ValidBR better.</p>
</div>

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Code Style](#code-style)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Feature Requests](#feature-requests)
- [Questions & Support](#questions--support)

---

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

### Our Standards

- **Be respectful and inclusive** - We welcome contributors from all backgrounds
- **Be collaborative** - Work together to improve the project
- **Be constructive** - Provide helpful feedback and suggestions
- **Be patient** - Remember that we're all volunteers with limited time

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at julio@grupojpc.com.br.

---

## 🚀 How to Contribute

There are many ways to contribute to ValidBR:

### 🐛 Bug Reports
- Report bugs using our [Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.md)
- Include steps to reproduce, expected behavior, and actual behavior
- Provide environment details (OS, language version, etc.)

### 💡 Feature Requests
- Suggest new features using our [Feature Request Template](.github/ISSUE_TEMPLATE/feature_request.md)
- Explain the use case and benefits
- Consider if the feature fits ValidBR's scope

### 🔧 Code Contributions
- Fix bugs or implement features
- Improve documentation
- Add tests
- Optimize performance

### 📚 Documentation
- Improve README files
- Add code examples
- Update API documentation
- Translate documentation

### 🧪 Testing
- Add test cases
- Improve test coverage
- Report test failures

---

## ⚙️ Development Setup

### Prerequisites

- **Node.js** (v14 or higher)
- **Python** (3.7 or higher)
- **PHP** (7.4 or higher)
- **Docker** (optional, for running all tests)

### Quick Start

1. **Fork the repository**
   ```bash
   # Clone your fork
   git clone https://github.com/YOUR_USERNAME/validbr.git
   cd validbr
   ```

2. **Set up development environment**
   ```bash
   # Install dependencies for all languages
   cd nodejs && npm install
   cd ../python && pip install -e .
   cd ../php && composer install
   ```

3. **Run tests**
   ```bash
   # Run all tests with Docker (recommended)
   cd docker
   docker-compose up --build
   
   # Or run tests individually
   cd nodejs && npm test
   cd ../python && python -m pytest
   cd ../php && composer test
   ```

### Language-Specific Setup

#### Node.js
```bash
cd nodejs
npm install
npm run build
npm test
```

#### Python
```bash
cd python
pip install -e .
python -m pytest
```

#### PHP
```bash
cd php
composer install
composer test
```

---

## 🎨 Code Style

We follow language-specific coding standards to maintain code quality and consistency.

### Node.js
- Use **ESLint** and **Prettier** for code formatting
- Follow **TypeScript** best practices
- Use **JSDoc** for documentation
- Run before submitting: `npm run lint && npm run lint:fix`

### Python
- Use **Black** for code formatting
- Follow **PEP 8** style guidelines
- Use **Flake8** for linting
- Use **type hints** where appropriate
- Run before submitting: `black . && flake8 .`

### PHP
- Use **PHP_CodeSniffer** for code formatting
- Follow **PSR-12** coding standards
- Use **PHPStan** for static analysis
- Use **PHPDoc** for documentation
- Run before submitting: `composer cs-check && composer phpstan`

### General Guidelines

- **Write clear, readable code**
- **Add comments for complex logic**
- **Use meaningful variable and function names**
- **Keep functions small and focused**
- **Add tests for new functionality**

---

## 🧪 Testing

### Running Tests

```bash
# Run all tests
docker-compose up --build

# Run specific language tests
docker-compose run nodejs npm test
docker-compose run python python -m pytest
docker-compose run php composer test
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

### Writing Tests

- **Test all new functionality**
- **Include edge cases**
- **Test error conditions**
- **Maintain high test coverage**
- **Use descriptive test names**

### Test Structure

```javascript
// Node.js example
describe('CPF Validation', () => {
  it('should validate a valid CPF', () => {
    expect(ValidBR.cpf.isValid('123.456.789-09')).toBe(true);
  });

  it('should reject an invalid CPF', () => {
    expect(ValidBR.cpf.isValid('123.456.789-10')).toBe(false);
  });
});
```

---

## 🔄 Pull Request Process

### Before Submitting

1. **Ensure your branch is up to date**
   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. **Run all tests**
   ```bash
   docker-compose up --build
   ```

3. **Check code style**
   ```bash
   # Node.js
   npm run lint
   
   # Python
   black . && flake8 .
   
   # PHP
   composer cs-check
   ```

4. **Update documentation** if needed

### Pull Request Guidelines

- **Use descriptive titles** - "Add CPF validation" not "Fix bug"
- **Provide clear descriptions** - Explain what and why, not how
- **Reference related issues** - Use "Fixes #123" or "Closes #123"
- **Include tests** - All new code should have tests
- **Update documentation** - If adding new features
- **Keep PRs small** - Focus on one feature or fix per PR

### Pull Request Template

We use a [Pull Request Template](.github/pull_request_template.md) to ensure all necessary information is included.

---

## 🐛 Reporting Bugs

### Before Reporting

1. **Check existing issues** - Your bug might already be reported
2. **Try the latest version** - The bug might be fixed
3. **Reproduce the issue** - Make sure it's reproducible

### Bug Report Template

Use our [Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.md) which includes:

- **Clear description** of the problem
- **Steps to reproduce** the issue
- **Expected behavior** vs actual behavior
- **Environment details** (OS, language version, etc.)
- **Code examples** if applicable
- **Screenshots** if relevant

### Example Bug Report

```
**Bug Description**
CPF validation fails for valid CPF numbers starting with 000.

**Steps to Reproduce**
1. Install ValidBR: npm install validbr
2. Run: ValidBR.cpf.isValid('000.000.000-00')
3. Expected: true, Actual: false

**Environment**
- OS: macOS 12.0
- Node.js: 16.13.0
- ValidBR: 1.0.0

**Additional Information**
This affects all CPF numbers starting with 000.
```

---

## 💡 Feature Requests

### Before Requesting

1. **Check existing features** - The feature might already exist
2. **Consider the scope** - Does it fit ValidBR's purpose?
3. **Think about implementation** - Is it feasible?

### Feature Request Template

Use our [Feature Request Template](.github/ISSUE_TEMPLATE/feature_request.md) which includes:

- **Clear description** of the feature
- **Use case** and benefits
- **Proposed implementation** (if applicable)
- **Alternatives considered**

### Example Feature Request

```
**Feature Description**
Add support for validating Brazilian driver's license numbers.

**Use Case**
Many Brazilian applications need to validate driver's license numbers for user registration and verification.

**Benefits**
- Complete Brazilian document validation coverage
- Useful for automotive and transportation applications
- Follows existing validation patterns

**Proposed Implementation**
- Add `ValidBR.license` module
- Support all Brazilian states
- Include mask application/removal
- Add tests and documentation
```

---

## ❓ Questions & Support

### Getting Help

- **GitHub Issues** - For bugs and feature requests
- **GitHub Discussions** - For questions and general discussion
- **Email** - julio@grupojpc.com.br for private matters
- **Discord** - Join our community for real-time chat

### Before Asking

1. **Check the documentation** - Your question might be answered there
2. **Search existing issues** - Similar questions might have been asked
3. **Try to solve it yourself** - Learning is part of the process

### Asking Good Questions

- **Be specific** - Include code examples and error messages
- **Provide context** - Explain what you're trying to achieve
- **Show effort** - Demonstrate what you've already tried
- **Be patient** - We're all volunteers with limited time

---

## 🏆 Recognition

### Contributors

We recognize all contributors in our [Contributors](https://github.com/validbr/validbr/graphs/contributors) page.

### Types of Contributions

- **Code** - Bug fixes, features, improvements
- **Documentation** - README, guides, examples
- **Testing** - Test cases, bug reports
- **Community** - Support, feedback, promotion

### Hall of Fame

Special recognition for significant contributions:

- **Core Contributors** - Regular contributors with major impact
- **Documentation Heroes** - Outstanding documentation contributions
- **Bug Hunters** - Excellent bug reports and fixes
- **Community Champions** - Outstanding community support

---

## 📄 License

By contributing to ValidBR, you agree that your contributions will be licensed under the MIT License.

---

<div align="center">
  <h3>🇧🇷 Guia de Contribuição em Português</h3>
</div>

---

## 📋 Índice

- [Código de Conduta](#código-de-conduta)
- [Como Contribuir](#como-contribuir)
- [Configuração de Desenvolvimento](#configuração-de-desenvolvimento)
- [Estilo de Código](#estilo-de-código)
- [Testes](#testes)
- [Processo de Pull Request](#processo-de-pull-request)
- [Reportando Bugs](#reportando-bugs)
- [Solicitações de Funcionalidades](#solicitações-de-funcionalidades)
- [Perguntas e Suporte](#perguntas-e-suporte)

---

## 📜 Código de Conduta

Este projeto e todos os participantes são regidos pelo nosso Código de Conduta. Ao participar, você deve seguir este código.

### Nossos Padrões

- **Seja respeitoso e inclusivo** - Acolhemos contribuidores de todas as origens
- **Seja colaborativo** - Trabalhe junto para melhorar o projeto
- **Seja construtivo** - Forneça feedback e sugestões úteis
- **Seja paciente** - Lembre-se de que somos todos voluntários com tempo limitado

### Aplicação

Casos de comportamento abusivo, assédio ou inaceitável podem ser reportados entrando em contato com a equipe do projeto em julio@grupojpc.com.br.

---

## 🚀 Como Contribuir

Existem muitas maneiras de contribuir para o ValidBR:

### 🐛 Reportes de Bugs
- Reporte bugs usando nosso [Template de Bug Report](.github/ISSUE_TEMPLATE/bug_report.md)
- Inclua passos para reproduzir, comportamento esperado e comportamento atual
- Forneça detalhes do ambiente (SO, versão da linguagem, etc.)

### 💡 Solicitações de Funcionalidades
- Sugira novas funcionalidades usando nosso [Template de Feature Request](.github/ISSUE_TEMPLATE/feature_request.md)
- Explique o caso de uso e benefícios
- Considere se a funcionalidade se encaixa no escopo do ValidBR

### 🔧 Contribuições de Código
- Corrija bugs ou implemente funcionalidades
- Melhore a documentação
- Adicione testes
- Otimize performance

### 📚 Documentação
- Melhore arquivos README
- Adicione exemplos de código
- Atualize documentação da API
- Traduza documentação

### 🧪 Testes
- Adicione casos de teste
- Melhore cobertura de testes
- Reporte falhas de teste

---

## ⚙️ Configuração de Desenvolvimento

### Pré-requisitos

- **Node.js** (v14 ou superior)
- **Python** (3.7 ou superior)
- **PHP** (7.4 ou superior)
- **Docker** (opcional, para executar todos os testes)

### Início Rápido

1. **Faça um fork do repositório**
   ```bash
   # Clone seu fork
   git clone https://github.com/julioamorimdev/validbr.git
   cd validbr
   ```

2. **Configure o ambiente de desenvolvimento**
   ```bash
   # Instale dependências para todas as linguagens
   cd nodejs && npm install
   cd ../python && pip install -e .
   cd ../php && composer install
   ```

3. **Execute os testes**
   ```bash
   # Execute todos os testes com Docker (recomendado)
   cd docker
   docker-compose up --build
   
   # Ou execute testes individualmente
   cd nodejs && npm test
   cd ../python && python -m pytest
   cd ../php && composer test
   ```

### Configuração Específica por Linguagem

#### Node.js
```bash
cd nodejs
npm install
npm run build
npm test
```

#### Python
```bash
cd python
pip install -e .
python -m pytest
```

#### PHP
```bash
cd php
composer install
composer test
```

---

## 🎨 Estilo de Código

Seguimos padrões de codificação específicos para cada linguagem para manter qualidade e consistência.

### Node.js
- Use **ESLint** e **Prettier** para formatação
- Siga as melhores práticas do **TypeScript**
- Use **JSDoc** para documentação
- Execute antes de enviar: `npm run lint && npm run lint:fix`

### Python
- Use **Black** para formatação
- Siga as diretrizes de estilo **PEP 8**
- Use **Flake8** para linting
- Use **type hints** quando apropriado
- Execute antes de enviar: `black . && flake8 .`

### PHP
- Use **PHP_CodeSniffer** para formatação
- Siga os padrões de codificação **PSR-12**
- Use **PHPStan** para análise estática
- Use **PHPDoc** para documentação
- Execute antes de enviar: `composer cs-check && composer phpstan`

### Diretrizes Gerais

- **Escreva código claro e legível**
- **Adicione comentários para lógica complexa**
- **Use nomes significativos para variáveis e funções**
- **Mantenha funções pequenas e focadas**
- **Adicione testes para nova funcionalidade**

---

## 🧪 Testes

### Executando Testes

```bash
# Execute todos os testes
docker-compose up --build

# Execute testes de linguagem específica
docker-compose run nodejs npm test
docker-compose run python python -m pytest
docker-compose run php composer test
```

### Cobertura de Testes

```bash
# Node.js
npm run test:coverage

# Python
python -m pytest --cov=validbr

# PHP
composer test:coverage
```

### Escrevendo Testes

- **Teste toda nova funcionalidade**
- **Inclua casos extremos**
- **Teste condições de erro**
- **Mantenha alta cobertura de testes**
- **Use nomes descritivos para testes**

### Estrutura de Testes

```javascript
// Exemplo Node.js
describe('Validação de CPF', () => {
  it('deve validar um CPF válido', () => {
    expect(ValidBR.cpf.isValid('123.456.789-09')).toBe(true);
  });

  it('deve rejeitar um CPF inválido', () => {
    expect(ValidBR.cpf.isValid('123.456.789-10')).toBe(false);
  });
});
```

---

## 🔄 Processo de Pull Request

### Antes de Enviar

1. **Certifique-se de que sua branch está atualizada**
   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. **Execute todos os testes**
   ```bash
   docker-compose up --build
   ```

3. **Verifique o estilo do código**
   ```bash
   # Node.js
   npm run lint
   
   # Python
   black . && flake8 .
   
   # PHP
   composer cs-check
   ```

4. **Atualize a documentação** se necessário

### Diretrizes de Pull Request

- **Use títulos descritivos** - "Adiciona validação de CPF" não "Corrige bug"
- **Forneça descrições claras** - Explique o quê e por quê, não como
- **Referencie issues relacionadas** - Use "Fixes #123" ou "Closes #123"
- **Inclua testes** - Todo novo código deve ter testes
- **Atualize documentação** - Se adicionando novas funcionalidades
- **Mantenha PRs pequenos** - Foque em uma funcionalidade ou correção por PR

### Template de Pull Request

Usamos um [Template de Pull Request](.github/pull_request_template.md) para garantir que todas as informações necessárias sejam incluídas.

---

## 🐛 Reportando Bugs

### Antes de Reportar

1. **Verifique issues existentes** - Seu bug pode já estar reportado
2. **Teste a versão mais recente** - O bug pode estar corrigido
3. **Reproduza o problema** - Certifique-se de que é reproduzível

### Template de Bug Report

Use nosso [Template de Bug Report](.github/ISSUE_TEMPLATE/bug_report.md) que inclui:

- **Descrição clara** do problema
- **Passos para reproduzir** o problema
- **Comportamento esperado** vs comportamento atual
- **Detalhes do ambiente** (SO, versão da linguagem, etc.)
- **Exemplos de código** se aplicável
- **Screenshots** se relevante

### Exemplo de Bug Report

```
**Descrição do Bug**
Validação de CPF falha para números de CPF válidos começando com 000.

**Passos para Reproduzir**
1. Instale ValidBR: npm install validbr
2. Execute: ValidBR.cpf.isValid('000.000.000-00')
3. Esperado: true, Atual: false

**Ambiente**
- SO: macOS 12.0
- Node.js: 16.13.0
- ValidBR: 1.0.0

**Informações Adicionais**
Isso afeta todos os CPFs começando com 000.
```

---

## 💡 Solicitações de Funcionalidades

### Antes de Solicitar

1. **Verifique funcionalidades existentes** - A funcionalidade pode já existir
2. **Considere o escopo** - Ela se encaixa no propósito do ValidBR?
3. **Pense na implementação** - É viável?

### Template de Feature Request

Use nosso [Template de Feature Request](.github/ISSUE_TEMPLATE/feature_request.md) que inclui:

- **Descrição clara** da funcionalidade
- **Caso de uso** e benefícios
- **Implementação proposta** (se aplicável)
- **Alternativas consideradas**

### Exemplo de Feature Request

```
**Descrição da Funcionalidade**
Adicionar suporte para validar números de carteira de motorista brasileira.

**Caso de Uso**
Muitas aplicações brasileiras precisam validar números de carteira de motorista para registro e verificação de usuários.

**Benefícios**
- Cobertura completa de validação de documentos brasileiros
- Útil para aplicações automotivas e de transporte
- Segue padrões de validação existentes

**Implementação Proposta**
- Adicionar módulo `ValidBR.license`
- Suportar todos os estados brasileiros
- Incluir aplicação/remoção de máscaras
- Adicionar testes e documentação
```

---

## ❓ Perguntas e Suporte

### Obtendo Ajuda

- **GitHub Issues** - Para bugs e solicitações de funcionalidades
- **GitHub Discussions** - Para perguntas e discussão geral
- **Email** - julio@grupojpc.com.br para assuntos privados
- **Discord** - Entre em nossa comunidade para chat em tempo real

### Antes de Perguntar

1. **Verifique a documentação** - Sua pergunta pode estar respondida lá
2. **Pesquise issues existentes** - Perguntas similares podem ter sido feitas
3. **Tente resolver sozinho** - Aprender faz parte do processo

### Fazendo Boas Perguntas

- **Seja específico** - Inclua exemplos de código e mensagens de erro
- **Forneça contexto** - Explique o que você está tentando alcançar
- **Mostre esforço** - Demonstre o que você já tentou
- **Seja paciente** - Somos todos voluntários com tempo limitado

---

## 🏆 Reconhecimento

### Contribuidores

Reconhecemos todos os contribuidores em nossa página de [Contribuidores](https://github.com/validbr/validbr/graphs/contributors).

### Tipos de Contribuições

- **Código** - Correções de bugs, funcionalidades, melhorias
- **Documentação** - README, guias, exemplos
- **Testes** - Casos de teste, reportes de bugs
- **Comunidade** - Suporte, feedback, promoção

### Hall da Fama

Reconhecimento especial para contribuições significativas:

- **Contribuidores Principais** - Contribuidores regulares com grande impacto
- **Heróis da Documentação** - Contribuições excepcionais de documentação
- **Caçadores de Bugs** - Excelentes reportes e correções de bugs
- **Campeões da Comunidade** - Suporte excepcional à comunidade

---

## 📄 Licença

Ao contribuir para o ValidBR, você concorda que suas contribuições serão licenciadas sob a Licença MIT.

---

<div align="center">
  <h3>⭐ Obrigado por contribuir para o ValidBR!</h3>
  <p>Cada contribuição, por menor que seja, ajuda a tornar o ValidBR melhor para todos.</p>
</div>