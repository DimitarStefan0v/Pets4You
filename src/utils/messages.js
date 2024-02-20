exports.VALIDATION_MESSAGES = {
    REQUIRED: (field) => `${field} е задължително`,
    MIN_LENGTH: (field, length) => `${field} не може да е по-малко от ${length} символа`,
    MAX_LENGTH: (field, length) => `${field} не може да е по-дълго от ${length} символа`,
    EMAIL_TAKEN: 'Имейлът е вече регистриран от друг потребител',
};