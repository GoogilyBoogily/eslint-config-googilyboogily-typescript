import type { Linter } from 'eslint';

const config: Linter.Config = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		project: './tsconfig.json'
	},
	env: {
		node: true,
		es6: true
	},
	plugins: ['@typescript-eslint', 'import', 'prettier'],
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:import/typescript', 'prettier'],
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx']
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true
			}
		}
	},
	reportUnusedDisableDirectives: true,
	rules: {
		'prettier/prettier': 'error',
		semi: 'off',
		'@typescript-eslint/semi': ['error'],
		quotes: 'off',
		'@typescript-eslint/quotes': ['error', 'single'],
		'comma-dangle': 'off',
		'@typescript-eslint/comma-dangle': ['error', 'never'],
		'comma-spacing': 'off',
		'@typescript-eslint/comma-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'func-call-spacing': 'off',
		'@typescript-eslint/func-call-spacing': ['error', 'never'],
		'keyword-spacing': 'off',
		'@typescript-eslint/keyword-spacing': [
			'error',
			{
				before: true,
				after: true
			}
		],
		'key-spacing': [
			'error',
			{
				beforeColon: false,
				afterColon: true,
				mode: 'strict'
			}
		],
		'space-unary-ops': [
			'error',
			{
				words: true,
				nonwords: false
			}
		],
		'space-infix-ops': 'error',
		'prefer-template': 'error',
		'no-unneeded-ternary': 'error',
		'lines-between-class-members': 'off',
		'@typescript-eslint/lines-between-class-members': ['error', 'always'],
		'no-dupe-class-members': 'off',
		'@typescript-eslint/no-dupe-class-members': ['error'],
		'no-duplicate-imports': 'off',
		'import/no-duplicates': ['error'],
		'no-extra-semi': 'off',
		'@typescript-eslint/no-extra-semi': ['error'],
		'no-multiple-empty-lines': [
			'error',
			{
				max: 1,
				maxEOF: 1,
				maxBOF: 1
			}
		],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: '*',
				next: 'return'
			},
			{
				blankLine: 'always',
				prev: ['const', 'let', 'var'],
				next: '*'
			},
			{
				blankLine: 'always',
				prev: '*',
				next: ['const', 'let', 'var', 'expression']
			},
			{
				blankLine: 'any',
				prev: ['expression'],
				next: ['expression']
			},
			{
				blankLine: 'any',
				prev: ['const', 'let', 'var'],
				next: ['const', 'let', 'var']
			},
			{
				blankLine: 'always',
				prev: 'directive',
				next: '*'
			},
			{
				blankLine: 'any',
				prev: 'directive',
				next: 'directive'
			},
			{
				blankLine: 'always',
				prev: '*',
				next: ['break', 'class', 'continue', 'do', 'export', 'for', 'function', 'if', 'switch', 'throw', 'try', 'while']
			},
			{
				blankLine: 'always',
				prev: [
					'break',
					'class',
					'continue',
					'do',
					'export',
					'for',
					'function',
					'if',
					'switch',
					'throw',
					'try',
					'while'
				],
				next: '*'
			},
			{
				blankLine: 'always',
				prev: '*',
				next: 'block-like'
			}
		],
		camelcase: 'off',
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'variable',
				format: ['camelCase', 'UPPER_CASE'],
				leadingUnderscore: 'allow'
			},
			{
				selector: 'parameter',
				format: ['camelCase'],
				leadingUnderscore: 'allow'
			},
			{
				selector: ['property', 'parameterProperty', 'accessor', 'enumMember'],
				modifiers: ['private'],
				format: ['camelCase'],
				leadingUnderscore: 'require'
			},
			{
				selector: 'typeLike',
				format: ['PascalCase']
			},
			{
				selector: 'interface',
				format: ['PascalCase'],
				prefix: ['I']
			},
			{
				selector: [
					'classProperty',
					'objectLiteralProperty',
					'typeProperty',
					'classMethod',
					'objectLiteralMethod',
					'typeMethod',
					'accessor',
					'enumMember'
				],
				format: null,
				modifiers: ['requiresQuotes']
			}
		],
		'@typescript-eslint/restrict-plus-operands': 'error',
		'brace-style': 'off',
		'@typescript-eslint/brace-style': [
			'error',
			'1tbs',
			{
				allowSingleLine: true
			}
		],
		'no-implied-eval': 'off',
		'@typescript-eslint/no-implied-eval': 'error',
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': 'error',
		'no-return-await': 'off',
		'@typescript-eslint/return-await': 'error',
		// https://typescript-eslint.io/rules/consistent-generic-constructors/
		'@typescript-eslint/consistent-generic-constructors': 'error',
		// https://typescript-eslint.io/rules/consistent-type-assertions/
		'@typescript-eslint/consistent-type-assertions': 'error',
		// https://typescript-eslint.io/rules/consistent-indexed-object-style/
		'@typescript-eslint/consistent-indexed-object-style': 'error',
		// https://typescript-eslint.io/rules/consistent-type-exports/
		'@typescript-eslint/consistent-type-exports': 'error',
		// https://typescript-eslint.io/rules/consistent-type-imports/
		'@typescript-eslint/consistent-type-imports': 'error',
		// https://typescript-eslint.io/rules/no-import-type-side-effects/
		'@typescript-eslint/no-import-type-side-effects': 'error',
		'require-await': 'off',
		'@typescript-eslint/require-await': 'error',
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true
				},
				groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'object', 'type']
			}
		]
	}
};

//NOTE: This has to be in this syntax.
// ESLint will not parse the config correctly if we use `export default`.
export = config;
