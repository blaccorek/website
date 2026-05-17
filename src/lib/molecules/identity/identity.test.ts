import { describe, expect, test } from 'vitest';

import { buildFullname } from './identity.svelte';

describe('buildFullname', () => {
    test('capitalizes firstname and uppercases lastname', () => {
        expect(buildFullname('tsiorintsoa', 'andriamihamina')).toBe(
            'Tsiorintsoa ANDRIAMIHAMINA'
        );
    });

    test('preserves already-capitalized firstname', () => {
        expect(buildFullname('Tsiorintsoa', 'Andriamihamina')).toBe(
            'Tsiorintsoa ANDRIAMIHAMINA'
        );
    });

    test('handles empty firstname', () => {
        expect(buildFullname('', 'doe')).toBe(' DOE');
    });

    test('handles unicode lastname', () => {
        expect(buildFullname('élise', 'gaëlle')).toBe('Élise GAËLLE');
    });
});
