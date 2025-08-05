from datetime import datetime
from typing import Optional

class BirthDateValidator:
    def is_valid(self, birth_date: str) -> bool:
        date = self.parse_date(birth_date)
        if not date:
            return False
        today = datetime.today().date()
        min_date = datetime(today.year - 130, today.month, today.day).date()
        max_date = today
        return min_date <= date <= max_date

    def get_age(self, birth_date: str) -> Optional[int]:
        if not self.is_valid(birth_date):
            return None
        date = self.parse_date(birth_date)
        today = datetime.today().date()
        age = today.year - date.year
        if (today.month, today.day) < (date.month, date.day):
            age -= 1
        return age

    def is_adult(self, birth_date: str) -> bool:
        age = self.get_age(birth_date)
        return age is not None and age >= 18

    def is_elderly(self, birth_date: str) -> bool:
        age = self.get_age(birth_date)
        return age is not None and age >= 60

    def is_minor(self, birth_date: str) -> bool:
        age = self.get_age(birth_date)
        return age is not None and age < 18

    def format(self, birth_date: str, fmt: str = 'YYYY-MM-DD') -> Optional[str]:
        if not self.is_valid(birth_date):
            return None
        date = self.parse_date(birth_date)
        if fmt == 'YYYY-MM-DD':
            return date.strftime('%Y-%m-%d')
        elif fmt == 'DD/MM/YYYY':
            return date.strftime('%d/%m/%Y')
        elif fmt == 'MM/DD/YYYY':
            return date.strftime('%m/%d/%Y')
        return date.strftime('%Y-%m-%d')

    def parse_date(self, date_str: str) -> Optional[datetime.date]:
        if not date_str or not isinstance(date_str, str):
            return None
        try:
            if '-' in date_str:
                return datetime.strptime(date_str, '%Y-%m-%d').date()
            elif '/' in date_str:
                parts = date_str.split('/')
                if len(parts[2]) == 4:
                    return datetime.strptime(date_str, '%d/%m/%Y').date()
        except Exception:
            return None
        return None