import { describe, expect, test } from 'vitest';

import { buildTitle } from './experienceDetails.svelte';

describe('buildTitle', () => {
    test('formats direct employment', () => {
        expect(
            buildTitle({ title: 'DevOps engineer', company: 'Wemanity' })
        ).toBe('DevOps engineer at Wemanity');
    });

    test('formats consulting work with end client', () => {
        expect(
            buildTitle({
                title: 'DevOps engineer',
                company: 'Wemanity',
                client: 'CACIB'
            })
        ).toBe('Consultant - DevOps engineer at CACIB (for Wemanity)');
    });

    test('reads name from structured company object', () => {
        expect(
            buildTitle({
                title: 'Engineer',
                company: { name: 'Acme', url: '', description: '' }
            })
        ).toBe('Engineer at Acme');
    });
});
