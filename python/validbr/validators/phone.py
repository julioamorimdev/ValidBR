import re
from typing import Optional

class PhoneValidator:
    ddd_map = {
        '11': 'São Paulo', '12': 'São Paulo', '13': 'São Paulo',
        '14': 'São Paulo', '15': 'São Paulo', '16': 'São Paulo',
        '17': 'São Paulo', '18': 'São Paulo', '19': 'São Paulo',
        '21': 'Rio de Janeiro', '22': 'Rio de Janeiro', '24': 'Rio de Janeiro',
        '27': 'Espírito Santo', '28': 'Espírito Santo',
        '31': 'Minas Gerais', '32': 'Minas Gerais', '33': 'Minas Gerais',
        '34': 'Minas Gerais', '35': 'Minas Gerais', '37': 'Minas Gerais',
        '38': 'Minas Gerais', '41': 'Paraná', '42': 'Paraná',
        '43': 'Paraná', '44': 'Paraná', '45': 'Paraná', '46': 'Paraná',
        '47': 'Santa Catarina', '48': 'Santa Catarina', '49': 'Santa Catarina',
        '51': 'Rio Grande do Sul', '53': 'Rio Grande do Sul',
        '54': 'Rio Grande do Sul', '55': 'Rio Grande do Sul',
        '61': 'Distrito Federal', '62': 'Goiás', '63': 'Tocantins',
        '64': 'Goiás', '65': 'Mato Grosso', '66': 'Mato Grosso',
        '67': 'Mato Grosso do Sul', '68': 'Acre', '69': 'Rondônia',
        '71': 'Bahia', '73': 'Bahia', '74': 'Bahia', '75': 'Bahia',
        '77': 'Bahia', '79': 'Sergipe', '81': 'Pernambuco',
        '82': 'Alagoas', '83': 'Paraíba', '84': 'Rio Grande do Norte',
        '85': 'Ceará', '86': 'Piauí', '87': 'Pernambuco',
        '88': 'Ceará', '89': 'Piauí', '91': 'Pará', '92': 'Amazonas',
        '93': 'Pará', '94': 'Pará', '95': 'Roraima', '96': 'Amapá',
        '97': 'Amazonas', '98': 'Maranhão', '99': 'Maranhão'
    }

    def is_valid(self, phone: str) -> bool:
        if not phone or not isinstance(phone, str):
            return False
        clean_phone = self.remove_mask(phone)
        if len(clean_phone) not in (10, 11):
            return False
        ddd = clean_phone[:2]
        if ddd not in self.ddd_map:
            return False
        if len(clean_phone) == 11:
            return clean_phone[2] == '9'
        else:
            return re.match(r'^[2-8]', clean_phone[2:]) is not None

    def get_ddd(self, phone: str) -> Optional[str]:
        if not phone or not isinstance(phone, str):
            return None
        clean_phone = self.remove_mask(phone)
        if len(clean_phone) < 2:
            return None
        ddd = clean_phone[:2]
        return ddd if ddd in self.ddd_map else None

    def get_state(self, ddd: str) -> Optional[str]:
        return self.ddd_map.get(ddd)

    def apply_mask(self, phone: str) -> str:
        if not phone or not isinstance(phone, str):
            return ''
        clean_phone = self.remove_mask(phone)
        if len(clean_phone) == 11:
            return f'({clean_phone[:2]}) {clean_phone[2:7]}-{clean_phone[7:]}'
        elif len(clean_phone) == 10:
            return f'({clean_phone[:2]}) {clean_phone[2:6]}-{clean_phone[6:]}'
        return phone

    def remove_mask(self, phone: str) -> str:
        if not phone or not isinstance(phone, str):
            return ''
        return re.sub(r'\D', '', phone)

    def get_valid_ddds(self):
        return list(self.ddd_map.keys())

    def is_ddd_valid(self, ddd: str) -> bool:
        return ddd in self.ddd_map