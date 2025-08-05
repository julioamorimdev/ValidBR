import random
import re
from typing import Optional


class CNPJValidator:
    """CNPJ (Cadastro Nacional da Pessoa Jurídica) validator."""
    
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

    def is_valid(self, cnpj: str) -> bool:
        """Validate CNPJ format and check digits."""
        if not cnpj or not isinstance(cnpj, str):
            return False
        
        clean_cnpj = self.remove_mask(cnpj)
        
        # Check if it has 14 digits
        if len(clean_cnpj) != 14:
            return False
        
        # Check if all digits are the same
        if len(set(clean_cnpj)) == 1:
            return False
        
        # Validate first check digit
        weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
        sum_val = sum(int(clean_cnpj[i]) * weights1[i] for i in range(12))
        remainder = sum_val % 11
        first_digit = 0 if remainder < 2 else 11 - remainder
        
        if int(clean_cnpj[12]) != first_digit:
            return False
        
        # Validate second check digit
        weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
        sum_val = sum(int(clean_cnpj[i]) * weights2[i] for i in range(13))
        remainder = sum_val % 11
        second_digit = 0 if remainder < 2 else 11 - remainder
        
        return int(clean_cnpj[13]) == second_digit

    def generate(self) -> str:
        """Generate a valid CNPJ."""
        digits = [random.randint(0, 9) for _ in range(12)]
        
        # Calculate first check digit
        weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
        sum_val = sum(digits[i] * weights1[i] for i in range(12))
        remainder = sum_val % 11
        first_digit = 0 if remainder < 2 else 11 - remainder
        digits.append(first_digit)
        
        # Calculate second check digit
        weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
        sum_val = sum(digits[i] * weights2[i] for i in range(13))
        remainder = sum_val % 11
        second_digit = 0 if remainder < 2 else 11 - remainder
        digits.append(second_digit)
        
        return self.apply_mask(''.join(map(str, digits)))

    def apply_mask(self, cnpj: str) -> str:
        """Apply CNPJ mask (00.000.000/0000-00)."""
        if not cnpj or not isinstance(cnpj, str):
            return ""
        
        clean_cnpj = self.remove_mask(cnpj)
        if len(clean_cnpj) != 14:
            return cnpj
        
        return f"{clean_cnpj[:2]}.{clean_cnpj[2:5]}.{clean_cnpj[5:8]}/{clean_cnpj[8:12]}-{clean_cnpj[12:]}"

    def remove_mask(self, cnpj: str) -> str:
        """Remove CNPJ mask."""
        if not cnpj or not isinstance(cnpj, str):
            return ""
        return re.sub(r'\D', '', cnpj)

    def get_state(self, cnpj: str) -> Optional[str]:
        """Get state from CNPJ first two digits."""
        if not self.is_valid(cnpj):
            return None
        
        clean_cnpj = self.remove_mask(cnpj)
        first_two_digits = int(clean_cnpj[:2])
        
        for range_start, states in self.state_map.items():
            if range_start * 10 <= first_two_digits <= range_start * 10 + 9:
                return states
        
        return None 