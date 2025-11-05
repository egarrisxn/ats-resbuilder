import {defineConfig, globalIgnores} from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import prettier from 'eslint-config-prettier/flat'

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    rules: {
      'no-console': ['warn', {allow: ['warn', 'error']}],
    },
  },
  globalIgnores([
    '**/node_modules/',
    'public/',
    '.git/',
    '.vscode/',
    '.next/',
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  prettier,
])

export default eslintConfig
