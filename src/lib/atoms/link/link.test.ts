import { describe, expect, it } from 'vitest';

import { externalAttributes, isExternal, linkClasses } from './link.svelte';

describe('isExternal', () => {
    it.each(['https://www.shodops.io/', 'http://example.org', 'mailto:a@b.io'])(
        'treats %s as external',
        (href) => {
            expect(isExternal(href)).toBe(true);
        }
    );

    it.each(['/', '/experience', './favicon.png', '#skills'])(
        'treats %s as internal',
        (href) => {
            expect(isExternal(href)).toBe(false);
        }
    );
});

describe('externalAttributes', () => {
    it('opens external links in a new tab without leaking the opener', () => {
        expect(externalAttributes('https://www.shodops.io/')).toEqual({
            target: '_blank',
            rel: 'noopener noreferrer'
        });
    });

    it('leaves internal links alone', () => {
        expect(externalAttributes('/education')).toEqual({
            target: undefined,
            rel: undefined
        });
    });
});

describe('linkClasses', () => {
    it('underlines the text variants on hover', () => {
        expect(linkClasses('accent')).toContain('hover:underline');
        expect(linkClasses('quiet')).toContain('hover:underline');
    });

    it('leaves the plain variant unpainted for the caller to style', () => {
        expect(linkClasses('plain')).not.toContain('text-');
        expect(linkClasses('plain')).not.toContain('underline');
    });

    it('carries the brand colour at rest only in the accent variant', () => {
        expect(linkClasses('accent')).toContain('text-primary-700');
        expect(linkClasses('quiet')).toContain('text-gray-500');
        expect(linkClasses('quiet')).not.toMatch(/(^|\s)text-primary-700/);
    });

    it('brings the quiet variant to the brand colour on hover', () => {
        expect(linkClasses('quiet')).toContain('hover:text-primary-700');
    });
});
