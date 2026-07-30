import type { TechnologyDetails } from '$lib/molecules/technologyChip/technologyChip.svelte';

import type {
    DetailedTechnologiesExperience,
    Experience
} from './experienceDetails/experienceDetails.svelte';

export type AssetResolver = (path: string) => string;

export const enrichExperience = (
    experience: Experience,
    technologies: Record<string, TechnologyDetails>,
    resolveAsset: AssetResolver
): DetailedTechnologiesExperience => ({
    ...experience,
    technologies: experience.technologies.map((name) => {
        const details = technologies[name];
        return {
            name,
            url: details?.url,
            icon: details?.icon ? resolveAsset(details.icon) : undefined
        };
    })
});
