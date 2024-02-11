// eslint-disable-next-line no-undef
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [ 'eslint:recommended', 'plugin:react/recommended', 'plugin:effector/recommended' ],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: [ 'react', 'effector' ],
	parser: '@typescript-eslint/parser',
	rules: {
		"no-mixed-spaces-and-tabs": 0,
		'effector/enforce-store-naming-convention': 'off',
		indent: 'off',
		'linebreak-style': 0,
		quotes: [ 'error', 'single' ],
		semi: [ 'warn', 'always' ],
		'no-unused-vars': 'warn',
		'no-unreachable': 'warn',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
	}
};
