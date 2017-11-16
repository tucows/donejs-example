module.exports = {
	"env": {
			"es6": true,
			"mocha": true,
			"shared-node-browser": true
	},
	"extends": [
		"eslint:recommended"
	],
	"parserOptions": {
		"ecmaFeatures": {
				"experimentalObjectRestSpread": true,
				"impliedStrict": true
		},
		"sourceType": "module"
	},
	"parser": "babel-eslint",
	"rules": {
			"indent": [
					"error",
					"tab",
					{ 
						"SwitchCase": 1 
					}
			],
			"semi": [
				"error",
				"always"
			],
			"curly": [
				"error",
				"all"
			],
			"default-case": [
				"error"
			],
			"no-alert": [
				"warn"
			],
			"no-else-return": [
				"error"
			],
			"no-empty-function":[
				"error"
			],
			"no-eval": [
				"error"
			],
			"no-extend-native": [
				"warn"
			],
			"no-extra-bind": [
				"warn"
			],
			"no-implicit-coercion": [
				"error"
			],
			"no-implicit-globals": [
				"error"
			],
			"no-invalid-this": [
				"warn"
			],
			"no-shadow": [
				"warn",
				{ 
					"builtinGlobals": false, 
					"hoist": "functions", 
					"allow": [] 
				}
			],
			"array-bracket-newline": [
				"error",
				{
					"multiline": true
				}
			],
			"brace-style": [
				"error",
				"1tbs",
				{ 
					"allowSingleLine": false
			 	}
			],
			"camelcase": [
				"warn",
				{ 
					"properties": "always" 
				}
			],
			"comma-spacing": [
				"error",
				{ 
					"before": false, 
					"after": true 
				}
			],
			"comma-style": [ 
				"error"
			],
			"eol-last": [
				"error"
			],
			"func-call-spacing": [
				"error"
			],
			"func-style": [
				"error",
				"expression",
				{
					"allowArrowFunctions": true
				}
			],
			"key-spacing": [
				"warn"
			],
			"keyword-spacing": [
				"warn"
			],
			"linebreak-style": [
					"error",
					"unix"
			],
			"lines-around-comment": [
				"warn",
				{
					"afterBlockComment": false,
					"beforeLineComment": true
				}
			],
			"max-depth": [
				"warn",
				{
					"max": 4
				}
			],
			"max-lines": [
				"warn",
				{
					"max": 300,
					"skipBlankLines": true,
					"skipComments": true
				}
			],
			"multiline-comment-style": [
				"warn",
				"starred-block"
			],
			"no-lonely-if": [
				"warn"
			],
			"no-trailing-spaces": [
				"error",
				{
					"ignoreComments": true
				}
			],
			"no-whitespace-before-property": [
				"error"	
			],
			"object-curly-newline": [
				"warn",
				{ 
					"multiline": true 
				}
			],
			"object-curly-spacing": [
				"warn",
				"never",
				{
					"arraysInObjects": true,
					"objectsInObjects": true
				}
			],
			"object-property-newline": [
				"warn",
				{ 
					"allowMultiplePropertiesPerLine": false
				}
			],
			"one-var-declaration-per-line": [
				"warn",
				"initializations"
			],
			"padded-blocks": [
				"warn",
				{
					"blocks": "never",
					"classes": "always"
				}
			],
			"quote-props": [
				"warn",
				"consistent"
			],
			"quotes": [
					"warn",
					"single",
					{
						"avoidEscape": true,
						"allowTemplateLiterals": true
					}
			],
			"require-jsdoc": [
				"error",
				{
					"require": {
						"FunctionDeclaration": true,
						"MethodDefinition": true,
						"ClassDeclaration": true,
						"ArrowFunctionExpression": true,
						"FunctionExpression": true
					}
				}
			],
			"semi": [
				"error"
			],
			"semi-spacing": [
				"warn",
				{
					"before": false, 
					"after": true
				}
			],
			"semi-style": [
				"error",
				"last"
			],
			"space-before-function-paren": [
				"warn",
				"never"
			],
			"space-in-parens": [
				"warn",
				"never"
			],
			"space-infix-ops": [
				"warn"
			],
			"spaced-comment": [
				"error",
				"always",
				{
					"block": {
						"balanced": true
					}
				}
			],
			"switch-colon-spacing": [
				"error",
				{
					"after": true, 
					"before": false
				}
			],
			"template-tag-spacing": [
				"warn",
				"always"
			],
			"wrap-regex": [
				"warn"
			],
			"arrow-body-style": [
				"warn"
			],
			"arrow-parens": [
				"warn"
			],
			"arrow-spacing": [
				"warn"
			],
			"no-confusing-arrow": [
				"warn"
			],
			"no-duplicate-imports": [
				"error"
			],
			"prefer-template": [
				"warn"
			],
			"template-curly-spacing": [
				"warn"
			]
	}
}
