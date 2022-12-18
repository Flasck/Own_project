module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
	],
	overrides: [
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	settings: {
		'import/resolver': {
			alias: {
				map: [
					['@images', './public/images'],
					['@fonts', './public/fonts'],
					['@pages', './src/pages'],
					['@components', './src/components'],
					['@store', './src/store'],
					['@utils', './src/utils'],
				],
				extensions: ['.js', '.jsx']
			}
		}
	},
	rules: {
		"react/react-in-jsx-scope": "off",
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
		"import/prefer-default-export": "off",
		"semi": ["off"],
		"quotes": [1, "double"],
		"import/newline-after-import": ["error", { "count": 2 }],

		"indent": ["error", "tab"],
		"indent": [2, "tab", { "SwitchCase": 1, "VariableDeclarator": 1 }],
		"no-tabs": 0,
		"react/prop-types": 0,
		"react/jsx-indent": [2, "tab"],
		"react/jsx-indent-props": [2, "tab"],
		"react/jsx-closing-tag-location": 1,

		"no-shadow": "off",
		"react/button-has-type": "off",
		"default-param-last": "off",
		"no-extra-parens": 2,
		"react/jsx-wrap-multilines": 0,

		"object-curly-newline": ["error", {
			"ObjectExpression": { "multiline": true },
			"ObjectPattern": { "multiline": true },
			"ImportDeclaration": "never",
			"ExportDeclaration": { "multiline": true, "minProperties": 3 }
		}],

		"react/function-component-definition": [
			2,
			{
				namedComponents: "arrow-function",
				unnamedComponents: "arrow-function",
			},
		],
		"brace-style": [2, "allman", { "allowSingleLine": true }],
		"implicit-arrow-linebreak": 0,
		"comma-dangle": [2, {
			"arrays": "never",
			"objects": "always-multiline",
			"imports": "never",
			"exports": "never",
			"functions": "never"
		}],
		"semi": [2, "always", { "omitLastInOneLineBlock": true }],
		"no-multiple-empty-lines": [2, { max: 3, maxEOF: 1 }],
		"import/extensions": [2, { "jsx": "never" }],
		"react/jsx-props-no-spreading": 0,
		"no-use-before-define": 0,
		"react/no-array-index-key": 0,
		"max-len": [1, 160],
		"jsx-a11y/click-events-have-key-events": 0,
		"jsx-a11y/no-noninteractive-element-interactions": 0,
		"jsx-a11y/no-static-element-interactions": 0,
		"jsx-a11y/label-has-associated-control": 1,
		"no-param-reassign": 0,
		"no-plusplus": 0,
		"no-await-in-loop": 0,
		"no-promise-executor-return": 0,
	},
};
