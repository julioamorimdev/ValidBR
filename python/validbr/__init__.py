from .validators.cpf import CPFValidator
from .validators.cnpj import CNPJValidator
from .validators.phone import PhoneValidator
from .validators.email import EmailValidator
from .validators.name import NameValidator
from .validators.birth_date import BirthDateValidator
from .validators.cep import CEPValidator
from .validators.rg import RGValidator
from .validators.ie import IEValidator


class ValidBR:
    """Main ValidBR class with all validators."""
    
    def __init__(self):
        self.cpf = CPFValidator()
        self.cnpj = CNPJValidator()
        self.phone = PhoneValidator()
        self.email = EmailValidator()
        self.name = NameValidator()
        self.birth_date = BirthDateValidator()
        self.cep = CEPValidator()
        self.rg = RGValidator()
        self.ie = IEValidator()

    @staticmethod
    def sanitize(input_str: str) -> str:
        """Sanitize input by removing extra spaces and invalid characters."""
        if not input_str or not isinstance(input_str, str):
            return ""
        return " ".join(input_str.strip().split())

    @staticmethod
    def remove_non_numeric(input_str: str) -> str:
        """Remove all non-numeric characters from string."""
        if not input_str or not isinstance(input_str, str):
            return ""
        return "".join(filter(str.isdigit, input_str))

    @staticmethod
    def remove_non_alphabetic(input_str: str) -> str:
        """Remove all non-alphabetic characters from string."""
        if not input_str or not isinstance(input_str, str):
            return ""
        import re
        return re.sub(r'[^a-zA-ZÀ-ÿ\s]', '', input_str)


# Create a singleton instance
validbr = ValidBR()

# Export the main class and instance
__all__ = ['ValidBR', 'validbr'] 