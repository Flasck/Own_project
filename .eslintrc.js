module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["plugin:react/recommended", "airbnb"],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	settings: {
		"import/resolver": {
			alias: {
				map: [
					["@images", "./public/images"],
					["@fonts", "./src/vendor/fonts"],
					["@pages", "./src/pages"],
					["@components", "./src/components"],
					["@store", "./src/store"],
					["@utils", "./src/utils"],
				],
				extensions: [".js", ".jsx"],
			},
		},
	},
	rules: {
		"react/react-in-jsx-scope": "off",
		"react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
		"import/prefer-default-export": "off",
		semi: [0, "never"],
		quotes: [1, "double"],

		indent: [2, "tab", { SwitchCase: 1, VariableDeclarator: 1 }],
		"no-tabs": 0,
		"react/prop-types": 0,
		"react/jsx-indent": [2, "tab"],
		"react/jsx-indent-props": [0, "tab"],
		"react/jsx-closing-tag-location": 0,

		"no-shadow": "off",
		"react/button-has-type": "off",
		"default-param-last": "off",
		"no-extra-parens": 1,
		"react/jsx-wrap-multilines": 0,

		"object-curly-newline": [
			"error",
			{
				ObjectExpression: { multiline: true },
				ObjectPattern: { multiline: true },
				ImportDeclaration: "never",
				ExportDeclaration: { multiline: true, minProperties: 3 },
			},
		],

		"react/function-component-definition": [
			2,
			{
				namedComponents: "arrow-function",
				unnamedComponents: "arrow-function",
			},
		],
		"brace-style": [2, "allman", { allowSingleLine: true }],
		"implicit-arrow-linebreak": 0,
		"comma-dangle": [
			2,
			{
				arrays: "never",
				objects: "always-multiline",
				imports: "never",
				exports: "never",
				functions: "never",
			},
		],
		"import/extensions": [2, { jsx: "never" }],
		"react/jsx-props-no-spreading": 0,
		"react/no-array-index-key": 0,
		"no-use-before-define": 0,
		"no-param-reassign": 0,
		"max-len": [1, 180],
		"jsx-a11y/click-events-have-key-events": 0,
		"jsx-a11y/no-noninteractive-element-interactions": 0,
		"jsx-a11y/no-static-element-interactions": 0,
		"no-plusplus": 0,
		"no-await-in-loop": 0,
		"no-promise-executor-return": 0,
		"linebreak-style": [2, "windows"],
		"arrow-parens": [1, "as-needed"],
		"nonblock-statement-body-position": [0, "any"],
		curly: [1, "multi-or-nest"],
		"no-unused-expressions": 0,
		"react/jsx-no-useless-fragment": 0,
		"jsx-a11y/label-has-associated-control": 0,
		"no-restricted-syntax": 0,
	},
}
