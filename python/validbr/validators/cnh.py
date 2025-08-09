import re
import random

class CNHValidator:
    """Validador de CNH (Carteira Nacional de Habilitação)"""
    def is_valid(self, cnh: str) -> bool:
        if not cnh or not isinstance(cnh, str):
            return False
        clean = self.remove_mask(cnh)
        if not re.match(r'^\d{11}$', clean):
            return False
        if len(set(clean)) == 1:
            return False
        dsc = 0
        soma = sum(int(clean[i]) * (9 - i) for i in range(9))
        dv1 = soma % 11
        if dv1 >= 10:
            dv1 = 0
            dsc = 2
        soma = sum(int(clean[i]) * (i + 1) for i in range(9))
        dv2 = soma % 11
        if dv2 >= 10:
            dv2 = 0
        dv2_final = dv2 - dsc if dv2 - dsc >= 0 else dv2 - dsc + 11
        return clean[9] == str(dv1) and clean[10] == str(dv2_final)

    def apply_mask(self, cnh: str) -> str:
        return self.remove_mask(cnh)  # CNH não tem máscara oficial

    def remove_mask(self, cnh: str) -> str:
        if not cnh or not isinstance(cnh, str):
            return ''
        return re.sub(r'\D', '', cnh)

    def generate(self) -> str:
        while True:
            n = ''.join(str(random.randint(0, 9)) for _ in range(9))
            dsc = 0
            soma = sum(int(n[i]) * (9 - i) for i in range(9))
            dv1 = soma % 11
            if dv1 >= 10:
                dv1 = 0
                dsc = 2
            soma = sum(int(n[i]) * (i + 1) for i in range(9))
            dv2 = soma % 11
            if dv2 >= 10:
                dv2 = 0
            dv2_final = dv2 - dsc if dv2 - dsc >= 0 else dv2 - dsc + 11
            cnh = n + str(dv1) + str(dv2_final)
            if self.is_valid(cnh):
                return cnh
