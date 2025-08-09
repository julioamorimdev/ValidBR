# ValidBR for Node.js

Validação de documentos brasileiros (CPF, CNPJ, RG, CNH, Título de Eleitor, PIS, etc), telefones, CEP, nomes, datas e muito mais!

- **Documentos**: CPF, CNPJ, RG, IE, CNH, Título de Eleitor, PIS/NIS/NIT/PASEP
- **Comunicação**: Telefone, Email
- **Endereço**: CEP, DDD
- **Pessoal**: Nome completo, Data de nascimento
- **Utilitários**: Máscaras, sanitização, formatação

## Instalação
```bash
npm install validbr
```

## Exemplo de uso
```js
const ValidBR = require('validbr');

// CPF
console.log(ValidBR.cpf.isValid('123.456.789-09'));
console.log(ValidBR.cpf.generate());

// CNH
console.log(ValidBR.cnh.isValid('02650306461'));
console.log(ValidBR.cnh.generate());

// Título de Eleitor
console.log(ValidBR.tituloEleitor.isValid('123456789012'));
console.log(ValidBR.tituloEleitor.generate());

// PIS
console.log(ValidBR.pis.isValid('123.45678.90-1'));
console.log(ValidBR.pis.generate());
```

## Documentação completa
Veja todos os detalhes, exemplos e funcionalidades em:
- [Documentação principal](../README.md)
- [Demo interativo](../demo.html)
