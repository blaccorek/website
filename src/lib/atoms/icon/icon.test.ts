import { describe, expect, it } from 'vitest';

import { ICON_PATHS, type IconName } from './icon.svelte';

describe('ICON_PATHS', () => {
    const names = Object.keys(ICON_PATHS) as IconName[];

    it.each(names)('%s draws at least one path', (name) => {
        expect(ICON_PATHS[name].length).toBeGreaterThan(0);
    });

    it.each(names)('%s starts every path with a move command', (name) => {
        for (const path of ICON_PATHS[name]) {
            expect(path).toMatch(/^[Mm]/);
        }
    });
});
