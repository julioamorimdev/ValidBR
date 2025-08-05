import re
from typing import Optional

class EmailValidator:
    def is_valid(self, email: str) -> bool:
        if not email or not isinstance(email, str):
            return False
        clean_email = self.sanitize(email)
        email_regex = re.compile(r"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")
        if not email_regex.match(clean_email):
            return False
        domain = self.get_domain(clean_email)
        if not domain:
            return False
        valid_tlds = ['.com', '.com.br', '.br', '.net', '.org', '.edu', '.gov']
        return any(domain.endswith(tld) for tld in valid_tlds)

    def sanitize(self, email: str) -> str:
        if not email or not isinstance(email, str):
            return ''
        return email.strip().lower()

    def get_domain(self, email: str) -> Optional[str]:
        if '@' not in email:
            return None
        return email.split('@')[1]

    def get_username(self, email: str) -> Optional[str]:
        if '@' not in email:
            return None
        return email.split('@')[0]

    def is_brazilian_provider(self, email: str) -> bool:
        domain = self.get_domain(email)
        if not domain:
            return False
        brazilian_providers = [
            'gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com',
            'uol.com.br', 'bol.com.br', 'ig.com.br', 'terra.com.br',
            'globo.com', 'oi.com.br'
        ]
        return domain in brazilian_providers