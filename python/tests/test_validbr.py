import pytest
from validbr import validbr

def test_cpf():
    assert validbr.cpf.is_valid('123.456.789-09')
    assert not validbr.cpf.is_valid('123.456.789-10')
    cpf = validbr.cpf.generate()
    assert validbr.cpf.is_valid(cpf)
    masked = validbr.cpf.apply_mask('12345678909')
    assert masked == '123.456.789-09'
    assert validbr.cpf.remove_mask(masked) == '12345678909'

def test_cnpj():
    assert validbr.cnpj.is_valid('12.345.678/0001-95')
    assert not validbr.cnpj.is_valid('12.345.678/0001-96')
    cnpj = validbr.cnpj.generate()
    assert validbr.cnpj.is_valid(cnpj)
    masked = validbr.cnpj.apply_mask('12345678000195')
    assert masked == '12.345.678/0001-95'
    assert validbr.cnpj.remove_mask(masked) == '12345678000195'

def test_phone():
    assert validbr.phone.is_valid('(11) 91234-5678')
    assert not validbr.phone.is_valid('(99) 91234-5678')
    masked = validbr.phone.apply_mask('11912345678')
    assert masked == '(11) 91234-5678'
    assert validbr.phone.remove_mask(masked) == '11912345678'
    assert validbr.phone.get_ddd('(11) 91234-5678') == '11'
    assert validbr.phone.get_state('11') == 'São Paulo'

def test_email():
    assert validbr.email.is_valid('user@example.com')
    assert not validbr.email.is_valid('invalid-email')
    assert validbr.email.sanitize(' USER@EXAMPLE.COM ') == 'user@example.com'
    assert validbr.email.get_domain('user@example.com') == 'example.com'
    assert validbr.email.get_username('user@example.com') == 'user'

def test_name():
    assert validbr.name.is_valid('João Silva Santos')
    assert not validbr.name.is_valid('João')
    assert validbr.name.sanitize('  joão   silva  ') == 'João Silva'
    assert validbr.name.get_first_name('João Silva Santos') == 'João'
    assert validbr.name.get_last_name('João Silva Santos') == 'Santos'
    assert validbr.name.get_middle_names('João Silva Santos') == ['Silva']

def test_birth_date():
    assert validbr.birth_date.is_valid('1990-05-15')
    assert not validbr.birth_date.is_valid('2025-05-15')
    age = validbr.birth_date.get_age('1990-05-15')
    assert age > 30
    assert validbr.birth_date.is_adult('1990-05-15')
    assert validbr.birth_date.is_minor('2010-05-15')

def test_cep():
    assert validbr.cep.is_valid('01234-567')
    assert not validbr.cep.is_valid('123')
    masked = validbr.cep.apply_mask('01234567')
    assert masked == '01234-567'
    assert validbr.cep.remove_mask(masked) == '01234567'
    assert validbr.cep.get_state('01234-567') == 'SP'

def test_rg():
    assert validbr.rg.is_valid('12.345.678-9')
    assert not validbr.rg.is_valid('123')
    masked = validbr.rg.apply_mask('123456789')
    assert masked == '12.345.678-9'
    assert validbr.rg.remove_mask(masked) == '123456789'

def test_ie():
    assert validbr.ie.is_valid('12345678', 'SP') is False  # Exemplo simplificado
    assert validbr.ie.is_state_supported('SP')
    assert not validbr.ie.is_state_supported('XX')

def test_utils():
    assert validbr.sanitize('  test   string  ') == 'test string'
    assert validbr.remove_non_numeric('abc123def456') == '123456'
    assert validbr.remove_non_alphabetic('abc123def!@#') == 'abcdef'