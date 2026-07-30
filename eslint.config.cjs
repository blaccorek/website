const { defineConfig, globalIgnores } = require('eslint/config');

const js = require('@eslint/js');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const prettier = require('eslint-config-prettier');
const svelte = require('eslint-plugin-svelte');
const unusedImports = require('eslint-plugin-unused-imports');
const globals = require('globals');
const svelteParser = require('svelte-eslint-parser');

module.exports = defineConfig([
    js.configs.recommended,
    ...typescriptEslint.configs['flat/recommended'],
    ...svelte.configs['flat/recommended'],
    prettier,
    ...svelte.configs['flat/prettier'],
    {
        languageOptions: {
            parser: tsParser,
            sourceType: 'module',
            ecmaVersion: 2020,

            parserOptions: {
                extraFileExtensions: ['.svelte']
            },

            globals: {
                ...globals.browser,
                ...globals.node
            }
        },

        plugins: {
            'unused-imports': unusedImports
        },

        rules: {
            'unused-imports/no-unused-imports': 'error'
        }
    },
    {
        /* The single place an href passes through unresolved: callers resolve
           internal routes before handing them over, and external URLs must not
           be resolved at all. Every other component links through this atom. */
        files: ['src/lib/atoms/link/index.svelte'],

        rules: {
            'svelte/no-navigation-without-resolve': 'off'
        }
    },
    {
        /* This config, and any other CommonJS file, is loaded by Node itself. */
        files: ['**/*.cjs'],

        rules: {
            '@typescript-eslint/no-require-imports': 'off'
        }
    },
    {
        files: ['**/*.svelte'],

        languageOptions: {
            parser: svelteParser,

            parserOptions: {
                parser: tsParser
            }
        }
    },
    globalIgnores([
        '**/.DS_Store',
        '**/node_modules',
        'build',
        '.svelte-kit',
        'package',
        '**/.env',
        '**/.env.*',
        '!**/.env.example',
        '**/pnpm-lock.yaml',
        '**/package-lock.json',
        '**/yarn.lock'
    ])
]);
