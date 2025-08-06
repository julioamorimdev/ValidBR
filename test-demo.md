# Testando o Demo ValidBR

## 🚀 Como testar o arquivo demo.html

### Método 1: Abrir diretamente no navegador
1. Navegue até a pasta do projeto ValidBR
2. Clique duas vezes no arquivo `demo.html`
3. O navegador abrirá automaticamente a demonstração

### Método 2: Usando servidor local (Recomendado)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

Depois acesse: `http://localhost:8000/demo.html`

### Método 3: Usando Live Server (VS Code)
1. Instale a extensão "Live Server" no VS Code
2. Clique com o botão direito no arquivo `demo.html`
3. Selecione "Open with Live Server"

## 🧪 Funcionalidades para testar

### ✅ CPF
- **Teste válido**: `123.456.789-09`
- **Teste inválido**: `123.456.789-10`
- **Gerar CPF**: Clique no botão "Gerar CPF"
- **Identificar estado**: Digite um CPF e clique "Identificar Estado"

### ✅ CNPJ
- **Teste válido**: `12.345.678/0001-95`
- **Teste inválido**: `12.345.678/0001-96`
- **Gerar CNPJ**: Clique no botão "Gerar CNPJ"

### ✅ Telefone
- **Teste válido**: `(11) 91234-5678`
- **Teste inválido**: `(11) 1234-5678`
- **Info DDD**: Digite um telefone e clique "Info DDD"
- **Estado do DDD**: Digite um DDD e clique "Estado do DDD"

### ✅ Email
- **Teste válido**: `usuario@exemplo.com`
- **Teste inválido**: `usuario@exemplo`
- **Sanitizar**: Digite um email com espaços e clique "Sanitizar"

### ✅ Nome
- **Teste válido**: `João Silva Santos`
- **Teste inválido**: `João123Silva`
- **Obter Iniciais**: Digite um nome e clique "Obter Iniciais"

### ✅ Data de Nascimento
- **Teste válido**: `1990-05-15`
- **Teste inválido**: `2030-05-15` (data futura)
- **Calcular Idade**: Digite uma data e clique "Calcular Idade"

### ✅ CEP
- **Teste válido**: `01234-567`
- **Teste inválido**: `0123-567`
- **Buscar Endereço**: Digite um CEP e clique "Buscar Endereço"

### ✅ Funções Utilitárias
- **Sanitizar**: Digite texto com espaços extras
- **Remover Não-Numéricos**: Digite `abc123def456`
- **Remover Não-Alfabéticos**: Digite `João123Silva`

## 🎯 Recursos especiais

### Máscaras Automáticas
- **CPF**: Digite números e veja a máscara sendo aplicada automaticamente
- **CNPJ**: Digite números e veja a máscara sendo aplicada automaticamente
- **Telefone**: Digite números e veja a máscara sendo aplicada automaticamente
- **CEP**: Digite números e veja a máscara sendo aplicada automaticamente

### Interface Responsiva
- Teste em diferentes tamanhos de tela
- A interface se adapta automaticamente

### Feedback Visual
- ✅ Verde: Validação bem-sucedida
- ❌ Vermelho: Validação falhou
- 🔵 Azul: Informações adicionais

## 🐛 Solução de Problemas

### Demo não carrega
- Verifique se o arquivo `demo.html` existe
- Tente usar um servidor local em vez de abrir diretamente
- Verifique se o JavaScript está habilitado no navegador

### Funcionalidades não funcionam
- Abra o console do navegador (F12) para ver erros
- Verifique se todos os arquivos estão presentes
- Tente recarregar a página (Ctrl+F5)

### Interface não responsiva
- Verifique se está usando um navegador moderno
- Tente em diferentes navegadores (Chrome, Firefox, Safari, Edge)

## 📱 Compatibilidade

### Navegadores Suportados
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

### Dispositivos
- ✅ Desktop
- ✅ Tablet
- ✅ Mobile

## 🎨 Personalização

O demo pode ser personalizado editando:
- **CSS**: Estilos no `<style>` do arquivo
- **JavaScript**: Lógica no `<script>` do arquivo
- **HTML**: Estrutura da página

---

**Dica**: Use o demo para demonstrar as funcionalidades do ValidBR para clientes, colegas ou em apresentações! 