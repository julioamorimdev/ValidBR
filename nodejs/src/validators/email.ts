export class EmailValidator {
  /**
   * Validate email format
   */
  isValid(email: string): boolean {
    if (!email || typeof email !== 'string') return false;
    
    const cleanEmail = this.sanitize(email);
    
    // Basic email regex pattern
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    if (!emailRegex.test(cleanEmail)) return false;
    
    // Check for common Brazilian email providers
    const domain = cleanEmail.split('@')[1]?.toLowerCase();
    if (!domain) return false;
    
    // Check if domain has valid TLD
    const validTLDs = ['.com', '.com.br', '.br', '.net', '.org', '.edu', '.gov'];
    const hasValidTLD = validTLDs.some(tld => domain.endsWith(tld));
    
    return hasValidTLD;
  }

  /**
   * Sanitize email by removing extra spaces
   */
  sanitize(email: string): string {
    if (!email || typeof email !== 'string') return '';
    return email.trim().toLowerCase();
  }

  /**
   * Extract domain from email
   */
  getDomain(email: string): string | null {
    if (!this.isValid(email)) return null;
    
    const cleanEmail = this.sanitize(email);
    return cleanEmail.split('@')[1] || null;
  }

  /**
   * Extract username from email
   */
  getUsername(email: string): string | null {
    if (!this.isValid(email)) return null;
    
    const cleanEmail = this.sanitize(email);
    return cleanEmail.split('@')[0] || null;
  }

  /**
   * Check if email is from a common Brazilian provider
   */
  isBrazilianProvider(email: string): boolean {
    if (!this.isValid(email)) return false;
    
    const domain = this.getDomain(email);
    if (!domain) return false;
    
    const brazilianProviders = [
      'gmail.com',
      'hotmail.com',
      'outlook.com',
      'yahoo.com',
      'uol.com.br',
      'bol.com.br',
      'ig.com.br',
      'terra.com.br',
      'globo.com',
      'oi.com.br'
    ];
    
    return brazilianProviders.includes(domain);
  }
} 