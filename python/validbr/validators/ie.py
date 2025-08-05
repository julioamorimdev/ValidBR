from typing import Optional

class IEValidator:
    state_weights = {
        'AC': [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
        'AL': [9, 8, 7, 6, 5, 4, 3, 2],
        'AP': [9, 8, 7, 6, 5, 4, 3, 2],
        'AM': [9, 8, 7, 6, 5, 4, 3, 2],
        'BA': [9, 8, 7, 6, 5, 4, 3, 2],
        'CE': [9, 8, 7, 6, 5, 4, 3, 2],
        'DF': [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
        'ES': [9, 8, 7, 6, 5, 4, 3, 2],
        'GO': [9, 8, 7, 6, 5, 4, 3, 2],
        'MA': [9, 8, 7, 6, 5, 4, 3, 2],
        'MG': [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
        'MS': [9, 8, 7, 6, 5, 4, 3, 2],
        'MT': [3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
        'PA': [9, 8, 7, 6, 5, 4, 3, 2],
        'PB': [9, 8, 7, 6, 5, 4, 3, 2],
        'PE': [9, 8, 7, 6, 5, 4, 3, 2],
        'PI': [9, 8, 7, 6, 5, 4, 3, 2],
        'PR': [3, 2, 7, 6, 5, 4, 3, 2],
        'RJ': [2, 7, 6, 5, 4, 3, 2],
        'RN': [9, 8, 7, 6, 5, 4, 3, 2],
        'RO': [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
        'RR': [9, 8, 7, 6, 5, 4, 3, 2],
        'RS': [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
        'SC': [9, 8, 7, 6, 5, 4, 3, 2],
        'SE': [9, 8, 7, 6, 5, 4, 3, 2],
        'SP': [1, 3, 4, 5, 6, 7, 8, 10],
        'TO': [9, 8, 7, 6, 5, 4, 3, 2]
    }

    def is_valid(self, ie: str, state: str) -> bool:
        if not ie or not isinstance(ie, str) or not state:
            return False
        clean_ie = self.remove_mask(ie)
        state = state.upper()
        if state not in self.state_weights:
            return False
        if len(clean_ie) != len(self.state_weights[state]):
            return False
        if not clean_ie.isdigit():
            return False
        return self.validate_check_digit(clean_ie, state)

    def apply_mask(self, ie: str, state: str) -> str:
        if not ie or not isinstance(ie, str) or not state:
            return ''
        clean_ie = self.remove_mask(ie)
        state = state.upper()
        if state not in self.state_weights:
            return ie
        if len(clean_ie) != len(self.state_weights[state]):
            return ie
        # Simplified: just return the number for now
        return clean_ie

    def remove_mask(self, ie: str) -> str:
        if not ie or not isinstance(ie, str):
            return ''
        return ''.join(filter(str.isdigit, ie))

    def generate(self, state: str) -> str:
        state = state.upper()
        if state not in self.state_weights:
            raise ValueError(f'Invalid state: {state}')
        weights = self.state_weights[state]
        from random import randint
        digits = [randint(0, 9) for _ in range(len(weights) - 1)]
        check_digit = self.calculate_check_digit(''.join(map(str, digits)), state)
        digits.append(check_digit)
        return ''.join(map(str, digits))

    def validate_check_digit(self, ie: str, state: str) -> bool:
        weights = self.state_weights[state]
        sum_ = sum(int(ie[i]) * weights[i] for i in range(len(weights) - 1))
        remainder = sum_ % 11
        expected = 0 if remainder == 0 else 11 - remainder
        return int(ie[len(weights) - 1]) == expected

    def calculate_check_digit(self, ie: str, state: str) -> int:
        weights = self.state_weights[state]
        sum_ = sum(int(ie[i]) * weights[i] for i in range(len(weights) - 1))
        remainder = sum_ % 11
        return 0 if remainder == 0 else 11 - remainder

    def get_valid_states(self):
        return list(self.state_weights.keys())

    def is_state_supported(self, state: str) -> bool:
        return state.upper() in self.state_weights