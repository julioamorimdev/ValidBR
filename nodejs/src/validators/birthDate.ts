export class BirthDateValidator {
  /**
   * Validate birth date (no future dates or people over 130 years old)
   */
  isValid(birthDate: string): boolean {
    if (!birthDate || typeof birthDate !== 'string') return false;
    
    const date = this.parseDate(birthDate);
    if (!date) return false;
    
    const today = new Date();
    const minDate = new Date(today.getFullYear() - 130, today.getMonth(), today.getDate());
    const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    
    return date >= minDate && date <= maxDate;
  }

  /**
   * Get age from birth date
   */
  getAge(birthDate: string): number | null {
    if (!this.isValid(birthDate)) return null;
    
    const date = this.parseDate(birthDate);
    if (!date) return null;
    
    const today = new Date();
    let age = today.getFullYear() - date.getFullYear();
    const monthDiff = today.getMonth() - date.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < date.getDate())) {
      age--;
    }
    
    return age;
  }

  /**
   * Check if person is adult (18+ years old)
   */
  isAdult(birthDate: string): boolean {
    const age = this.getAge(birthDate);
    return age !== null && age >= 18;
  }

  /**
   * Check if person is elderly (60+ years old)
   */
  isElderly(birthDate: string): boolean {
    const age = this.getAge(birthDate);
    return age !== null && age >= 60;
  }

  /**
   * Check if person is minor (under 18 years old)
   */
  isMinor(birthDate: string): boolean {
    const age = this.getAge(birthDate);
    return age !== null && age < 18;
  }

  /**
   * Get birth date in different formats
   */
  format(birthDate: string, format: 'YYYY-MM-DD' | 'DD/MM/YYYY' | 'MM/DD/YYYY' = 'YYYY-MM-DD'): string | null {
    if (!this.isValid(birthDate)) return null;
    
    const date = this.parseDate(birthDate);
    if (!date) return null;
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    switch (format) {
      case 'YYYY-MM-DD':
        return `${year}-${month}-${day}`;
      case 'DD/MM/YYYY':
        return `${day}/${month}/${year}`;
      case 'MM/DD/YYYY':
        return `${month}/${day}/${year}`;
      default:
        return `${year}-${month}-${day}`;
    }
  }

  /**
   * Parse date from various formats
   */
  private parseDate(dateString: string): Date | null {
    // Try different date formats
    const formats = [
      /^\d{4}-\d{2}-\d{2}$/, // YYYY-MM-DD
      /^\d{2}\/\d{2}\/\d{4}$/, // DD/MM/YYYY or MM/DD/YYYY
      /^\d{2}-\d{2}-\d{4}$/, // DD-MM-YYYY or MM-DD-YYYY
    ];
    
    let date: Date | null = null;
    
    // Try ISO format first
    if (formats[0].test(dateString)) {
      date = new Date(dateString);
    } else if (formats[1].test(dateString)) {
      // Assume DD/MM/YYYY for Brazilian format
      const parts = dateString.split('/');
      date = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
    } else if (formats[2].test(dateString)) {
      // Assume DD-MM-YYYY for Brazilian format
      const parts = dateString.split('-');
      date = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
    }
    
    // Check if date is valid
    if (date && !isNaN(date.getTime())) {
      return date;
    }
    
    return null;
  }

  /**
   * Get zodiac sign from birth date
   */
  getZodiacSign(birthDate: string): string | null {
    if (!this.isValid(birthDate)) return null;
    
    const date = this.parseDate(birthDate);
    if (!date) return null;
    
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini';
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra';
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio';
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius';
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn';
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius';
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Pisces';
    
    return null;
  }
} 