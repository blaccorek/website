import { describe, expect, it } from 'vitest';

import { type HeadingLevel, headingClasses } from './heading.svelte';

describe('headingClasses', () => {
    const levels: HeadingLevel[] = [1, 2, 3, 4];

    it.each(levels)('gives level %i a colour and a size', (level) => {
        const classes = headingClasses(level);
        expect(classes).toContain('text-gray-900');
        expect(classes).toContain('dark:text-white');
        expect(classes).toMatch(/text-(base|lg|2xl|3xl)/);
    });

    it('shrinks the type scale as the level goes deeper', () => {
        expect(headingClasses(1)).toContain('text-3xl');
        expect(headingClasses(2)).toContain('text-2xl');
        expect(headingClasses(3)).toContain('text-lg');
        expect(headingClasses(4)).toContain('text-base');
    });
});
