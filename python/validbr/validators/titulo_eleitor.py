import re
import random

class TituloEleitorValidator:
    """Validador de Título de Eleitor"""
    def is_valid(self, titulo: str) -> bool:
        if not titulo or not isinstance(titulo, str):
            return False
        clean = self.remove_mask(titulo)
        if not re.match(r'^\d{12}$', clean):
            return False
        if len(set(clean)) == 1:
            return False
        digitos = [int(d) for d in clean]
        d1 = sum(digitos[i] * (9 - i) for i in range(8)) % 11
        if d1 == 10:
            d1 = 0
        d2 = sum(digitos[i] * (4 - (i - 8)) for i in range(8, 10)) % 11
        if d2 == 10:
            d2 = 0
        return digitos[10] == d1 and digitos[11] == d2

    def apply_mask(self, titulo: str) -> str:
        clean = self.remove_mask(titulo)
        return re.sub(r'^(\d{4})(\d{4})(\d{4})$', r'\1 \2 \3', clean)

    def remove_mask(self, titulo: str) -> str:
        if not titulo or not isinstance(titulo, str):
            return ''
        return re.sub(r'\D', '', titulo)

    def generate(self) -> str:
        while True:
            n = [random.randint(0, 9) for _ in range(10)]
            d1 = sum(n[i] * (9 - i) for i in range(8)) % 11
            if d1 == 10:
                d1 = 0
            d2 = sum(n[i] * (4 - (i - 8)) for i in range(8, 10)) % 11
            if d2 == 10:
                d2 = 0
            titulo = ''.join(str(x) for x in n) + str(d1) + str(d2)
            if self.is_valid(titulo):
                return titulo
