import re
import requests
from typing import Optional, Dict

class CEPValidator:
    def is_valid(self, cep: str) -> bool:
        if not cep or not isinstance(cep, str):
            return False
        clean_cep = self.remove_mask(cep)
        return bool(re.match(r'^\d{8}$', clean_cep))

    def apply_mask(self, cep: str) -> str:
        if not cep or not isinstance(cep, str):
            return ''
        clean_cep = self.remove_mask(cep)
        if len(clean_cep) != 8:
            return cep
        return f'{clean_cep[:5]}-{clean_cep[5:]}'

    def remove_mask(self, cep: str) -> str:
        if not cep or not isinstance(cep, str):
            return ''
        return re.sub(r'\D', '', cep)

    def get_info(self, cep: str) -> Optional[Dict]:
        if not self.is_valid(cep):
            return None
        clean_cep = self.remove_mask(cep)
        try:
            resp = requests.get(f'https://viacep.com.br/ws/{clean_cep}/json/')
            data = resp.json()
            if 'erro' in data:
                return None
            return data
        except Exception:
            return None

    def get_state(self, cep: str) -> Optional[str]:
        if not self.is_valid(cep):
            return None
        clean_cep = self.remove_mask(cep)
        first_digit = int(clean_cep[0])
        state_map = {
            0: 'SP', 1: 'SP', 2: 'RJ', 3: 'ES', 4: 'MG', 5: 'BA',
            6: 'CE, PE, AL, PB, RN', 7: 'DF, GO, TO, MT, MS, RO, AC',
            8: 'PR, SC', 9: 'RS'
        }
        return state_map.get(first_digit)