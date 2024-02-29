exports.VALIDATION_MESSAGES = {
    REQUIRED: (field) => `Моля, въведете ${field}.`,
    MIN_LENGTH: (field, length) => `${field} не може да е по-малко от ${length} символа.`,
    MAX_LENGTH: (field, length) => `${field} не може да е по-дълго от ${length} символа.`,
    EMAIL_TAKEN: 'Имейлът е вече регистриран от друг потребител.',
    PASSWORDS_MISSMATCH: 'Полетата за парола и повтори парола не съвпадат.',
    INVALID_NAME: (field) => `За ${field} трябва да въведете само едно име на български или английски, без цифри или интервали.`,
    INVALID_EMAIL: 'Невалиден имейл',
    INVALID_LOGIN: 'Невалиден имейл адрес или парола. Моля, опитайте отново.'
};