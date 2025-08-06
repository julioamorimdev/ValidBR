"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameValidator = void 0;
class NameValidator {
    /**
     * Validate full name (no numbers or invalid characters)
     */
    isValid(name) {
        if (!name || typeof name !== 'string')
            return false;
        const cleanName = this.sanitize(name);
        // Check if name is too short or too long
        if (cleanName.length < 2 || cleanName.length > 100)
            return false;
        // Check if name contains only letters, spaces, and common Brazilian name characters
        const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/;
        if (!nameRegex.test(cleanName))
            return false;
        // Check if name has at least two parts (first name and last name)
        const nameParts = cleanName.split(' ').filter(part => part.length > 0);
        if (nameParts.length < 2)
            return false;
        // Check if each part has at least 2 characters
        for (const part of nameParts) {
            if (part.length < 2)
                return false;
        }
        return true;
    }
    /**
     * Sanitize name by removing extra spaces and normalizing
     */
    sanitize(name) {
        if (!name || typeof name !== 'string')
            return '';
        return name
            .trim()
            .replace(/\s+/g, ' ') // Replace multiple spaces with single space
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
    /**
     * Get first name
     */
    getFirstName(name) {
        if (!this.isValid(name))
            return null;
        const cleanName = this.sanitize(name);
        const nameParts = cleanName.split(' ').filter(part => part.length > 0);
        return nameParts[0] || null;
    }
    /**
     * Get last name
     */
    getLastName(name) {
        if (!this.isValid(name))
            return null;
        const cleanName = this.sanitize(name);
        const nameParts = cleanName.split(' ').filter(part => part.length > 0);
        if (nameParts.length < 2)
            return null;
        return nameParts.slice(-1)[0] || null;
    }
    /**
     * Get middle names (names between first and last)
     */
    getMiddleNames(name) {
        if (!this.isValid(name))
            return [];
        const cleanName = this.sanitize(name);
        const nameParts = cleanName.split(' ').filter(part => part.length > 0);
        if (nameParts.length <= 2)
            return [];
        return nameParts.slice(1, -1);
    }
    /**
     * Get initials (first letter of each name part)
     */
    getInitials(name) {
        if (!this.isValid(name))
            return null;
        const cleanName = this.sanitize(name);
        const nameParts = cleanName.split(' ').filter(part => part.length > 0);
        return nameParts.map(part => {
            const firstChar = part[0];
            return firstChar ? firstChar.toUpperCase() : '';
        }).join('.') + '.';
    }
    /**
     * Check if name contains common Brazilian names
     */
    hasCommonBrazilianName(name) {
        if (!this.isValid(name))
            return false;
        const cleanName = this.sanitize(name).toLowerCase();
        const nameParts = cleanName.split(' ');
        const commonBrazilianNames = [
            'joão', 'josé', 'maria', 'ana', 'pedro', 'carlos', 'paulo', 'lucas',
            'gabriel', 'rafael', 'daniel', 'marcelo', 'bruno', 'eduardo', 'felipe',
            'andré', 'luiz', 'marcos', 'leonardo', 'rodrigo', 'thiago', 'marcelo',
            'silva', 'santos', 'oliveira', 'souza', 'rodrigues', 'ferreira',
            'alves', 'pereira', 'lima', 'gomes', 'ribeiro', 'carvalho', 'lopes',
            'soares', 'fernandes', 'vieira', 'barbosa', 'rocha', 'dias', 'nascimento'
        ];
        return nameParts.some(part => commonBrazilianNames.includes(part));
    }
}
exports.NameValidator = NameValidator;
//# sourceMappingURL=name.js.map