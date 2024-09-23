module.exports = [
    {
      files: ['**/*.js'],
      languageOptions: {
        ecmaVersion: 2021,  // Use ECMAScript 2021
        sourceType: 'module',  // Enable ES Modules (import/export)
      },
      rules: {
        'no-unused-vars': 'warn',  // Warn for unused variables
        'no-console': 'off',  // Allow console.log statements
      },
    },
  ];
  