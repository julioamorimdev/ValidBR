import re
from typing import Optional

class RGValidator:
    state_weights = {
        'SP': [2, 3, 4, 5, 6, 7, 8, 9],
        'RJ': [2, 3, 4, 5, 6, 7, 8, 9],
        'MG': [2, 3, 4, 5, 6, 7, 8, 9],
        'RS': [2, 3, 4, 5, 6, 7, 8, 9],
        'PR': [2, 3, 4, 5, 6, 7, 8, 9],
        'SC': [2, 3, 4, 5, 6, 7, 8, 9],
        'GO': [2, 3, 4, 5, 6, 7, 8, 9],
        'MT': [2, 3, 4, 5, 6, 7, 8, 9],
        'MS': [2, 3, 4, 5, 6, 7, 8, 9],
        'TO': [2, 3, 4, 5, 6, 7, 8, 9],
        'DF': [2, 3, 4, 5, 6, 7, 8, 9],
        'AC': [2, 3, 4, 5, 6, 7, 8, 9],
        'AP': [2, 3, 4, 5, 6, 7, 8, 9],
        'AM': [2, 3, 4, 5, 6, 7, 8, 9],
        'PA': [2, 3, 4, 5, 6, 7, 8, 9],
        'RO': [2, 3, 4, 5, 6, 7, 8, 9],
        'RR': [2, 3, 4, 5, 6, 7, 8, 9],
        'CE': [2, 3, 4, 5, 6, 7, 8, 9],
        'MA': [2, 3, 4, 5, 6, 7, 8, 9],
        'PI': [2, 3, 4, 5, 6, 7, 8, 9],
        'AL': [2, 3, 4, 5, 6, 7, 8, 9],
        'PB': [2, 3, 4, 5, 6, 7, 8, 9],
        'PE': [2, 3, 4, 5, 6, 7, 8, 9],
        'RN': [2, 3, 4, 5, 6, 7, 8, 9],
        'BA': [2, 3, 4, 5, 6, 7, 8, 9],
        'SE': [2, 3, 4, 5, 6, 7, 8, 9],
        'ES': [2, 3, 4, 5, 6, 7, 8, 9]
    }

    def is_valid(self, rg: str, state: Optional[str] = None) -> bool:
        if not rg or not isinstance(rg, str):
            return False
        clean_rg = self.remove_mask(rg)
        if len(clean_rg) not in (8, 9):
            return False
        if not re.match(r'^\d{8,9}$', clean_rg):
            return False
        if state and state.upper() in self.state_weights:
            return self.validate_check_digit(clean_rg, state.upper())
        return True

    def apply_mask(self, rg: str) -> str:
        if not rg or not isinstance(rg, str):
            return ''
        clean_rg = self.remove_mask(rg)
        if len(clean_rg) == 8:
            return f'{clean_rg[:2]}.{clean_rg[2:5]}.{clean_rg[5:]}'
        elif len(clean_rg) == 9:
            return f'{clean_rg[:2]}.{clean_rg[2:5]}.{clean_rg[5:8]}-{clean_rg[8]}'
        return rg

    def remove_mask(self, rg: str) -> str:
        if not rg or not isinstance(rg, str):
            return ''
        return re.sub(r'\D', '', rg)

    def validate_check_digit(self, rg: str, state: str) -> bool:
        if len(rg) != 9:
            return False
        weights = self.state_weights.get(state)
        if not weights:
            return False
        sum_ = sum(int(rg[i]) * weights[i] for i in range(8))
        remainder = sum_ % 11
        expected = 0 if remainder == 0 else 11 - remainder
        return int(rg[8]) == expected