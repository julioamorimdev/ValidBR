#!/bin/bash

echo "🚀 ValidBR - Script de Publicação"
echo "=================================="

# Verificar se estamos no diretório correto
if [ ! -f "publish.config.json" ]; then
    echo "❌ Erro: Execute este script na raiz do projeto ValidBR"
    exit 1
fi

echo "📋 Verificando status dos testes..."

# Node.js
echo "🔵 Testando Node.js..."
cd nodejs
npm test
if [ $? -ne 0 ]; then
    echo "❌ Testes Node.js falharam"
    exit 1
fi
npm run build
cd ..

# Python
echo "🐍 Testando Python..."
cd python
python3 -m pytest tests/test_validbr.py -v
if [ $? -ne 0 ]; then
    echo "❌ Testes Python falharam"
    exit 1
fi
cd ..

# PHP
echo "🐘 Testando PHP..."
cd php
./vendor/bin/phpunit tests/ValidBRTest.php
if [ $? -ne 0 ]; then
    echo "❌ Testes PHP falharam"
    exit 1
fi
cd ..

echo "✅ Todos os testes passaram!"
echo ""
echo "📦 Próximos passos para publicação:"
echo ""
echo "1. 🔵 NPM (Node.js):"
echo "   cd nodejs"
echo "   npm login"
echo "   npm publish"
echo ""
echo "2. 🐍 PyPI (Python):"
echo "   cd python"
echo "   python3 setup.py sdist bdist_wheel"
echo "   twine upload dist/*"
echo ""
echo "3. 🐘 Packagist (PHP):"
echo "   - Vá para https://packagist.org/"
echo "   - Faça login com GitHub"
echo "   - Submit package: validbr/validbr"
echo ""
echo "🎉 Boa sorte com a publicação!" 