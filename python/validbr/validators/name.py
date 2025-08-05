import re
from typing import Optional, List

class NameValidator:
    def is_valid(self, name: str) -> bool:
        if not name or not isinstance(name, str):
            return False
        clean_name = self.sanitize(name)
        if len(clean_name) < 2 or len(clean_name) > 100:
            return False
        if not re.match(r'^[a-zA-ZÀ-ÿ\s]+$', clean_name):
            return False
        name_parts = [part for part in clean_name.split(' ') if part]
        if len(name_parts) < 2:
            return False
        for part in name_parts:
            if len(part) < 2:
                return False
        return True

    def sanitize(self, name: str) -> str:
        if not name or not isinstance(name, str):
            return ''
        name = name.strip()
        name = re.sub(r'\s+', ' ', name)
        name = re.sub(r'[^\w\sÀ-ÿ]', '', name)
        return ' '.join([n.capitalize() for n in name.split(' ')])

    def get_first_name(self, name: str) -> Optional[str]:
        if not self.is_valid(name):
            return None
        return self.sanitize(name).split(' ')[0]

    def get_last_name(self, name: str) -> Optional[str]:
        if not self.is_valid(name):
            return None
        return self.sanitize(name).split(' ')[-1]

    def get_middle_names(self, name: str) -> List[str]:
        if not self.is_valid(name):
            return []
        parts = self.sanitize(name).split(' ')
        if len(parts) <= 2:
            return []
        return parts[1:-1]

    def get_initials(self, name: str) -> Optional[str]:
        if not self.is_valid(name):
            return None
        parts = self.sanitize(name).split(' ')
        return '.'.join([p[0].upper() for p in parts]) + '.'

    def has_common_brazilian_name(self, name: str) -> bool:
        if not self.is_valid(name):
            return False
        parts = self.sanitize(name).lower().split(' ')
        common = [
            'joão', 'josé', 'maria', 'ana', 'pedro', 'carlos', 'paulo', 'lucas',
            'gabriel', 'rafael', 'daniel', 'marcelo', 'bruno', 'eduardo', 'felipe',
            'andré', 'luiz', 'marcos', 'leonardo', 'rodrigo', 'thiago', 'marcelo',
            'silva', 'santos', 'oliveira', 'souza', 'rodrigues', 'ferreira',
            'alves', 'pereira', 'lima', 'gomes', 'ribeiro', 'carvalho', 'lopes',
            'soares', 'fernandes', 'vieira', 'barbosa', 'rocha', 'dias', 'nascimento'
        ]
        return any(p in common for p in parts)