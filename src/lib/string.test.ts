import { describe, expect, test } from 'vitest';

import { toCamelCase } from './string';

describe('toCamelCase', () => {
    test('toCamelCase handles spaces', () => {
        expect(toCamelCase('hello world')).toBe('Hello World');
    });

    test('toCamelCase handles mixed case', () => {
        expect(toCamelCase('hElLo WoRLd')).toBe('Hello World');
    });

    test('toCamelCase handles single word', () => {
        expect(toCamelCase('hello')).toBe('Hello');
    });

    test('toCamelCase handles empty string', () => {
        expect(toCamelCase('')).toBe('');
    });

    test('toCamelCase trim multiple spaces', () => {
        expect(toCamelCase('hello   world  ')).toBe('Hello World');
    });
});
