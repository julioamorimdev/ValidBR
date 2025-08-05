import random
import re
from typing import Optional


class CPFValidator:
    """CPF (Cadastro de Pessoas Físicas) validator."""
    
    def __init__(self):
        self.state_map = {
            1: 'DF, GO, MS, MT, TO',
            2: 'AC, AP, AM, PA, RO, RR',
            3: 'CE, MA, PI',
            4: 'AL, PB, PE, RN',
            5: 'BA, SE',
            6: 'MG',
            7: 'ES, RJ',
            8: 'SP',
            9: 'PR, SC',
            0: 'RS'
        }

    def is_valid(self, cpf: str) -> bool:
        """Validate CPF format and check digits."""
        if not cpf or not isinstance(cpf, str):
            return False
        
        clean_cpf = self.remove_mask(cpf)
        
        # Check if it has 11 digits
        if len(clean_cpf) != 11:
            return False
        
        # Check if all digits are the same
        if len(set(clean_cpf)) == 1:
            return False
        
        # Validate first check digit
        sum_val = sum(int(clean_cpf[i]) * (10 - i) for i in range(9))
        remainder = sum_val % 11
        first_digit = 0 if remainder < 2 else 11 - remainder
        
        if int(clean_cpf[9]) != first_digit:
            return False
        
        # Validate second check digit
        sum_val = sum(int(clean_cpf[i]) * (11 - i) for i in range(10))
        remainder = sum_val % 11
        second_digit = 0 if remainder < 2 else 11 - remainder
        
        return int(clean_cpf[10]) == second_digit

    def generate(self) -> str:
        """Generate a valid CPF."""
        digits = [random.randint(0, 9) for _ in range(9)]
        
        # Calculate first check digit
        sum_val = sum(digits[i] * (10 - i) for i in range(9))
        remainder = sum_val % 11
        first_digit = 0 if remainder < 2 else 11 - remainder
        digits.append(first_digit)
        
        # Calculate second check digit
        sum_val = sum(digits[i] * (11 - i) for i in range(10))
        remainder = sum_val % 11
        second_digit = 0 if remainder < 2 else 11 - remainder
        digits.append(second_digit)
        
        return self.apply_mask(''.join(map(str, digits)))

    def apply_mask(self, cpf: str) -> str:
        """Apply CPF mask (000.000.000-00)."""
        if not cpf or not isinstance(cpf, str):
            return ""
        
        clean_cpf = self.remove_mask(cpf)
        if len(clean_cpf) != 11:
            return cpf
        
        return f"{clean_cpf[:3]}.{clean_cpf[3:6]}.{clean_cpf[6:9]}-{clean_cpf[9:]}"

    def remove_mask(self, cpf: str) -> str:
        """Remove CPF mask."""
        if not cpf or not isinstance(cpf, str):
            return ""
        return re.sub(r'\D', '', cpf)

    def get_state(self, cpf: str) -> Optional[str]:
        """Get state from CPF first two digits."""
        if not self.is_valid(cpf):
            return None
        
        clean_cpf = self.remove_mask(cpf)
        first_two_digits = int(clean_cpf[:2])
        
        for range_start, states in self.state_map.items():
            if range_start * 10 <= first_two_digits <= range_start * 10 + 9:
                return states
        
        return None 