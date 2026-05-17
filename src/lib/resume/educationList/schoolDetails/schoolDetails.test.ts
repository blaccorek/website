import { describe, expect, test } from 'vitest';

import { buildDate, selectGrant } from './schoolDetails.svelte';

describe('selectGrant', () => {
    test('prefers degree when present', () => {
        expect(selectGrant({ degree: 'MSc', programType: 'Bootcamp' })).toBe(
            'MSc'
        );
    });

    test('falls back to programType when degree is missing', () => {
        expect(selectGrant({ programType: 'Bootcamp' })).toBe('Bootcamp');
    });

    test('falls back to default when both are missing', () => {
        expect(selectGrant({})).toBe('Completed studies');
    });
});

describe('buildDate', () => {
    test('formats validity range when hasValidity is true', () => {
        expect(
            buildDate({ startYear: 2021, endYear: 2024, hasValidity: true })
        ).toBe('Valid from 2021 to 2024');
    });

    test('shows "now" when valid certification has no endYear', () => {
        expect(buildDate({ startYear: 2021, hasValidity: true })).toBe(
            'Valid from 2021 to now'
        );
    });

    test('returns endYear as plain string when not a validity range', () => {
        expect(buildDate({ endYear: 2020 })).toBe('2020');
    });

    test('falls back to current year when no dates are provided', () => {
        expect(buildDate({}, () => 2030)).toBe('2030');
    });
});
