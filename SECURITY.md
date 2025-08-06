# Security Policy

## Supported Versions

Use this section to tell people about which versions of your project are currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of ValidBR seriously. If you believe you have found a security vulnerability, please report it to us as described below.

### Reporting Process

1. **DO NOT** create a public GitHub issue for the vulnerability.
2. **DO** email us at security@validbr.com with the subject line `[SECURITY] ValidBR Vulnerability Report`.
3. **DO** include a detailed description of the vulnerability, including:
   - Type of issue (buffer overflow, SQL injection, cross-site scripting, etc.)
   - Full paths of source file(s) related to the vulnerability
   - The location of the affected source code (tag/branch/commit or direct URL)
   - Any special configuration required to reproduce the issue
   - Step-by-step instructions to reproduce the issue
   - Proof-of-concept or exploit code (if possible)
   - Impact of the issue, including how an attacker might exploit it

### What to Expect

- You will receive an acknowledgment within 48 hours
- We will investigate and provide updates on our progress
- We will work with you to understand and address the issue
- Once the issue is resolved, we will:
  - Credit you in our security advisory (unless you prefer to remain anonymous)
  - Release a security update
  - Update our security policy if needed

### Responsible Disclosure

We follow responsible disclosure practices:
- We will not disclose the vulnerability until it is fixed
- We will work with you to coordinate the disclosure timeline
- We will credit you for finding the vulnerability (unless you prefer to remain anonymous)

### Security Best Practices

When using ValidBR, please follow these security best practices:

1. **Keep Updated**: Always use the latest version of ValidBR
2. **Validate Input**: Always validate and sanitize input data
3. **Use HTTPS**: Use HTTPS in production environments
4. **Follow OWASP Guidelines**: Follow OWASP security guidelines
5. **Regular Audits**: Regularly audit your dependencies

### Security Features

ValidBR includes several security features:

- **Input Validation**: Comprehensive validation for Brazilian documents
- **Data Sanitization**: Built-in sanitization functions
- **No External Dependencies**: Minimal external dependencies to reduce attack surface
- **Type Safety**: TypeScript support for better type safety (Node.js version)

### Known Security Issues

We maintain a list of known security issues and their resolutions in our [Security Advisories](https://github.com/validbr/validbr/security/advisories).

---

# Política de Segurança

## Versões Suportadas

Use esta seção para informar às pessoas sobre quais versões do seu projeto estão sendo atualmente suportadas com atualizações de segurança.

| Versão | Suportada          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reportando uma Vulnerabilidade

Levamos a segurança do ValidBR a sério. Se você acredita ter encontrado uma vulnerabilidade de segurança, por favor reporte-a para nós conforme descrito abaixo.

### Processo de Reporte

1. **NÃO** crie uma issue pública no GitHub para a vulnerabilidade.
2. **ENVIE** um email para security@validbr.com com o assunto `[SEGURANÇA] Relatório de Vulnerabilidade ValidBR`.
3. **INCLUA** uma descrição detalhada da vulnerabilidade, incluindo:
   - Tipo de problema (buffer overflow, SQL injection, cross-site scripting, etc.)
   - Caminhos completos do(s) arquivo(s) fonte relacionados à vulnerabilidade
   - A localização do código fonte afetado (tag/branch/commit ou URL direta)
   - Qualquer configuração especial necessária para reproduzir o problema
   - Instruções passo a passo para reproduzir o problema
   - Código de prova de conceito ou exploit (se possível)
   - Impacto do problema, incluindo como um atacante poderia explorá-lo

### O que Esperar

- Você receberá uma confirmação dentro de 48 horas
- Investigaremos e forneceremos atualizações sobre nosso progresso
- Trabalharemos com você para entender e resolver o problema
- Uma vez que o problema seja resolvido, nós:
  - Creditaremos você em nosso aviso de segurança (a menos que você prefira permanecer anônimo)
  - Lançaremos uma atualização de segurança
  - Atualizaremos nossa política de segurança se necessário

### Divulgação Responsável

Seguimos práticas de divulgação responsável:
- Não divulgaremos a vulnerabilidade até que seja corrigida
- Trabalharemos com você para coordenar o cronograma de divulgação
- Creditaremos você por encontrar a vulnerabilidade (a menos que você prefira permanecer anônimo)

### Melhores Práticas de Segurança

Ao usar o ValidBR, siga estas melhores práticas de segurança:

1. **Mantenha Atualizado**: Sempre use a versão mais recente do ValidBR
2. **Valide Entrada**: Sempre valide e sanitize dados de entrada
3. **Use HTTPS**: Use HTTPS em ambientes de produção
4. **Siga Diretrizes OWASP**: Siga as diretrizes de segurança da OWASP
5. **Auditorias Regulares**: Faça auditorias regulares de suas dependências

### Recursos de Segurança

O ValidBR inclui vários recursos de segurança:

- **Validação de Entrada**: Validação abrangente para documentos brasileiros
- **Sanitização de Dados**: Funções de sanitização integradas
- **Sem Dependências Externas**: Dependências externas mínimas para reduzir a superfície de ataque
- **Segurança de Tipos**: Suporte a TypeScript para melhor segurança de tipos (versão Node.js)

### Problemas de Segurança Conhecidos

Mantemos uma lista de problemas de segurança conhecidos e suas resoluções em nossos [Avisos de Segurança](https://github.com/validbr/validbr/security/advisories). 