module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint'
    ],
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
    },
    ignorePatterns: [
        'webpack.config.js',
        'node_modules/',
        'dist/',
        'src/*.js',
        '*.js',
        'test/',
    ],
    rules: {
        'quotes': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
    },
    env: {
        node: true,
    },
};
