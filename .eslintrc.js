module.exports = {
	parser: '@typescript-eslint/parser', // Specifies the ESLint parser
	extends: [
		'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
		'eslint:recommended',
	],
	parserOptions: {
		ecmaVersion: 2017, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
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
		// Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
		// e.g. '@typescript-eslint/explicit-function-return-type': 'off',
		quotes: 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/semi': 2,
		'@typescript-eslint/quotes': ['error', 'single'],
	},
	env: {
		node: true,
	},
};
