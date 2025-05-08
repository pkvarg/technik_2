import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  // Define ignores first - this tells ESLint which files to ignore
  {
    ignores: [
      // Common ignores
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'public/**',

      // Prisma generated files
      './src/prisma/generated/**',
      './src/prisma/generated/prisma/**',
    ],
  },

  // Then extend from the Next.js configurations
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
]

export default eslintConfig
