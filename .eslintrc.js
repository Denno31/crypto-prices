module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'typeorm'],
    rules: {
        'no-console': [1, { allow: ['info'] }],
        'no-unused-expressions': 0,
        'class-methods-use-this': 0, // fix type-graphql issue,
        '@typescript-eslint/no-unused-vars': 2,
        '@typescript-eslint/no-duplicate-imports': 2,
        'import/prefer-default-export': 0,
        'import/no-unresolved': 0,
        'import/extensions': 0,
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
            },
        ],
        'import/order': [
            'error',
            {
                groups: [
                    'builtin', // node built in modules
                    'external', // load external packages first
                    'internal', // internal modules / files
                    'parent', // modules from a parent directory
                    'sibling', // modules from sibling directory
                    'index', // index of current directory
                    'object',
                    'type',
                ],
                alphabetize: {
                    order: 'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
                    caseInsensitive: true /* ignore case. Options: [true, false] */,
                },
            },
        ],
    },
};
