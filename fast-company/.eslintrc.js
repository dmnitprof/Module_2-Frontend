module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended', 'standard'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        indent: ['error', 4],
        semi: [2, 'never'],
        'space-before-function-paren': [
            'error',
            { anonymous: 'always', named: 'never' }
        ],
        quotes: [2, 'single', { allowTemplateLiterals: true }],
        'object-curly-spacing': 'off',
        'no-case-declarations': "off"
    }
}
