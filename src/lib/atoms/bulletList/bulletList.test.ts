import { describe, expect, it } from 'vitest';

import { type BulletMarker, listClasses } from './bulletList.svelte';

describe('listClasses', () => {
    const markers: BulletMarker[] = ['disc', 'check'];

    it.each(markers)('%s spaces its items', (marker) => {
        expect(listClasses(marker)).toContain('space-y-2');
    });

    it('draws the native disc marker in the brand green', () => {
        expect(listClasses('disc')).toContain('list-disc');
        expect(listClasses('disc')).toContain('marker:text-primary-500');
    });

    it('drops the native marker when items carry a check icon', () => {
        expect(listClasses('check')).toContain('list-none');
        expect(listClasses('check')).not.toContain('list-disc');
    });
});
