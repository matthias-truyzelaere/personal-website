import stylistic from '@stylistic/eslint-plugin'
import nextTs from 'eslint-config-next/typescript'
import perfectionist from 'eslint-plugin-perfectionist'
import nextVitals from 'eslint-config-next/core-web-vitals'
import { defineConfig, globalIgnores } from 'eslint/config'

const eslintConfig = defineConfig([
	.../** @type {any} */ (nextTs),
	.../** @type {any} */ (nextVitals),
	globalIgnores(['.next/**', '.open-next/**', 'out/**', 'build/**', 'next-env.d.ts']),
	{
		plugins: {
			perfectionist,
			'@stylistic': stylistic,
		},
		rules: {
			'perfectionist/sort-jsx-props': ['error', { type: 'alphabetical', order: 'asc' }],
			'@stylistic/jsx-curly-brace-presence': ['error', { props: 'always', children: 'never', propElementValues: 'always' }],
		},
	},
])

export default eslintConfig
