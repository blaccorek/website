import { describe, expect, it } from 'vitest';

import { navLinkClasses } from './navBar.svelte';

describe('navLinkClasses', () => {
    it('fills the current link with the brand colour', () => {
        expect(navLinkClasses(true)).toContain('bg-primary-700');
        expect(navLinkClasses(true)).toContain('text-white');
    });

    it('leaves the other links unfilled until hovered', () => {
        const classes = navLinkClasses(false);
        expect(classes).not.toContain('bg-primary-700');
        expect(classes).toContain('hover:bg-primary-50');
    });

    it('keeps the shared shape in both states', () => {
        expect(navLinkClasses(true)).toContain('rounded-full');
        expect(navLinkClasses(false)).toContain('rounded-full');
    });
});
