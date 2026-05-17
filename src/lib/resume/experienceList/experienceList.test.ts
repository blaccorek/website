import { describe, expect, test } from 'vitest';

import type { Experience } from './experienceDetails/experienceDetails.svelte';
import { enrichExperience } from './experienceList.svelte';

const baseExperience: Experience = {
    position: { title: 'Engineer', company: 'Acme' },
    startDate: 'january 2024',
    description: 'Built things',
    missions: ['mission a'],
    technologies: ['Kubernetes', 'Unknown']
};

describe('enrichExperience', () => {
    test('replaces technology names with their details', () => {
        const result = enrichExperience(
            baseExperience,
            {
                Kubernetes: {
                    icon: '/images/k8s.png',
                    url: 'https://kubernetes.io'
                }
            },
            (path) => `/base${path}`
        );

        expect(result.technologies).toEqual([
            {
                name: 'Kubernetes',
                icon: '/base/images/k8s.png',
                url: 'https://kubernetes.io'
            },
            { name: 'Unknown', icon: undefined, url: undefined }
        ]);
    });

    test('passes through non-technology fields unchanged', () => {
        const result = enrichExperience(baseExperience, {}, (p) => p);
        expect(result.position).toBe(baseExperience.position);
        expect(result.startDate).toBe(baseExperience.startDate);
        expect(result.missions).toBe(baseExperience.missions);
    });

    test('skips icon resolution when no icon is defined', () => {
        const result = enrichExperience(
            { ...baseExperience, technologies: ['Slack'] },
            { Slack: { url: 'https://slack.com' } },
            () => {
                throw new Error('resolver should not be called');
            }
        );
        expect(result.technologies[0]).toEqual({
            name: 'Slack',
            icon: undefined,
            url: 'https://slack.com'
        });
    });
});
